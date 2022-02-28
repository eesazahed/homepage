import React from "react";

export default (props) => {
  return (
    <section className={`widget ${props.cssClass}`}>
      <h1>{props.widgetName}</h1>
      <p>{props.widgetValue[0]}</p>
      <p>{props.widgetValue[1]}</p>
      <a href={props.widgetURL}>{props.widgetLink}</a>
    </section>
  );
};
