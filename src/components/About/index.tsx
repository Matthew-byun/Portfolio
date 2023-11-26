import Reveal from "components/Reveal";

const About = () => {
	return (
		<div className="b-container" id="about">
			<div className="text-[1em]">ABOUT</div>
			<Reveal
				children={<div className="text-3xl font-bold">My life story</div>}
				isSlideMotion={false}
			/>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col gap-4 text-[1em]">
					<Reveal
						children={
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
								sunt. Doloremque illo similique aliquam natus laborum excepturi
								velit id magnam veniam alias necessitatibus dolorum perferendis,
								quasi recusandae quidem! Praesentium, sapiente?
							</p>
						}
					/>
					<Reveal
						children={
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
								sunt. Doloremque illo similique aliquam natus laborum excepturi
								velit id magnam veniam alias necessitatibus dolorum perferendis,
								quasi recusandae quidem! Praesentium, sapiente?
							</p>
						}
					/>
					<Reveal
						children={
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
								sunt. Doloremque illo similique aliquam natus laborum excepturi
								velit id magnam veniam alias necessitatibus dolorum perferendis,
								quasi recusandae quidem! Praesentium, sapiente?
							</p>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
