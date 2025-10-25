import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Featured/Testimonials/Testimonials";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;