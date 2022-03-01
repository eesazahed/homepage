import React from "react";

export default () => {
  return (
    <section className="widget">
      <div className="searchForm">
        <img
          className="google-icon"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Search"
        />
        <form action="https://google.com/search">
          <input autoFocus type="text" name="q" placeholder="Google Search" />
          <input type="submit" value="Google Search" />
        </form>
      </div>
    </section>
  );
};
