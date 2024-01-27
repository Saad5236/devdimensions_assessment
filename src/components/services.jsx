import serviceImg1 from "../assets/images/main-services1.jpg"
import serviceImg2 from "../assets/images/main-services2.jpg"
import serviceImg3 from "../assets/images/main-services5.jpg"
import "../assets/css/services.css"

export default function Services() {
  return (
    <section className="services-container">
      <h2 className="services-header">Discover Our Services</h2>
      <div className="services-tagline">
        Professional service for all your home electrical needs.
      </div>
      <div className="services container row m-auto">
        <div className="service col-md-4">
          <div className="service-img">
            <img src={serviceImg1} alt="image" className="img-fluid" />
          </div>
          <div className="service-header">Domestic Services</div>
          <p>
            Curabitur quam etsum lacus netum netsum nulatis iaculis etsimun
            vitaemis etsum nisle varius netsum.
          </p>
        </div>

        <div className="service col-md-4">
          <div className="service-img">
            <img src={serviceImg2} alt="image" className="img-fluid" />
          </div>
          <div className="service-header">Electrical Installation</div>
          <p>
            Curabitur quam etsum lacus netum netsum nulatis iaculis etsimun
            vitaemis etsum nisle varius netsum.
          </p>
        </div>

        <div className="service col-md-4">
          <div className="service-img">
            <img src={serviceImg3} alt="image" className="img-fluid" />
          </div>
          <div className="service-header">Led Lighting</div>
          <p>
            Curabitur quam etsum lacus netum netsum nulatis iaculis etsimun
            vitaemis etsum nisle varius netsum.
          </p>
        </div>
      </div>
    </section>
  )
}
