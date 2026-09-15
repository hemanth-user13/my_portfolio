import {
  createContext,
  lazy,
  Suspense,
  useCallback,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Loader2 } from "lucide-react";

// react-pdf (and the pdf.js engine it wraps) is a sizeable dependency, so it
// is only pulled into the bundle the first time someone actually opens a
// resume preview, instead of weighing down the initial page load.
const PdfPreviewModal = lazy(() => import("../components/PdfPreviewModal"));

interface ResumeDoc {
  fileUrl: string;
  fileName: string;
  title: string;
}

interface ResumeModalContextType {
  openResume: (doc: ResumeDoc) => void;
  closeResume: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(
  undefined
);

export function ResumeModalProvider({ children }: { children: ReactNode }) {
  const [activeDoc, setActiveDoc] = useState<ResumeDoc | null>(null);

  const openResume = useCallback((doc: ResumeDoc) => {
    setActiveDoc(doc);
  }, []);

  const closeResume = useCallback(() => {
    setActiveDoc(null);
  }, []);

  const value = useMemo(() => ({ openResume, closeResume }), [
    openResume,
    closeResume,
  ]);

  return (
    <ResumeModalContext.Provider value={value}>
      {children}
      {activeDoc && (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3 text-white">
                <Loader2 size={28} className="animate-spin" />
                <p className="text-sm">Loading previewer…</p>
              </div>
            </div>
          }
        >
          <PdfPreviewModal
            isOpen
            onClose={closeResume}
            fileUrl={activeDoc.fileUrl}
            fileName={activeDoc.fileName}
            title={activeDoc.title}
          />
        </Suspense>
      )}
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  const context = useContext(ResumeModalContext);
  if (context === undefined) {
    throw new Error(
      "useResumeModal must be used within a ResumeModalProvider"
    );
  }
  return context;
}
