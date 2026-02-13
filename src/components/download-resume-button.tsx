"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { pdf } from "@react-pdf/renderer";
import { ResumePDF } from "./resume-pdf";

export function DownloadResumeButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);

      // Generate PDF blob
      const blob = await pdf(<ResumePDF />).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `ShareKim_Resume_${
        new Date().toISOString().split("T")[0]
      }.pdf`;
      link.click();

      // Cleanup
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("이력서 생성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-xl border border-gray-200 hover:border-accent hover:text-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Download size={18} />
      {isGenerating ? "생성 중..." : "이력서 다운로드"}
    </button>
  );
}
