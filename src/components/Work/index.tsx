import Reveal from "components/Reveal";
import { useNavigate } from "react-router-dom";
const Work = () => {
	const navigate = useNavigate();
	return (
		<div className="b-container">
			<Reveal children={<div id="work">WORK</div>} isSlideMotion={false} />
			<Reveal
				children={<div className="text-3xl font-bold">Check my projects</div>}
				isSlideMotion={false}
			/>
			<div className="flex flex-wrap xl:flex-nowrap gap-10 box-border">
				<div className="col gap-10">
					<Reveal
						children={<div className="font-bold text-2xl">Base Defi</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover"
								src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
								alt="image description"
								onClick={() => navigate("/project")}
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
				<div className="col gap-10">
					<Reveal
						children={
							<div className="font-bold text-2xl">Take some Coffee ?</div>
						}
						isSlideMotion={false}
					/>
					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover"
								src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
								alt="image description"
								onClick={() => navigate("/project")}
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
				<div className="lg:col gap-10">
					<Reveal
						children={
							<div className="font-bold text-2xl">MatthEw-commerce</div>
						}
						isSlideMotion={false}
					/>
					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover"
								src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
								alt="image description"
								onClick={() => navigate("/project")}
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
