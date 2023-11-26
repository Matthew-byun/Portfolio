import { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import MovieProject from "assets/img/movie-project.png";
import LaunchpadProject from "assets/img/launchpad.png";
import DefiProject from "assets/img/defi.png";

const Hero = lazy(() => import("./components/Hero"));
const Details = lazy(() => import("./components/Details"));

const Project = () => {
	const { search } = useLocation();
	console.log({ search });
	return (
		<Suspense fallback={<></>}>
			<div className="b-container justify-center items-center">
				<Hero
					link={
						search?.includes("movie")
							? MovieProject
							: search?.includes("launchpad")
							? LaunchpadProject
							: DefiProject
					}
				/>
				<Details
					link={
						search?.includes("movie")
							? MovieProject
							: search?.includes("launchpad")
							? LaunchpadProject
							: DefiProject
					}
					name={search.slice(1)}
				/>
			</div>
		</Suspense>
	);
};

export default Project;
