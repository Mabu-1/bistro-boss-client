import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Call from "../Call/Call";
import Card from "../Card/Card";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/popularMenu";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            
             <Helmet>
        <title>Bistro Boss | Home</title>
        
      </Helmet>
           <Banner></Banner>
           <Category></Category>
           <About></About>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Card></Card>
            <Featured></Featured>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;