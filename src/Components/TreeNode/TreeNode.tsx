import React from "react";

import { EditableDiv } from "../EditableDiv";
import { INode } from "../../types/CommonTypes";
import "./TreeNode.css";

interface ITreeNode {
  treeData: INode;
  currentNode: INode;
  setTreeData: React.Dispatch<React.SetStateAction<INode>>;
}

export const TreeNode: React.FC<ITreeNode> = ({
  treeData,
  currentNode,
  setTreeData,
}): JSX.Element | null => {
  if (!currentNode || !currentNode.name) {
    return null;
  }

  const deleteCurrentNode = (nodeData: INode) => {
    setTreeData((prevTreeData) => {
      const newTreeData = { ...prevTreeData };
      deleteNode(newTreeData, nodeData);
      return newTreeData;
    });
  };

  const deleteNode = (
    currentNode: INode,
    updatingNode: INode,
    parentId?: string
  ) => {
    if (currentNode.children) {
      const updatedChildren = currentNode.children.filter(
        (child) => child.id !== updatingNode.id
      );
      currentNode.children = updatedChildren;
      if (currentNode.id === parentId) {
        return;
      }
      for (let i = 0; i < currentNode.children.length; i++) {
        deleteNode(currentNode.children[i], updatingNode, parentId);
      }
    }
  };

  const changeCurrentNode = (nodeData: INode) => {
    setTreeData((prevTreeData) => {
      const newTreeData = { ...prevTreeData };
      updateNode(newTreeData, nodeData);
      return newTreeData;
    });
  };

  const updateNode = (currentNode: INode, updatedNode: INode) => {
    if (currentNode.id === updatedNode.id) {
      currentNode.name = updatedNode.name;
    } else if (currentNode.children) {
      for (let i = 0; i < currentNode.children.length; i++) {
        updateNode(currentNode.children[i], updatedNode);
      }
    }
  };

  const children =
    currentNode.children &&
    currentNode.children.map((child, index) => (
      <TreeNode
        key={index}
        treeData={treeData}
        currentNode={child}
        setTreeData={setTreeData}
      />
    ));

  return (
    <li className="item">
      <EditableDiv
        currentNode={currentNode}
        changeCurrentNode={changeCurrentNode}
        deleteCurrentNode={deleteCurrentNode}
      />
      {children && children.length > 0 && <ul className="list">{children}</ul>}
    </li>
  );
};
