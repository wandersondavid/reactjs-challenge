
import { FooterStyled } from './styled';

import logo from '../../assets/images/logo.png';


export const Footer = () => {
  return (
    <FooterStyled >
      <div>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <span >© 2023</span>
        </div>
      </div>
    </FooterStyled>
  );
};