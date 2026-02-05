// Re-export from existing component with namespace wrapper
import { BookConsultationPage as OriginalBookConsultationPage } from "@/app/components/BookConsultationPage";

export function BookConsultationPage() {
  return (
    <div className="site-teamworks">
      <OriginalBookConsultationPage />
    </div>
  );
}
