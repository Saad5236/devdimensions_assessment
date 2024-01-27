import "../assets/css/benefits.css"
import electrician from "../assets/images/electrician2.jpg"

export default function Benefits() {
  return (
    <>
      <section className="benefits row">
        <div className="col-6 benefits-img">
          <img src={electrician} className="img-fluid" alt="" />
        </div>
        <div className="col-6">
          <h2 className="benefits-main-heading">Discover Our Main Benefits</h2>
          <div className="all-benefits">
            <h3>Premium high quality services</h3>
            <h3>Passionate Experienced Team</h3>
            <h3>Electrical Renovations Tips</h3>
            <h3>What recommed us</h3>
          </div>
        </div>
      </section>
    </>
  )
}
