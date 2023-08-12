
import "./app.scss"
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Blog from './components/blog/Blog';
import Blogpost from './components/blogposts/Blogpost';
import Grid from './components/grid/Grid';
import Header from './components/header/Header';
import Members from './components/members/Members';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';

import Slideshow from "./components/slideshow/Slideshow";

import Team from './components/team/Team';
import Testimonial from './components/testimonial/Testimonial';
import Do from './components/whatwedo/Do';
import Work from './components/work/Work';

function App() {
  const images = [
    'assets/bg_banner1.jpg',
    'assets/bg_banner2.jpg'
  ]
  return (
    <div className="App">
      <Header/>
      
      <Navbar/>
    <Slideshow/>
      <Services/>
      <Banner/>
      <Do/>
      <Grid/>
      <Work/>
      
      <Team/>
      <Members/>
      <Testimonial/>
      <Blog/>
      <Blogpost/>
      <About/>
     
   
    </div>
  );
  }


export default App;
