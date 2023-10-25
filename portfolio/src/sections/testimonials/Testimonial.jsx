import Card from "../../components/Card";
const Testimonial = ({ testimonial }) => {
  return (
    <Card className="light">
      <p>{testimonial.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img
            className="testimonial__client-avatar"
            src={testimonial.avatar}
            alt="img testimonail card"
          />
          <small>{testimonial.profession}</small>
        </div>
      </div>
      <div className="testimonial__client-details">
        <h6>{testimonial.name}</h6>
      </div>
    </Card>
  );
};

export default Testimonial;
