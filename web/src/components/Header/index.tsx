
import { HeaderStyled } from './styled';
import logo from '../../assets/images/logo.png';


export const Header = () => {
  return (
    <HeaderStyled >
      <div>
        <a href={'/'}>
            <h1>Store</h1>
        </a>
      </div>
    </HeaderStyled>
  );
};