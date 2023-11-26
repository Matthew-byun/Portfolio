import Reveal from "components/Reveal";
import { useNavigate } from "react-router-dom";
import MovieProject from "assets/img/movie-project.png";
import LaunchpadProject from "assets/img/launchpad.png";
import DefiProject from "assets/img/defi.png";

const Work = () => {
	const navigate = useNavigate();
	return (
		<div className="b-container">
			<Reveal children={<div id="work">WORK</div>} isSlideMotion={false} />
			<Reveal
				children={<div className="title font-bold">Check my projects</div>}
				isSlideMotion={false}
			/>
			<div className="flex flex-wrap xl:flex-nowrap gap-10 box-border">
				<div className="col gap-2 lg:gap-4">
					<Reveal
						children={<div className="font-bold sub-title">Movie Project</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src={MovieProject}
								alt="image description"
								onClick={() => navigate("/project?movie")}
							/>
						}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti doloremque, sequi eveniet dolorum natus id, facere
								voluptas, ad accusamus nulla provident facilis enim repellendus
								ducimus! Eaque molestias recusandae expedita vitae.
							</div>
						}
					/>
				</div>
				<div className="col gap-2 lg:gap-4">
					<Reveal
						children={
							<div className="font-bold sub-title">Launchpad Project</div>
						}
						isSlideMotion={false}
					/>
					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src={LaunchpadProject}
								alt="image description"
								onClick={() => navigate("/project/?launchpad")}
							/>
						}
						isSlideMotion={false}
					/>
					<Reveal
						children={
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti doloremque, sequi eveniet dolorum natus id, facere
								voluptas, ad accusamus nulla provident facilis enim repellendus
								ducimus! Eaque molestias recusandae expedita vitae.
							</div>
						}
					/>
				</div>
				<div className="col gap-2 lg:gap-4">
					<Reveal
						children={<div className="font-bold sub-title">Defi Project</div>}
						isSlideMotion={false}
					/>
					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src={DefiProject}
								alt="image description"
								onClick={() => navigate("/project?defi")}
							/>
						}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti doloremque, sequi eveniet dolorum natus id, facere
								voluptas, ad accusamus nulla provident facilis enim repellendus
								ducimus! Eaque molestias recusandae expedita vitae.
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Work;
