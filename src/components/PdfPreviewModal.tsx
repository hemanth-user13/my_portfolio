import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// eslint-disable-next-line import/no-unresolved
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import {
  X,
  Download,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  FileWarning,
  Loader2,
} from "lucide-react";

// Load the pdf.js worker as a bundled asset (Vite-friendly, no CDN needed)
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

interface PdfPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
  fileName: string;
  title: string;
}

const MIN_SCALE = 0.6;
const MAX_SCALE = 2;
const SCALE_STEP = 0.2;

export default function PdfPreviewModal({
  isOpen,
  onClose,
  fileUrl,
  fileName,
  title,
}: PdfPreviewModalProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [loadError, setLoadError] = useState(false);

  // Reset viewer state whenever a different document is opened
  useEffect(() => {
    if (isOpen) {
      setNumPages(null);
      setPageNumber(1);
      setScale(1);
      setLoadError(false);
    }
  }, [isOpen, fileUrl]);

  // Lock body scroll while the modal is open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Close on Escape, navigate pages with arrow keys
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setPageNumber((p) => (numPages ? Math.min(p + 1, numPages) : p));
      }
      if (e.key === "ArrowLeft") {
        setPageNumber((p) => Math.max(p - 1, 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, numPages]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} preview`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative w-full max-w-3xl h-[85vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="min-w-0">
            <h3 className="text-white font-bold truncate">{title}</h3>
            <p className="text-blue-50 text-xs truncate">{fileName}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={fileUrl}
              download={fileName}
              className="flex items-center gap-2 px-3 py-2 bg-white/15 hover:bg-white/25 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="p-2 bg-white/15 hover:bg-white/25 text-white rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Page area */}
        <div className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-950 flex items-start justify-center p-4 sm:p-6">
          {loadError ? (
            <div className="flex flex-col items-center justify-center gap-3 text-slate-500 dark:text-slate-400 h-full">
              <FileWarning size={36} />
              <p className="text-sm text-center max-w-xs">
                Couldn't load the preview. You can still download the PDF
                directly.
              </p>
              <a
                href={fileUrl}
                download={fileName}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
              >
                <Download size={16} />
                Download instead
              </a>
            </div>
          ) : (
            <Document
              file={fileUrl}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              onLoadError={() => setLoadError(true)}
              loading={
                <div className="flex flex-col items-center justify-center gap-3 text-slate-500 dark:text-slate-400 py-20">
                  <Loader2 size={28} className="animate-spin" />
                  <p className="text-sm">Loading resume…</p>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                className="shadow-xl rounded-sm overflow-hidden"
                renderTextLayer
                renderAnnotationLayer
              />
            </Document>
          )}
        </div>

        {/* Toolbar */}
        {!loadError && numPages && (
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setScale((s) => Math.max(MIN_SCALE, +(s - SCALE_STEP).toFixed(2)))}
                disabled={scale <= MIN_SCALE}
                aria-label="Zoom out"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ZoomOut size={18} />
              </button>
              <span className="text-xs text-slate-500 dark:text-slate-400 w-12 text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => setScale((s) => Math.min(MAX_SCALE, +(s + SCALE_STEP).toFixed(2)))}
                disabled={scale >= MAX_SCALE}
                aria-label="Zoom in"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ZoomIn size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
                disabled={pageNumber <= 1}
                aria-label="Previous page"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-slate-600 dark:text-slate-300 min-w-[70px] text-center">
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={() =>
                  setPageNumber((p) => Math.min(p + 1, numPages))
                }
                disabled={pageNumber >= numPages}
                aria-label="Next page"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
