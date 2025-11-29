"use client";

export default function FileUpload({ files, setFiles }) {
  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selected]);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="file:mr-3 file:px-4 file:py-2 file:rounded-full
                   file:bg-blue-100 file:text-blue-600 file:border-0
                   file:cursor-pointer cursor-pointer"
      />

      {files.length > 0 && (
        <div className="mt-3">
          <h4 className="font-bold mb-2">Selected Files:</h4>
          <ul className="list-disc ml-5 text-sm">
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
