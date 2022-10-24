import React from "react";

export default function Model({ modelContent, removeModel }) {
  React.useEffect(() => {
    setTimeout(() => {
      removeModel();
    }, 3000);
  }, [removeModel]);
  return <div>{modelContent}</div>;
}
