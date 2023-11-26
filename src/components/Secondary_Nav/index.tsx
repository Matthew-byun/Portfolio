import { Link } from "react-scroll";
const SecondaryNav = () => {
	return (
		<div className="flex gap-10 fixed top-auto bottom-[20px] left-auto right-[30px] px-6 py-3 bg-black rounded-xl text-white z-20">
			<Link to="home" spy={true} smooth={true} duration={500} offset={-50}>
				<p className="text-[0.9em] leading-[2em] font-[400] pointer">Matthew</p>
			</Link>
			<Link to="blog" spy={true} smooth={true} duration={500} offset={-50}>
				<p className="text-[0.9em] leading-[2em] font-[400] pointer">Blog</p>
			</Link>
			<Link to="work" spy={true} smooth={true} duration={500} offset={-50}>
				<p className="text-[0.9em] leading-[2em] font-[400] pointer">Work</p>
			</Link>
			<Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>
				<p className="text-[0.9em] leading-[2em] font-[400] pointer bg-gray-600 px-2 rounded-md">
					Contact
				</p>
			</Link>
		</div>
	);
};

export default SecondaryNav;
