import "../assets/css/footer.css"

export default function Footer() {
  return (
      <div className="ourcontacts container row m-auto justify-content-center">
        <div className="ourcontact experienced col-md-4">
          <div className="ourcontact-icon">B</div>
          <div className="ourcontact-heading">Experienced Team</div>
          <p>10 Oxford Street, London, UK, E1 1EC</p>
          <a href="#">the-office@leadpage.co.uk</a>
          <p>+44 987 654 321</p>
        </div>

        <div className="ourcontact socialmedia col-md-4">
          <div className="ourcontact-icon">B</div>
          <div className="ourcontact-heading">Social Media</div>
          <p>See below where you can find us.</p>
          <p>bbbbbbbbb</p>
        </div>

        <div className="ourcontact usefullinks col-md-4">
          <div className="ourcontact-icon">B</div>
          <div className="ourcontact-heading">Useful Links</div>
          <p>Our Cookies Policy</p>
          <a href="#">Meet The Team Behind LeadPage</a>
          <p>Terms and Conditions</p>
        </div>
      </div>
    
  )
}
