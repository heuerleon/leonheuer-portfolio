import * as React from "react";

const LanguageIcon = (props) => {
  return (
    <img
      src={props.icon.image}
      alt={props.icon.title + "icon"}
      title={props.icon.title}
    />
  );
};

export default LanguageIcon;
