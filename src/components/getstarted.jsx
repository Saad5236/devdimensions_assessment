import "../assets/css/getstarted.css"
import electrician from "../assets/images/electrician1.jpg"

export default function GetStarted() {
  return (
    <>
      <section className="getstarted container justify-content-start align-items-center">
        <div className="row">
          <div className="col-md-6 getstarted-text mb-5">
            <h3>Qualified electricians in New York.</h3>
            <p>
              Velis demo enim ipsam voluptatem quia voluptas sit aspernatur
              netsum lorem fugit, seditum netis velas matrix net nesciunt.
            </p>
            <ul className="getstarted-benefits">
              <li>
                <i className="fas fa-check" /> Quias netus magni netsum eos qui
                ratione sequi.
              </li>
              <li>
                <i className="fas fa-check" /> Venis ratione sequi netus enim
                quia tempor magni.
              </li>
              <li>
                <i className="fas fa-check" /> Enim ipsam netus voluptatem quia
                voluptas.
              </li>
            </ul>
            <a href="#contact" className="btn-green small scrool">
              Get Started
            </a>
          </div>
          <div className="col-md-6 getstarted-video d-flex justify-content-start align-items-center">
            <img src={electrician} className="img-fluid" alt="" />
            <a href="#">V</a>
          </div>
        </div>
      </section>
    </>
  )
}
