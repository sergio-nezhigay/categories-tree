import React from "react";

import { TreeNode } from "../TreeNode";
import { INode } from "../../types/CommonTypes";
import "./Tree.css";

interface ITree {
  treeData: INode;
  setTreeData: React.Dispatch<React.SetStateAction<INode>>;
}

export const Tree: React.FC<ITree> = ({ treeData, setTreeData }) => {
  return (
    <ul className="list">
      <TreeNode
        currentNode={treeData}
        treeData={treeData}
        setTreeData={setTreeData}
      />
    </ul>
  );
};
