import "./imageUpload.scss";
import { useRef } from "react";

interface ImageUploadProps {
  value: string | null;
  onChange: (base64: string) => void;
  onClear?: () => void;
}

const MAX_DIMENSION = 400;
const JPEG_QUALITY = 0.8;

function resizeImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        let { width, height } = img;
        if (width > height) {
          if (width > MAX_DIMENSION) {
            height = Math.round((height * MAX_DIMENSION) / width);
            width = MAX_DIMENSION;
          }
        } else {
          if (height > MAX_DIMENSION) {
            width = Math.round((width * MAX_DIMENSION) / height);
            height = MAX_DIMENSION;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas context nicht verfügbar"));

        ctx.drawImage(img, 0, 0, width, height);

        const resizedBase64 = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
        resolve(resizedBase64);
      };

      img.onerror = () => reject(new Error("Bild konnte nicht geladen werden"));
      img.src = reader.result as string;
    };

    reader.onerror = () => reject(new Error("Datei konnte nicht gelesen werden"));
    reader.readAsDataURL(file);
  });
}

function ImageUpload({ value, onChange, onClear }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const resizedBase64 = await resizeImage(file);
      onChange(resizedBase64);
    } catch (error) {
      console.error("Fehler beim Verarbeiten des Bildes:", error);
    }
  };

  return (
    <div className="upload">
      {value && (
        <div className="upload__preview">
          <img
            src={value}
            alt="Profilbild"
            style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover" }}
          />
          {onClear && (
            <button type="button" className="upload__clear" onClick={onClear} aria-label="Bild entfernen">
              ×
            </button>
          )}
        </div>
      )}
      <div className="form__image-meta">
        <button type="button" className="upload__btn" onClick={() => fileInputRef.current?.click()}>
          Bild ändern
        </button>
        <span className="form__image-hint">JPG, PNG · max. 5 MB</span>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ImageUpload;
