import Reveal from "components/Reveal";

const Hero = () => {
	return (
		<div className="relative col bg-hero-img bg-cover pb-24">
			<div className="col font-bold py-60 bg-opacity-10 z-10 md:text-sm-hero text-xs-hero lg:text-hero lg:leading-hero items-center text-left text-[#000000bd]">
				<Reveal
					children={
						<div className="lg:w-[896px] md:w-[400px] w-[350px]">
							Hi i'm Matthew
						</div>
					}
					isSlideMotion={false}
				/>
				<Reveal
					children={
						<p className="lg:w-[896px] md:w-[400px] w-[350px]">
							Blockchain &
							<br /> Full-stack Developer
						</p>
					}
					isSlideMotion={false}
				/>
			</div>

			<div className="w-100% h-100% absolute top-0 bottom-auto left-0 right-auto bg-gradient-to-t from-white -z-0"></div>
		</div>
	);
};

export default Hero;
