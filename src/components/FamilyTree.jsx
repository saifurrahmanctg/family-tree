import React, { useRef, useEffect, useState } from "react";
import Tree from "react-d3-tree";
import CustomNode from "./CustomNode";

const FamilyTree = ({ data }) => {
  const treeContainer = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { offsetWidth, offsetHeight } = treeContainer.current;
    setDimensions({ width: offsetWidth, height: offsetHeight });
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100vh", border: "1px solid #ccc" }}
      ref={treeContainer}
    >
      <Tree
        data={data}
        orientation="vertical"
        translate={{
          x: dimensions.width / 2,
          y: 100,
        }}
        width={"max-content"}
        pathFunc="step"
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        svgClassName="tree-svg "
        renderCustomNodeElement={(rd3tProps) => <CustomNode {...rd3tProps} />}
      />
    </div>
  );
};

export default FamilyTree;
