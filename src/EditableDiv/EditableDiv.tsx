import React from "react";

import "./EditableDiv.css";

import { INode } from "../types/CommonTypes";

interface EditableDivProps {
  currentNode: INode;
  changeCurrentNode: (newNode: INode) => void;
  deleteCurrentNode: (currentNode: INode) => void;
}

export default function EditableDiv({
  currentNode,
  changeCurrentNode,
  deleteCurrentNode,
}: EditableDivProps) {
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
            readOnly={!currentNode.isEditing}
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
}
