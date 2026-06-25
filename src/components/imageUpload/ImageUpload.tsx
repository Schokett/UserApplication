interface ImageUploadProps {
  value: string | null;
  onChange: (base64: string) => void;
}

function ImageUpload({ value, onChange }: ImageUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {value && (
        <img src={value} alt="Profilbild" style={{ width: "120px", borderRadius: "50%" }} />
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}

export default ImageUpload;
