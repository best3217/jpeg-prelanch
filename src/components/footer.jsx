import telegram from "../assets/icons/telegram.svg";
import twitter from "../assets/icons/twitter.svg";
import discord from "../assets/icons/discord.svg";
import footerBorder from "../assets/images/footer_border.png";

export default function Footer() {
  return (
    <>
      <footer>
        <img src={footerBorder} alt="footer border" className="footer-border" />
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h4>
              The Future of NFT <br /> France
            </h4>
            <div>
              <p>Community</p>
              <ul>
                <li>
                  <a
                    href="https://telegram.com"
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                    className="btn small-btn"
                  >
                    <img src={telegram} alt="telegram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                    className="btn small-btn"
                  >
                    <img src={twitter} alt="telegram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                    className="btn small-btn"
                  >
                    <img src={discord} alt="telegram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
