
import { HeaderStyled } from './styled';
import logo from '../../assets/images/logo.png';


export const Header = () => {
  return (
    <HeaderStyled >
      <div>
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="">
          <a href="#">Seu Carrinho</a>
        </div>
      </div>
    </HeaderStyled>
  );
};