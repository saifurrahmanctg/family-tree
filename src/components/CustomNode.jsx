import React from "react";

const CustomNode = ({ nodeDatum }) => {
  const imgSize = 60; // circle diameter

  return (
    <g>
      {/* Circular image mask */}
      <defs>
        <clipPath id={`clip-${nodeDatum.__rd3t.id}`}>
          <circle cx="0" cy="0" r={imgSize / 2} />
        </clipPath>
      </defs>

      {/* Profile Image */}
      <image
        href={nodeDatum.image || "/default.jpg"}
        x={-imgSize / 2}
        y={-imgSize / 2}
        width={imgSize}
        height={imgSize}
        clipPath={`url(#clip-${nodeDatum.__rd3t.id})`}
      />

      {/* Name + attributes */}
      <foreignObject x={40} y={-30} width={200} height={200}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "block",
            width: "fit-content",
            background: "white",
            padding: "4px",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          <strong>{nodeDatum.name}</strong>

          {nodeDatum.attributes &&
            Object.entries(nodeDatum.attributes).map(([key, val]) => (
              <div key={key}>
                <strong>{key}:</strong> {val}
              </div>
            ))}
        </div>
      </foreignObject>
    </g>
  );
};

export default CustomNode;
