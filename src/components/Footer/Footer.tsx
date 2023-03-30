import { FC } from "react";

type FooterProps = {
  onLogoClick: () => void;
};

const Footer: FC<FooterProps> = ({ onLogoClick }) => {
  return (
    <footer className="px-5 pt-6 pb-8 font-bold bg-yellow-300 text-slate-700 xl:px-32 md:px-16">
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
        <a
          className="text-2xl transition-colors duration-300 cursor-pointer hover:text-zinc-900"
          onClick={onLogoClick}
        >
          trppd_
        </a>

        <span className="text-xs">&copy; 2017 - 2018</span>

        <span className="flex justify-center gap-3">
          <a
            href="https://www.instagram.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
              <g id="Outlined">
                <path d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z" />
                <path d="M12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S14.757,7,12,7z M12,15c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S13.654,15,12,15z" />
                <circle cx="17" cy="7" r="1" />
              </g>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
            <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
