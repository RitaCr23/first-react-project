//social icons
import React from "react";
import GitHub from "../images/GitHub_Icon.png";
import Instagram from "../images/Instagram_Icon.png";
import Twitter from "../images/Twitter_Icon.png";
import Facebook from "../images/Facebook_Icon.png"

export default function Footer() {
  return (
    <div className="Footer">
      <a href="#"/><img src={GitHub} />
      <img src={Instagram} />
      <img src={Twitter} />
      <img src={Facebook} />
    </div>
  );
}
