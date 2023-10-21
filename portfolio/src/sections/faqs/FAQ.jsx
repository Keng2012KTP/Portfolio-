import Card from "./../../components/Card";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
const FAQ = ({ eachfaq }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Card className="faq " onClick={() => setShowAnswer((prev) => !prev)}>
      <div className="">
        <h5 className="faq__question">{eachfaq.question}</h5>
        <button className="faq__icon">
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{eachfaq.answer}</p>}
    </Card>
  );
};

export default FAQ;
