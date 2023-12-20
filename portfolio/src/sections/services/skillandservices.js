import { FaLanguage } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const services_skills_data = [
  {
    id: 1,
    icon: <FaLanguage />,
    title: "English Communication",
    desc: "I have become familiar speaking and interacting with foreigners during Globish classes. also I have mindset to become better in english by practicing it",
    desc2:<a href="https://www.efset.org/cert/usR75y"><span className="CEFR">This my CEFR Test Result Cert</span></a>,
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.",
    desc2:<span className="CEFR">You can try this resume Web App responsiveness by visiting different devices or Dev Tools</span>,
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "I have acquired a foundational understanding of backend web development, database management, server-side scripting, and API design, while also maintaining a strong concern for your security.",
    desc2:"",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "Continuous learner",
    desc: "As Dec 2023 - Feb 2024. I going to participating JAVA bootcamp and try learning for applying working to real life practices.",
    desc2:"",
  },
];

export default services_skills_data;
