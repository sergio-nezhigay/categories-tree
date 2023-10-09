import React from "react";

import { INode } from "../../types/CommonTypes";
import "./EditableDiv.css";

interface IEditableDiv {
  currentNode: INode;
  changeCurrentNode: (newNode: INode) => void;
  deleteCurrentNode: (currentNode: INode) => void;
}

export const EditableDiv: React.FC<IEditableDiv> = ({
  currentNode,
  changeCurrentNode,
  deleteCurrentNode,
}) => {
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCurrentNode({ ...currentNode, name: e.target.value });
  };

  const startEditing = () => {
    currentNode.isEditing = true;
    changeCurrentNode(currentNode);
  };

  const addBlock = () => {
    const newBlock: INode = {
      id: Date.now().toString(),
      name: "Category name",
      isEditing: true,
      level: currentNode.level + 1,
    };
    if (currentNode.children) {
      currentNode.children.push(newBlock);
    } else {
      currentNode.children = [newBlock];
    }
    changeCurrentNode(currentNode);
  };

  const deleteBlock = () => {
    deleteCurrentNode(currentNode);
  };

  const onSave = () => {
    currentNode.isEditing = false;
    changeCurrentNode(currentNode);
  };

  return (
    <>
      {!!currentNode.name.length && (
        <>
          <input
            type="text"
            name="name"
            value={currentNode.name}
            size={currentNode.name.length}
            className={`cell level${currentNode.level % 4}`}
            onChange={handleContentChange}
            disabled={!currentNode.isEditing}
          />

          <span className="button-wrapper">
            {!currentNode.isEditing ? (
              <>
                <button onClick={startEditing} className="button">
                  ✏️
                </button>
                <button onClick={addBlock} className="button">
                  ➕
                </button>
                <button onClick={deleteBlock} className="button">
                  ❌
                </button>
              </>
            ) : (
              <>
                <button onClick={onSave} className="button">
                  ✔️
                </button>
                <button className="button">❌</button>
              </>
            )}
          </span>
        </>
      )}
    </>
  );
};

// export EditableDiv;
