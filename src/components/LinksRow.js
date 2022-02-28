import React from "react";
import LinkToWebsite from "./LinkToWebsite";

export default () => {
  return (
    <section className="widget links-container">
      <div className="links-row">
        <LinkToWebsite
          website_url="https://www.gmail.com"
          website_name="Gmail"
          imgSrc="https://img.icons8.com/color/gmail-new.png"
        />
        <LinkToWebsite
          website_url="https://www.docs.google.com"
          website_name="Google Docs"
          imgSrc="https://img.icons8.com/color/google-docs.png"
        />
        <LinkToWebsite
          website_url="https://www.youtube.com/feed/subscriptions"
          website_name="YouTube"
          imgSrc="https://img.icons8.com/color/youtube-play.png"
        />
        <LinkToWebsite
          website_url="https://www.classroom.google.com"
          website_name="Classroom"
          imgSrc="https://img.icons8.com/color/2x/google-classroom.png"
        />
      </div>
      <div className="links-row">
        <LinkToWebsite
          website_url="https://www.github.com"
          website_name="GitHub"
          imgSrc="https://img.icons8.com/stickers/2x/github.png"
        />
        <LinkToWebsite
          website_url="https://www.drive.google.com"
          website_name="Google Drive"
          imgSrc="https://img.icons8.com/color/2x/google-drive--v2.png"
        />
        <LinkToWebsite
          website_url="https://www.photos.google.com"
          website_name="Google Photos"
          imgSrc="https://img.icons8.com/color/2x/google-photos-new.png"
        />
        <LinkToWebsite
          website_url="https://www.nba.com/"
          website_name="NBA"
          imgSrc="https://img.icons8.com/color/2x/basketball.png"
        />
      </div>
      <p>
        Icons provided for free by <a href="https://icons8.com/icons">Icons8</a>
      </p>
    </section>
  );
};
