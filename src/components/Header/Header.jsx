import { MainHeader, HeaderTitle, HeaderWrapper, Image } from './Header.styled';
import { MainContainer } from 'common/MainContainer';
import Navigation from 'components/Havigation/Navigation';
import logo from '../../assets/logo-color.png';
function Header() {
  return (
    <MainContainer>
      <HeaderWrapper>
        <MainHeader>
          <HeaderTitle to="/">
            <Image src={logo} alt="logo" />
          </HeaderTitle>
          <Navigation />
        </MainHeader>
      </HeaderWrapper>
    </MainContainer>
  );
}
export default Header;
