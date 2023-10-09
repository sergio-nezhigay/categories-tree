import React from "react";
import "./MoveButtons.css";

interface MoveButtonsProps {
  shiftContent: (dx: number, dy: number) => void;
}

export default function MoveButtons({ shiftContent }: MoveButtonsProps) {
  return (
    <div>
      <button onClick={() => shiftContent(0, -50)} className="shift-button up">
        &#8593;
      </button>
      <button onClick={() => shiftContent(0, 50)} className="shift-button down">
        &#8595;
      </button>
      <button
        onClick={() => shiftContent(-50, 0)}
        className="shift-button left"
      >
        &#8592;
      </button>
      <button
        onClick={() => shiftContent(50, 0)}
        className="shift-button right"
      >
        &#8594;
      </button>
    </div>
  );
}
