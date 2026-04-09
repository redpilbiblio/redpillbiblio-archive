import { useState, useCallback } from 'react';

export function useResizableColumns(defaultWidths: number[]) {
  const [columnWidths, setColumnWidths] = useState<number[]>(defaultWidths);

  const handleMouseDown = useCallback((colIndex: number, startX: number) => {
    const startWidth = columnWidths[colIndex];

    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - startX;
      const newWidth = Math.max(60, startWidth + delta);
      setColumnWidths(prev => {
        const updated = [...prev];
        updated[colIndex] = newWidth;
        return updated;
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [columnWidths]);

  const resetColumnWidth = useCallback((colIndex: number) => {
    setColumnWidths(prev => {
      const updated = [...prev];
      updated[colIndex] = defaultWidths[colIndex];
      return updated;
    });
  }, [defaultWidths]);

  return { columnWidths, handleMouseDown, resetColumnWidth };
}
