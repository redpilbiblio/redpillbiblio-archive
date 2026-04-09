import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface QueueRequest {
  document_id: string;
  original_url: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body: QueueRequest = await req.json();

    if (!body.document_id) {
      return new Response(
        JSON.stringify({ error: "document_id is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: existingDoc, error: docError } = await supabase
      .from("documents")
      .select("id, source_url")
      .eq("id", body.document_id)
      .maybeSingle();

    if (docError || !existingDoc) {
      return new Response(
        JSON.stringify({ error: "Document not found" }),
        {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const originalUrl = body.original_url || existingDoc.source_url;

    if (!originalUrl) {
      return new Response(
        JSON.stringify({ error: "No URL to archive" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: existingArchive } = await supabase
      .from("archived_documents")
      .select("id, archive_status")
      .eq("document_id", body.document_id)
      .eq("original_url", originalUrl)
      .maybeSingle();

    if (existingArchive) {
      return new Response(
        JSON.stringify({
          message: "Archive record already exists",
          archive_id: existingArchive.id,
          status: existingArchive.archive_status,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: newArchive, error: insertError } = await supabase
      .from("archived_documents")
      .insert({
        document_id: body.document_id,
        original_url: originalUrl,
        archive_status: "pending",
      })
      .select("id, archive_status")
      .single();

    if (insertError) {
      return new Response(
        JSON.stringify({ error: "Failed to queue for archival", details: insertError.message }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Queued for archival",
        archive_id: newArchive.id,
        status: newArchive.archive_status,
      }),
      {
        status: 201,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
