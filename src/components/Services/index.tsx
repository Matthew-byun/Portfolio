import Reveal from "components/Reveal";
import ThreeLine from "components/ThreeLine";

const Services = () => {
	return (
		<div className="b-container" id="services">
			<div>SERVICES</div>
			<Reveal
				children={
					<div className="font-bold text-3xl">What can i do for you?</div>
				}
				isSlideMotion={false}
			/>

			<Reveal
				children={
					<div className="flex lg:grid lg:grid-cols-2 lg:gap-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
						alias doloribus quos quaerat aspernatur reprehenderit ex dignissimos
						quam ducimus! Cum iure illum perferendis neque repudiandae hic, quam
						nisi molestias exercitationem!
					</div>
				}
			/>

			<div className="flex lg:flex-nowrap flex-wrap gap-10">
				<div className="col gap-4">
					<Reveal
						children={<div className="font-bold text-2xl">Web development</div>}
						isSlideMotion={false}
					/>
					<Reveal
						children={
							<div className="flex gap-4">
								<ThreeLine />
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Eveniet accusamus doloribus tempora cum, in quasi vel
									cupiditate velit dolore fuga blanditiis distinctio, ipsum
									voluptatum fugit facere minima sed suscipit totam?
								</p>
							</div>
						}
						isSlideMotion={false}
					/>
				</div>
				<div className="col gap-4">
					<Reveal
						children={<div className="font-bold text-2xl">Web design</div>}
						isSlideMotion={false}
					/>
					<Reveal
						children={
							<div className="flex gap-4">
								<ThreeLine />
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Eveniet accusamus doloribus tempora cum, in quasi vel
									cupiditate velit dolore fuga blanditiis distinctio, ipsum
									voluptatum fugit facere minima sed suscipit totam?
								</p>
							</div>
						}
						isSlideMotion={false}
					/>
				</div>
				<div className="col gap-4">
					<Reveal
						children={<div className="font-bold text-2xl">Smart Contract</div>}
						isSlideMotion={false}
					/>
					<Reveal
						children={
							<div className="flex gap-4">
								<ThreeLine />
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Eveniet accusamus doloribus tempora cum, in quasi vel
									cupiditate velit dolore fuga blanditiis distinctio, ipsum
									voluptatum fugit facere minima sed suscipit totam?
								</p>
							</div>
						}
						isSlideMotion={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Services;
