import React from "react";

export default (props) => {
  return (
    <div className="link-to-website">
      <a title={props.website_name} href={props.website_url}>
        <img className="icon" src={props.imgSrc} alt={props.website_name} />
      </a>
    </div>
  );
};
