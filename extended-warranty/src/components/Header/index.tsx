
import { HeaderStyled } from './styled';
import logo from '../../assets/images/logo.png';


export const Header = () => {
  return (
    <HeaderStyled >
      <div>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </HeaderStyled>
  );
};