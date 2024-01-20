import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footerbelow = () => {
  return (
    <footer className="bg-dark text-light py-5" style={{ marginTop: '7rem' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className='text-warning'>About Us</h4>
            <p>
              Mewelder, based in Mumbai, specializes in crafting elegant gates, grills, and shutters for enhanced security and aesthetics. We also provide services for staircases and sheds. Discover the perfect fusion of function and style with Mewelder.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className='text-warning'>Services</h4>
            <ul className="list-unstyled d-flex justify-content-center ">
              <li>
                <Link to="/gate" className="text-decoration-none text-info">Gate</Link>
              </li>
              <li>
                <Link to="/grill" className="text-decoration-none text-info m-3">Grill</Link>
              </li>
              <li>
                <Link to="/shutter" className="text-decoration-none text-info">Shutter</Link>
              </li>
            </ul>
            <ul className="list-unstyled d-flex justify-content-center ">
              <li>
                <Link to="/repairing" className="text-decoration-none text-info">Repairing</Link>
              </li>

              <li>
                <Link to="/shutter" className="text-decoration-none text-info p-2">All-type-of-Shutter </Link>
              </li>
            </ul>
          </div>

        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <Link to="/quote" className="text-light text-decoration-none">
              <button className="btn newbtn  ">Get a FREE Quote!</button>
            </Link>
          </div>
          <div className="col-md-6 text-md-end mt-4">
            <Link className='text-light text-decoration-none' to="mailto:info@mewelder.com">Email : info@mewelder.com</Link>
            <ul className="list-unstyled d-flex justify-content-center mt-2">
              <li>
                <Link to="/Priveciy" className="text-decoration-none text-info">Priveciy</Link>
              </li>

              <li>
                <Link to="/Disclaimer" className="text-decoration-none text-info p-2">Disclaimer </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">

          <div className="col-md-6 text-md-end">
            <div className="social-icons">

              <Link to="https://instagram.com/mewelder_com?igshid=NzZlODBkYWE4Ng==" className="btn btn-link text-light me-3">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </Link>
              <Link to="http://www.facebook.com" className="btn btn-link text-light me-3">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=9372479517"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link text-light me-3"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
            </div>


          </div>
        </div>
        <div className="mt-3" style={{ textAlign: 'center' }}>
          <p className="mb-0">&copy; 2023 Mewelder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footerbelow;
