import Reveal from "components/Reveal";

const About = () => {
	return (
		<div className="b-container" id="about">
			<div className="text-[1em]">ABOUT</div>
			<Reveal
				children={<div className="title font-bold">Objective</div>}
				isSlideMotion={false}
			/>
			<div className="flex lg:grid lg:grid-cols-2 gap-4">
				<div className="flex flex-col gap-4 text-[1em]">
					<Reveal
						children={
							<p>
								Result-driven Blockchain Developer with more than 3 years of
								hands-on experience in developing and deploying decentralized
								applications. Seeking a challenging role to contribute technical
								expertise in blockchain technology and smart contract
								development
							</p>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
