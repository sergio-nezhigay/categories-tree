import React, { RefObject, useState } from "react";

import Tree from "../Tree/Tree";
import { INode } from "../types/CommonTypes";
import { initialTreeData } from "../data/initialTreeData";
import "./Canvas.css";

interface CanvasProps {
  zoom: number;
  containerRef: RefObject<HTMLDivElement>;
  coordinates: { x: number; y: number };
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleDragEnd: () => void;
  handleDragStart: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Canvas({
  zoom,
  containerRef,
  coordinates,
  handleMouseMove,
  handleDragEnd,
  handleDragStart,
}: CanvasProps) {
  const [treeData, setTreeData] = useState<INode>(initialTreeData);

  return (
    <div className="canvas">
      <div className="bg-circle-1"></div>
      <div className="bg-circle-2"></div>
      <div
        className="container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        style={{
          transform: `scale(${zoom})`,
        }}
      >
        <div
          className="block"
          style={{
            left: `${coordinates.x}px`,
            top: `${coordinates.y}px`,
          }}
          onMouseDown={handleDragStart}
        >
          <Tree treeData={treeData} setTreeData={setTreeData} />
        </div>
      </div>
    </div>
  );
}

export default Canvas;
