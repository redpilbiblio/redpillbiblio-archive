export interface SocialHandle {
  platform: string;
  handle: string;
  url: string;
  archived?: boolean;
}

export const SOCIAL_HANDLES: Record<string, SocialHandle[]> = {

  // ── WATCHLIST ──────────────────────────────────────────────────────────────
  "Bill Clinton": [
    { platform: "X", handle: "@BillClinton", url: "https://x.com/BillClinton" },
  ],
  "Hillary Clinton": [
    { platform: "X", handle: "@HillaryClinton", url: "https://x.com/HillaryClinton" },
    { platform: "Instagram", handle: "@hillaryclinton", url: "https://www.instagram.com/hillaryclinton/" },
  ],
  "Chelsea Clinton": [
    { platform: "X", handle: "@ChelseaClinton", url: "https://x.com/ChelseaClinton" },
    { platform: "Instagram", handle: "@chelseaclinton", url: "https://www.instagram.com/chelseaclinton/" },
  ],
  "Pete Hegseth": [
    { platform: "X", handle: "@PeteHegseth", url: "https://x.com/PeteHegseth" },
  ],
  "PETE HEGSETH": [
    { platform: "X", handle: "@PeteHegseth", url: "https://x.com/PeteHegseth" },
  ],
  "Elon Musk": [
    { platform: "X", handle: "@elonmusk", url: "https://x.com/elonmusk" },
    { platform: "Instagram", handle: "@elonmusk", url: "https://www.instagram.com/elonmusk/" },
  ],
  "ELON MUSK": [
    { platform: "X", handle: "@elonmusk", url: "https://x.com/elonmusk" },
    { platform: "Instagram", handle: "@elonmusk", url: "https://www.instagram.com/elonmusk/" },
  ],
  "Donald Trump": [
    { platform: "X", handle: "@realDonaldTrump", url: "https://x.com/realDonaldTrump" },
    { platform: "Instagram", handle: "@realdonaldtrump", url: "https://www.instagram.com/realdonaldtrump/" },
  ],
  "Robert F. Kennedy Jr.": [
    { platform: "X", handle: "@RobertKennedyJr", url: "https://x.com/RobertKennedyJr" },
    { platform: "Instagram", handle: "@robertfkennedyjr", url: "https://www.instagram.com/robertfkennedyjr/" },
  ],
  "Jes Staley": [
    { platform: "LinkedIn", handle: "Jes Staley", url: "https://www.linkedin.com/in/jes-staley" },
  ],
  "JES STALEY": [
    { platform: "LinkedIn", handle: "Jes Staley", url: "https://www.linkedin.com/in/jes-staley" },
  ],
  "Michelle Bowman": [
    { platform: "LinkedIn", handle: "Michelle Bowman", url: "https://www.linkedin.com/in/michelle-bowman" },
  ],
  "MICHELLE BOWMAN": [
    { platform: "LinkedIn", handle: "Michelle Bowman", url: "https://www.linkedin.com/in/michelle-bowman" },
  ],

  // ── CLINTON DYNASTY ────────────────────────────────────────────────────────
  "William Jefferson Clinton": [
    { platform: "X", handle: "@BillClinton", url: "https://x.com/BillClinton" },
  ],
  "Hillary Diane Rodham Clinton": [
    { platform: "X", handle: "@HillaryClinton", url: "https://x.com/HillaryClinton" },
    { platform: "Instagram", handle: "@hillaryclinton", url: "https://www.instagram.com/hillaryclinton/" },
  ],
  "Chelsea Victoria Clinton": [
    { platform: "X", handle: "@ChelseaClinton", url: "https://x.com/ChelseaClinton" },
    { platform: "Instagram", handle: "@chelseaclinton", url: "https://www.instagram.com/chelseaclinton/" },
  ],
  "Marc Mezvinsky": [
    { platform: "LinkedIn", handle: "Marc Mezvinsky", url: "https://www.linkedin.com/in/marc-mezvinsky" },
  ],
  "Marc Margolies Mezvinsky": [
    { platform: "LinkedIn", handle: "Marc Mezvinsky", url: "https://www.linkedin.com/in/marc-mezvinsky" },
  ],
  "Monica Lewinsky": [
    { platform: "X", handle: "@MonicaLewinsky", url: "https://x.com/MonicaLewinsky" },
    { platform: "Instagram", handle: "@monica_lewinsky", url: "https://www.instagram.com/monica_lewinsky/" },
  ],
  "Juanita Broaddrick": [
    { platform: "X", handle: "@atensnut", url: "https://x.com/atensnut" },
  ],

  // ── ROTHSCHILD FAMILY ──────────────────────────────────────────────────────
  "Lynn Forester de Rothschild": [
    { platform: "X", handle: "@LadyLynnFdR", url: "https://x.com/LadyLynnFdR" },
    { platform: "LinkedIn", handle: "Lynn Forester De Rothschild", url: "https://www.linkedin.com/in/lynnderothschild" },
  ],
  "Rothschild & Co": [
    { platform: "X", handle: "@rothschildandco", url: "https://x.com/rothschildandco" },
  ],

  // ── ROCKEFELLER FAMILY ─────────────────────────────────────────────────────
  "Ariana Rockefeller": [
    { platform: "X", handle: "@ArianaRockefeller", url: "https://x.com/ArianaRockefeller" },
    { platform: "Instagram", handle: "@arianarock", url: "https://www.instagram.com/arianarock/" },
  ],
  "David Rockefeller Jr.": [
    { platform: "Instagram", handle: "@david.rockefeller", url: "https://www.instagram.com/david.rockefeller/" },
  ],
  "Rockefeller Capital Management": [
    { platform: "X", handle: "@rockefellercap", url: "https://x.com/rockefellercap" },
  ],

  // ── WALTON FAMILY ──────────────────────────────────────────────────────────
  "Alice Walton": [
    { platform: "X", handle: "@alicewalton", url: "https://x.com/alicewalton" },
  ],
  "Alice Louise Walton": [
    { platform: "X", handle: "@alicewalton", url: "https://x.com/alicewalton" },
  ],
  "Walmart Inc.": [
    { platform: "X", handle: "@Walmart", url: "https://x.com/Walmart" },
  ],
  "Builders Vision": [
    { platform: "X", handle: "@BuildersVision", url: "https://x.com/BuildersVision" },
  ],
  "Gregory Penner": [
    { platform: "LinkedIn", handle: "Gregory Penner", url: "https://www.linkedin.com/in/gregory-penner-60a4a11/" },
  ],
  "Greg Penner": [
    { platform: "LinkedIn", handle: "Gregory Penner", url: "https://www.linkedin.com/in/gregory-penner-60a4a11/" },
  ],

  // ── KOCH FAMILY ────────────────────────────────────────────────────────────
  "Charles Koch": [
    { platform: "X", handle: "@CharlesGKoch", url: "https://x.com/CharlesGKoch", archived: true },
  ],
  "Charles de Ganahl Koch": [
    { platform: "X", handle: "@CharlesGKoch", url: "https://x.com/CharlesGKoch", archived: true },
  ],
  "Koch Industries": [
    { platform: "X", handle: "@KochIndustries", url: "https://x.com/KochIndustries" },
  ],
  "Americans for Prosperity": [
    { platform: "X", handle: "@AFPhq", url: "https://x.com/AFPhq" },
  ],

  // ── EVIDENCE PAGE MENTIONS ─────────────────────────────────────────────────
  "Maria Ressa": [
    { platform: "X", handle: "@mariaressa", url: "https://x.com/mariaressa" },
  ],
  "J. Alex Halderman": [
    { platform: "X", handle: "@jhalderm", url: "https://x.com/jhalderm" },
  ],
  "Tucker Carlson": [
    { platform: "X", handle: "@TuckerCarlson", url: "https://x.com/TuckerCarlson" },
  ],
  "Jim VandeHei": [
    { platform: "X", handle: "@JimVandeHei", url: "https://x.com/JimVandeHei" },
  ],
  "Dick Durbin": [
    { platform: "X", handle: "@SenatorDurbin", url: "https://x.com/SenatorDurbin" },
  ],
  "Sen. Dick Durbin": [
    { platform: "X", handle: "@SenatorDurbin", url: "https://x.com/SenatorDurbin" },
  ],
};
