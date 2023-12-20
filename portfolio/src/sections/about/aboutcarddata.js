import { FaAward , FaReact,FaAngular  } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { BiHappyHeartEyes } from "react-icons/bi";
import { GrNode } from "react-icons/gr";
import { SiExpress,SiMongodb,SiPostgresql,SiJquery,SiFlutter,SiMysql    } from "react-icons/si";
import { FaGitAlt,FaBootstrap,FaJava,FaGolang    } from "react-icons/fa6";

export const aboutcarddata = [
  { id: 1, desc: "4 months Working", icon: <FaAward />, title: "Experience" },
  { id: 2, desc: "1-10 Completed", icon: <TbBooks />, title: "Projects" },
  {
    id: 3,
    desc: "I have no either Assigned to Company or have Clients yet",
    icon: <BiHappyHeartEyes />,
    title: "Company/Clients",
  },
];

export const aboutcarddata2 = [
  {id: 1, icon: <FaReact />},
  {id: 2, icon: <GrNode />},
  {id: 3, icon: <SiExpress />},
  {id: 4, icon: <SiMongodb />},
  {id: 5, icon: <SiPostgresql/>},
  {id: 6, icon: <FaGitAlt/>},
  {id: 7, icon: <FaBootstrap/>},
  {id: 8, icon: <SiJquery/>},
]
export const aboutcarddata3 = [
  {id: 1, icon: <FaJava />},
  {id: 2, icon: <FaAngular />},
  {id: 3, icon: <FaGolang />},
  {id: 4, icon: <SiFlutter />},
  {id: 5, icon: <SiMysql/>},
]
