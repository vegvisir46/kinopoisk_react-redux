import React from 'react';
import instagram from "../../img/footer/icons8-instagram.svg";
import vk from "../../img/footer/icons8-vk-circled.svg";
import whatsapp from "../../img/footer/icons8-whatsapp.svg";
import './footer.scss'

function Footer() {
  return (
    <div className='footer'>
      <ul className="social-contacts-list">
          <li className="social-contacts-item">
            <img src={vk} width="26" height="26" alt='Инстаграм'/>
          </li>
          <li className="social-contacts-item">
            <img src={instagram} width="26" height="26" alt='Вконтакте'/>
          </li>
          <li className="social-contacts-item">
            <img src={whatsapp} width="26" height="26" alt='Ватс-апп'/>
          </li>
      </ul>
    </div>
  )
};


export default Footer;
