import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, File, Image, AlertCircle } from "lucide-react";
import { cn } from "@/utils/cn";

const FileUpload = ({
  label,
  error,
  accept = {
    "image/*": [".jpeg", ".jpg", ".png"],
    "application/pdf": [".pdf"],
  },
  maxSize = 5 * 1024 * 1024, // 5MB
  onFileChange,
  multiple = false,
  className,
}) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        return;
      }

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: file.type.startsWith("image/")
            ? URL.createObjectURL(file)
            : null,
        })
      );

      const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
      setFiles(updatedFiles);

      if (onFileChange) {
        onFileChange(updatedFiles);
      }
    },
    [files, multiple, onFileChange]
  );

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    if (onFileChange) {
      onFileChange(updatedFiles);
    }
  };

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept,
      maxSize,
      multiple,
    });

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="mb-1.5 mobile-large:mb-2 block
                          text-xs mobile-large:text-sm
                          font-medium text-text-primary">
          {label}
        </label>
      )}

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={cn(
          "relative cursor-pointer rounded-xl mobile-large:rounded-2xl",
          "border-2 border-dashed",
          "px-4 py-6",
          "mobile-large:px-6 mobile-large:py-8",
          "tablet:px-8 tablet:py-10",
          "text-center transition-all duration-300",
          isDragActive
            ? "border-primary bg-primary/5 scale-[1.02]"
            : "border-black/15 bg-background hover:border-primary/50 hover:bg-primary/5",
          error && "border-accent bg-accent/5"
        )}
      >
        <input {...getInputProps()} />

        <motion.div
          animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
          className="flex flex-col items-center"
        >
          <Upload
            className={cn(
              "mb-2 mobile-large:mb-3",
              "h-8 w-8 mobile-large:h-10 mobile-large:w-10 tablet:h-12 tablet:w-12",
              isDragActive ? "text-primary" : "text-text-secondary/50"
            )}
          />
          <p className="text-sm mobile-large:text-base
                        font-medium text-text-primary">
            {isDragActive ? (
              "Drop the file here..."
            ) : (
              <>
                <span className="text-primary">Click to upload</span> or drag
                and drop
              </>
            )}
          </p>
          <p className="mt-1 text-[10px] mobile-large:text-xs
                        text-text-secondary">
            PNG, JPG, or PDF (Max {formatFileSize(maxSize)})
          </p>
        </motion.div>
      </div>

      {/* File Rejections */}
      {fileRejections.length > 0 && (
        <div className="mt-2 flex items-center gap-1.5
                        text-xs mobile-large:text-sm text-accent">
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
          <span>
            {fileRejections[0].errors[0]?.code === "file-too-large"
              ? `File too large. Max size is ${formatFileSize(maxSize)}`
              : "Invalid file type"}
          </span>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="mt-1 mobile-large:mt-1.5
                      text-xs mobile-large:text-sm text-accent">
          {error}
        </p>
      )}

      {/* File Preview List */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 mobile-large:mt-4
                       space-y-2 mobile-large:space-y-3"
          >
            {files.map((file, index) => (
              <motion.div
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-3
                           rounded-xl bg-surface
                           p-2.5 mobile-large:p-3
                           shadow-sm ring-1 ring-black/5"
              >
                {/* Preview */}
                {file.preview ? (
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="h-10 w-10 mobile-large:h-12 mobile-large:w-12
                               rounded-lg object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="flex h-10 w-10
                                  mobile-large:h-12 mobile-large:w-12
                                  items-center justify-center
                                  rounded-lg bg-primary/10 flex-shrink-0">
                    <File className="h-5 w-5 text-primary" />
                  </div>
                )}

                {/* File Info */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs mobile-large:text-sm
                                font-medium text-text-primary">
                    {file.name}
                  </p>
                  <p className="text-[10px] mobile-large:text-xs
                                text-text-secondary">
                    {formatFileSize(file.size)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="flex h-7 w-7 mobile-large:h-8 mobile-large:w-8
                             items-center justify-center
                             rounded-lg bg-accent/10
                             text-accent hover:bg-accent/20
                             transition-colors flex-shrink-0"
                >
                  <X className="h-3.5 w-3.5 mobile-large:h-4 mobile-large:w-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FileUpload;