import "./Modal.css";
import Card from "./Card";
import ReactDOM from "react-dom";
import { useModalContext } from "../context/modal-context";
const Modal = ({ clasName, children }) => {
  const { showModal, closeModalHandler } = useModalContext();
  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={clasName}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </>
  );
};

export default Modal;
