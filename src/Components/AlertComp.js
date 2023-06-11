import React from "react";

export default function AlertComp(props) {
  const capitalise = (word) => {
    let lower = word.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
     { props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
    </div>
  );
}
