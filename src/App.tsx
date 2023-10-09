import React, { useState, useRef } from "react";

import Toolbar from "./Toolbar/Toolbar";
import Canvas from "./Canvas/Canvas";
import MoveButtons from "./MoveButtons/MoveButtons";

interface Coordinates {
  x: number;
  y: number;
}

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinates>({
    x: 100,
    y: 100,
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [initialMouseOffset, setInitialMouseOffset] = useState<Coordinates>({
    x: 0,
    y: 0,
  });
  const [zoom, setZoom] = useState<number>(1);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);

    const blockRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - blockRect.left;
    const offsetY = e.clientY - blockRect.top;
    setInitialMouseOffset({ x: offsetX, y: offsetY });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newX = (
          (e.clientX - containerRect.left - initialMouseOffset.x) /
          zoom
        ).toFixed(0);
        const newY = (
          (e.clientY - containerRect.top - initialMouseOffset.y) /
          zoom
        ).toFixed(0);
        setCoordinates({ x: +newX, y: +newY });
      }
    }
  };

  const handleZoomChange = (newZoom: number) => {
    setZoom(newZoom);
  };

  const shiftContent = (dx: number, dy: number) => {
    setCoordinates({
      x: coordinates.x + dx,
      y: coordinates.y + dy,
    });
  };

  const centerTree = () => {
    if (containerRef.current) {
      const treeRect = containerRef.current
        .querySelector(".block")
        ?.getBoundingClientRect();
      if (treeRect) {
        const newX = (window.innerWidth - treeRect.width / zoom) / 2;
        const newY = (window.innerHeight - treeRect.height / zoom) / 2;
        setCoordinates({ x: newX, y: newY });
      }
    }
  };

  return (
    <>
      <header>
        <Toolbar
          zoom={zoom}
          handleZoomChange={handleZoomChange}
          centerTree={centerTree}
        />
        <MoveButtons shiftContent={shiftContent} />
      </header>
      <main>
        <Canvas
          zoom={zoom}
          containerRef={containerRef}
          coordinates={coordinates}
          handleMouseMove={handleMouseMove}
          handleDragEnd={handleDragEnd}
          handleDragStart={handleDragStart}
        />
      </main>
    </>
  );
}

export default App;
