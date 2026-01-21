"use client";
import { useEffect, useRef, useState } from "react";

type BlogEditorProps = {
  onSave: (data: any) => void;
  initialData?: string;
};

const BlogEditor = ({ onSave, initialData }: BlogEditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [html, setHtml] = useState(initialData || "");

  // Set initial content ONLY when initialData changes
  useEffect(() => {
    if (editorRef.current && initialData !== undefined) {
      editorRef.current.innerHTML = initialData;
      setHtml(initialData);
    }
  }, [initialData]);

  const exec = (command: string, value?: string) => {
    if (typeof window === "undefined") return;
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleInput = () => {
    if (!editorRef.current) return;
    setHtml(editorRef.current.innerHTML);
  };

  const handleSave = () => {
    onSave(html);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border rounded-xl p-4 bg-gray-300 shadow-sm">
        <div className="mb-3 flex gap-2 text-black">
          <button onClick={() => exec("bold")} className="px-3 py-1 bg-gray-100 rounded">
            Bold
          </button>
          <button onClick={() => exec("italic")} className="px-3 py-1 bg-gray-100 rounded">
            Italic
          </button>
          <button onClick={() => exec("underline")} className="px-3 py-1 bg-gray-100 rounded">
            Underline
          </button>
          <button
            onClick={() => exec("insertUnorderedList")}
            className="px-3 py-1 bg-gray-100 rounded"
          >
            Bullet List
          </button>
          <button
            onClick={() => exec("insertOrderedList")}
            className="px-3 py-1 bg-gray-100 rounded"
          >
            Numbered List
          </button>
          <button
            onClick={() => exec("formatBlock", "h2")}
            className="px-3 py-1 bg-gray-100 rounded"
          >
            H2
          </button>
        </div>

        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          suppressContentEditableWarning
          className="prose prose-lg max-w-none min-h-[200px] focus:outline-none"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Publish
      </button>
    </div>
  );
};

export default BlogEditor;
