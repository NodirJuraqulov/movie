import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLogo from "@/assets/main-logo.svg";
import DarkMode from "@/components/dark-mode/DarkMode";
import LanguageSelect from "@/components/language/Language";
import type { Lang } from "@/components/language/Language";
import {
  HomeOutlined,
  VideoCameraOutlined,
  SaveOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const linkBase =
  "flex flex-col items-center justify-center gap-1 transition-colors";

const navLinks = [
  { to: "/", label: "Home", icon: <HomeOutlined /> },
  { to: "/movies", label: "Movies", icon: <VideoCameraOutlined /> },
  { to: "/saved", label: "Saved", icon: <SaveOutlined /> },
  { to: "/search", label: "Search", icon: <SearchOutlined /> },
];

const Header = () => {
  const [lang, setLang] = useState<Lang>("uz");

  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full flex items-center justify-center shadow fixed top-0 inset-x-0 z-10 bg-white dark:bg-black transition-all duration-300 ease-in-out
                    ${shrink ? "h-[50px]" : "h-[80px]"}`}
    >
      <div className="flex items-center justify-between container">
        <div>
          <NavLink to={"/"}>
            <img src={MainLogo} alt="Main Logo" />
          </NavLink>
        </div>

        <div className="flex items-center gap-10">
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-[#C61F1F]" : "dark:text-white text-black"}`
              }
            >
              {icon}
              <span className="text-[14px] font-medium">{label}</span>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className="text-[16px] font-medium cursor-pointer text-white bg-[#C61F1F] px-4 py-1 rounded-[6px]">
            Sign in
          </button>
          <DarkMode />
          <LanguageSelect value={lang} onChange={setLang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
export type { Lang };
