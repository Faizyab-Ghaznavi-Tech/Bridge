import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Start writing your article...",
  className = ""
}) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, 
       { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['code-block'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'align', 'color', 'background',
    'code-block'
  ];

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg ${className}`}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{
          height: '400px',
          marginBottom: '50px'
        }}
        className="dark:text-white"
      />
      <style jsx global>{`
        .ql-toolbar {
          border-top: 1px solid #e5e7eb !important;
          border-left: 1px solid #e5e7eb !important;
          border-right: 1px solid #e5e7eb !important;
          border-bottom: none !important;
          border-radius: 0.5rem 0.5rem 0 0 !important;
          background: #f9fafb;
        }
        
        .dark .ql-toolbar {
          background: #374151 !important;
          border-color: #4b5563 !important;
        }
        
        .ql-container {
          border-bottom: 1px solid #e5e7eb !important;
          border-left: 1px solid #e5e7eb !important;
          border-right: 1px solid #e5e7eb !important;
          border-top: none !important;
          border-radius: 0 0 0.5rem 0.5rem !important;
          font-family: inherit !important;
          font-size: 16px !important;
        }
        
        .dark .ql-container {
          border-color: #4b5563 !important;
          background: #1f2937 !important;
          color: #f9fafb !important;
        }
        
        .ql-editor {
          min-height: 350px !important;
          font-family: inherit !important;
          line-height: 1.6 !important;
        }
        
        .dark .ql-editor {
          color: #f9fafb !important;
        }
        
        .ql-editor.ql-blank::before {
          font-style: normal !important;
          color: #9ca3af !important;
        }
        
        .dark .ql-editor.ql-blank::before {
          color: #6b7280 !important;
        }
        
        .dark .ql-stroke {
          stroke: #9ca3af !important;
        }
        
        .dark .ql-fill {
          fill: #9ca3af !important;
        }
        
        .dark .ql-picker-label {
          color: #9ca3af !important;
        }
        
        .dark .ql-picker-options {
          background: #374151 !important;
          border-color: #4b5563 !important;
        }
        
        .dark .ql-picker-item:hover {
          background: #4b5563 !important;
          color: #f9fafb !important;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;