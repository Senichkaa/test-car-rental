import { HeaderTitle } from './Header.styled';
import Navigation from 'components/Havigation/Navigation';
function Header() {
  return (
    <header>
      <div>
        <HeaderTitle to="/">CarBase</HeaderTitle>
        <Navigation />
      </div>
    </header>
  );
}
export default Header;
