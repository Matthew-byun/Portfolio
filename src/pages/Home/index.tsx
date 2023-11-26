import About from "components/About";
import Blog from "components/Blog";
import Contact from "components/Contact";

import Hero from "components/Hero";
import MarqueeHero from "components/Marquee";
import Services from "components/Services";
import Work from "components/Work";

const Home = () => {
	return (
		<>
			<MarqueeHero />
			<Hero />
			<About />
			<Services />
			<Work />
			<Contact />
			<Blog />
		</>
	);
};

export default Home;
