"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="h-28 bg-gray-100 w-full animate-pulse rounded-md" />
  ),
});

export default function SurveyEditor({ value, onChange }) {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
}
