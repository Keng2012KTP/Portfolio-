import "./Testimonials.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./Testimonial";
import Testimonialsdata from "./Testimonialsdata";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What do people say about me</h2>
      <p>These are testimonials from people around me</p>
      <div className="container">
        <Swiper
          spaceBetween={15}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 1800,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {Testimonialsdata.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
