import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="foot__container" id='contact'>
                <h1 className="footer__title">Contact Us</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'></a>
                    </li>
                    <li>
                        <a href="#about" className='footer__link'></a>
                    </li>
                    <li>
                        <a href="#about" className='footer__link'></a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="mailto:hpclabmail@gmail.com" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-gmail"></i>
                    </a>

                    <a href="https://wa.me/+92-786-786-786." className="footer__social-link" target='_blank'>
                        <i class="bx bxl-whatsapp"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; SiBots. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer