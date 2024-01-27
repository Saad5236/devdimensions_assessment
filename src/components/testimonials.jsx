import testimonial1 from "../assets/images/testimonials1.jpg"
import testimonial2 from "../assets/images/testimonials2.jpg"
import testimonial3 from "../assets/images/testimonials3.jpg"
import "../assets/css/testimonials.css"
import "../assets/css/services.css"

export default function Testimonials() {
  return (
    <section className="testimonials-container">
      <h2 className="testimonials-header">Clients Testimonials</h2>
      <div className="testimonials-tagline">What Our Clients Are Saying.</div>
      <div className="testimonials container row m-auto">
        <div className="testimonial col-lg-4">
          <div className="testimonial-img">
            <img src={testimonial1} alt="" />
          </div>
          <p className="testimonial-comment">
            The attention of a traveller, should be particularly turned to the
            various works of nature.
          </p>
          <div className="testimonial-client">Emily Richards - Copywriter</div>
          <div className="testimonial-rating">
            {/* <i className="fa fa-star" aria-hidden="true"></i> */}
            hello world hello world
          </div>
        </div>

        <div className="testimonial col-lg-4">
          <div className="testimonial-img">
            <img src={testimonial2} alt="" />
          </div>
          <p className="testimonial-comment">
          The attention of a traveller, should be particularly turned to the various works of nature.
          </p>
          <div className="testimonial-client">John Doe - General Manager</div>
          <div className="testimonial-rating">
            {/* <i className="fa fa-star" aria-hidden="true"></i> */}
            hello world hello world
          </div>
        </div>

        <div className="testimonial col-lg-4">
          <div className="testimonial-img">
            <img src={testimonial3} alt="" />
          </div>
          <p className="testimonial-comment">
          The attention of a traveller, should be particularly turned to the various works of nature.
          </p>
          <div className="testimonial-client">Jane Smith - Web Designer</div>
          <div className="testimonial-rating">
            {/* <i className="fa fa-star" aria-hidden="true"></i> */}
            hello world hello world
          </div>
        </div>
      </div>
    </section>
  )
}
