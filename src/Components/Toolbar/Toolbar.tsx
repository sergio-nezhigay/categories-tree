import React, { useState } from "react";

import { zoomOptions } from "../../data/zoomOptions";
import "./Toolbar.css";

interface IToolbar {
  handleZoomChange: (newZoom: number) => void;
  zoom: number;
  centerTree: () => void;
}

export const Toolbar: React.FC<IToolbar> = ({
  handleZoomChange,
  zoom,
  centerTree,
}) => {
  const [selectedZoom, setSelectedZoom] = useState<number>(zoom);

  const handleZoomSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newZoom = parseFloat(event.target.value);
    setSelectedZoom(newZoom);
    handleZoomChange(newZoom);
  };

  const handleZoomIn = () => {
    const currentIndex = zoomOptions.findIndex(
      (option) => option.value === selectedZoom
    );
    if (currentIndex < zoomOptions.length - 1) {
      const newZoom = zoomOptions[currentIndex + 1].value;
      setSelectedZoom(newZoom);
      handleZoomChange(newZoom);
    }
  };

  const handleZoomOut = () => {
    const currentIndex = zoomOptions.findIndex(
      (option) => option.value === selectedZoom
    );
    if (currentIndex > 0) {
      const newZoom = zoomOptions[currentIndex - 1].value;
      setSelectedZoom(newZoom);
      handleZoomChange(newZoom);
    }
  };

  return (
    <div className="toolbar">
      <button className="center-button" onClick={centerTree}>
        🏠
      </button>
      <button className="zoom-in-button" onClick={handleZoomIn}>
        ➕
      </button>
      <select
        className="zoom-select"
        onChange={handleZoomSelect}
        value={selectedZoom.toString()}
      >
        {zoomOptions.map((option) => (
          <option key={option.value} value={option.value.toString()}>
            {option.label}
          </option>
        ))}
      </select>
      <button className="zoom-out-button" onClick={handleZoomOut}>
        ➖
      </button>
    </div>
  );
};
