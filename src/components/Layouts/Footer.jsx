import React from "react";
import Icon from "assets/img/pizzaria.png";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrap">
          <div className="content1">
            <p class="title">NFT PIZZERIA</p>
            <p>Copyright © 2021 NFT Pizzeria</p>
          </div>
          <div className="content2">
            <img src={Icon} alt="" srcset="" width="180" height="auto" />
          </div>
          <div className="content3">
            <a href="https://discord.gg/6rgah5JmAz">
              <img src={Discord} alt="" width="30" />
            </a>
            <a href="https://twitter.com/NFTPizzeria">
              <img src={Twitter} alt="" width="30" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
