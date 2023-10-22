import { AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { BsTrophyFill } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

const floating_navbar_data = [
  { id: 1, link: "#", icon: <AiFillHome /> },
  { id: 2, link: "#about", icon: <IoPersonSharp /> },
  { id: 3, link: "#services", icon: <RiComputerFill /> },
  { id: 4, link: "#portfolio", icon: <BsTrophyFill /> },
  { id: 5, link: "#faqs", icon: <FaQuestion /> },
  { id: 6, link: "#contact", icon: <MdOutlineContactPhone /> },
];

export default floating_navbar_data;
