import { FaLine } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

export const links = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Services", link: "#services" },
  { id: 4, title: "Portfolio", link: "#portfolio" },
  { id: 5, title: "Contact", link: "#contact" },
];

export const socials = [
  { id: 1, icon: <FaLine />, link: "https://line.me/ti/p/2fLH-UXEas" },
  {
    id: 2,
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/k_kantaphong",
  },
  { id: 3, icon: <TfiEmail />, link: "mailto:kantaphong.keng@gmail.com" },
  { id: 4, icon: <AiFillGithub />, link: "https://github.com/KantaphongK" },
  {
    id: 5,
    icon: <ImLinkedin />,
    link: "https://www.linkedin.com/in/kantaphongkany/",
  },
];
