import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Dropdown from "components/Dropdown";

const Responsive = {
	pc: "lg:basis-4/6 lg:flex lg:justify-center lg:items-center lg:gap-10",
	mobile: "hidden",
};

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="row justify-between items-center text-center px-4 py-8 gap-2 border-t-8 border-black border-b-2">
			<div
				className="basis-1/6 title font-bold pointer"
				onClick={() => navigate("/")}
				id="home"
			>
				Matthew
			</div>
			<div className={`${Responsive.pc} ${Responsive.mobile} font-medium`}>
				<div className="cursor-pointer" onClick={() => navigate("/")}>
					HOME
				</div>
				<Link to="about" spy={true} smooth={true} offset={-150} duration={500}>
					<div className="cursor-pointer" onClick={() => navigate("/")}>
						ABOUT
					</div>
				</Link>
				<Link
					to="services"
					spy={true}
					smooth={true}
					offset={-150}
					duration={500}
				>
					<div className="cursor-pointer">SERVICES</div>
				</Link>

				<div className="cursor-pointer">
					<Dropdown />
				</div>
			</div>

			<div className="cursor-pointer basis-1/6 text-xs md:text-[16px] invisible md:visible">
				<p onClick={() => navigate("/contact")}>CONTACT</p>
			</div>
		</div>
	);
};

export default Header;
