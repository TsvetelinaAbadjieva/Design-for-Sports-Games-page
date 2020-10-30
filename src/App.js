// import logo from './logo.svg';
import './css/App.css';
import theme from './theme';
import Nav from './styled_components/navbar';
import Button from './styled_components/button';
import Wrapper from './styled_components/wrapper';
import NavLinks from './styled_components/nav_link';
import {SportCardList} from './styled_components/sport-card';
import casinoImage from './styled_components/assets/casino.jpg';
import Categories from './styled_components/categories';
import Promotions from './styled_components/promotions';
import Providers from './styled_components/providers';
import Footer from './styled_components/footer';


const images={
  casinoImage:casinoImage
}
function App() {
  return (
    <div className="App">
      <Nav className="navbar">Navbar</Nav>
      <div className="App-header">

        <Wrapper>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}> 
            <NavLinks/>
            <Button default={true} type="register">Sign In</Button>
            <Button type="register">Register</Button>
          </div>
          <SportCardList images={images} theme={theme}></SportCardList>
            <Categories theme={theme.categories}/>
            <Promotions theme={theme.promotions}></Promotions>
            <Providers theme={theme.providers}></Providers>
            <Footer/>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
