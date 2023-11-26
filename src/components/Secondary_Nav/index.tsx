import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
const SecondaryNav = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [isHome, setIsHome] = useState(false);

	const handleOnClick = () => {
		return setIsHome((i) => !i);
	};
	return (
		<div className="flex gap-10 fixed top-auto bottom-[20px] left-auto right-[30px] px-6 py-3 bg-black rounded-xl text-white z-20 invisible md:visible">
			{pathname?.includes("home") ? (
				<>
					<Link
						to={isHome ? "footer" : "home"}
						spy={true}
						smooth={true}
						duration={500}
						offset={-50}
					>
						<p
							className="text-[0.9em] leading-[2em] font-[400] pointer"
							onClick={() => handleOnClick()}
						>
							Matthew
						</p>
					</Link>
					<Link to="blog" spy={true} smooth={true} duration={500} offset={-50}>
						<p className="text-[0.9em] leading-[2em] font-[400] pointer">
							Blog
						</p>
					</Link>
					<Link to="work" spy={true} smooth={true} duration={500} offset={-50}>
						<p className="text-[0.9em] leading-[2em] font-[400] pointer">
							Work
						</p>
					</Link>
					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={-150}
						duration={500}
					>
						<p className="text-[0.9em] leading-[2em] font-[400] pointer bg-gray-600 px-2 rounded-md">
							Contact
						</p>
					</Link>
				</>
			) : (
				<>
					<p
						className="text-[0.9em] leading-[2em] font-[400] pointer"
						onClick={() => navigate("/")}
					>
						Matthew
					</p>

					<p
						className="text-[0.9em] leading-[2em] font-[400] pointer"
						onClick={() => navigate("/")}
					>
						Blog
					</p>

					<p
						className="text-[0.9em] leading-[2em] font-[400] pointer"
						onClick={() => navigate("/")}
					>
						Work
					</p>

					<p
						className="text-[0.9em] leading-[2em] font-[400] pointer bg-gray-600 px-2 rounded-md"
						onClick={() => navigate("/contact")}
					>
						Contact
					</p>
				</>
			)}
		</div>
	);
};

export default SecondaryNav;
