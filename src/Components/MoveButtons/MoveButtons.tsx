import React from "react";

import "./MoveButtons.css";

interface IMoveButtons {
  shiftContent: (dx: number, dy: number) => void;
}

export const MoveButtons: React.FC<IMoveButtons> = ({ shiftContent }) => {
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
};
