import { Suspense, lazy } from "react";

const Hero = lazy(() => import("./components/Hero"));
const Details = lazy(() => import("./components/Details"));

const Project = () => {
	return (
		<Suspense fallback={<></>}>
			<div className="b-container justify-center items-center">
				<Hero />
				<Details />
			</div>
		</Suspense>
	);
};

export default Project;
