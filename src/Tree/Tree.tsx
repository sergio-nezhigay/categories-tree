import React from "react";

import TreeNode from "../TreeNode/TreeNode";
import { INode } from "../types/CommonTypes";

import "./Tree.css";

interface TreeProps {
  treeData: INode;
  setTreeData: React.Dispatch<React.SetStateAction<INode>>;
}

export default function Tree({ treeData, setTreeData }: TreeProps) {
  return (
    <ul className="list">
      <TreeNode
        currentNode={treeData}
        treeData={treeData}
        setTreeData={setTreeData}
      />
    </ul>
  );
}
