import { useEffect, useState } from "react";
import "./storageCapacity.scss";

interface StorageIndicatorProps {
  limitMB?: number;
  label?: string;
}

function getLocalStorageUsageMB(): number {
  let totalBytes = 0;

  for (const key in localStorage) {
    if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
      const value = localStorage.getItem(key) || "";
      totalBytes += (key.length + value.length) * 2;
    }
  }

  return totalBytes / 1024 / 1024;
}

function StorageCapacity({ limitMB = 5, label = "Speicher" }: StorageIndicatorProps) {
  const [usedMB, setUsedMB] = useState(0);

  useEffect(() => {
    setUsedMB(getLocalStorageUsageMB());
  }, []);

  const percentage = Math.min((usedMB / limitMB) * 100, 100);

  return (
    <div className="storage-indicator">
      <span className="storage-indicator__label">{label}</span>
      <div className="storage-indicator__bar">
        <div className="storage-indicator__fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className="storage-indicator__text">
        {usedMB.toFixed(1)} von {limitMB} MB
      </span>
    </div>
  );
}

export default StorageCapacity;
