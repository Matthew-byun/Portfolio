import Reveal from "components/Reveal";
import React from "react";

const Details = () => {
	return (
		<>
			<div className="flex gap-4 justify-between pt-4">
				<Reveal
					children={
						<div className="basis-1/3 text-lg font-bold">
							PROJECT - SERVICES
						</div>
					}
					isSlideMotion={false}
				/>

				<div className="basis-2/3 col gap-4">
					<Reveal
						children={
							<p className="leading-[2em] font-[1em]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
								vero id, eius eum at et sapiente nobis recusandae ad impedit
								veniam dolorum repellat officiis totam eaque, maxime consequatur
								neque natus! Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Nisi, accusamus laudantium! Animi esse numquam in
								exercitationem qui tenetur, corrupti deserunt rerum quas optio
								quod reprehenderit voluptate culpa? Delectus, vitae aperiam.
							</p>
						}
					/>
					<Reveal
						children={
							<img
								className="rounded-lg"
								src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
								alt="image description"
							/>
						}
						isSlideMotion={false}
					/>
				</div>
			</div>
			<div className="w-100% border-t-2 border-black my-10"></div>
			<div className="flex gap-4 justify-between pt-4">
				<div className="basis-1/3 text-lg font-bold">ABOUT THE PROJECT</div>
				<div className="basis-2/3 col gap-4">
					<Reveal
						children={
							<p className="leading-[2em] font-[1em]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
								vero id, eius eum at et sapiente nobis recusandae ad impedit
								veniam dolorum repellat officiis totam eaque, maxime consequatur
								neque natus! Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Nisi, accusamus laudantium! Animi esse numquam in
								exercitationem qui tenetur, corrupti deserunt rerum quas optio
								quod reprehenderit voluptate culpa? Delectus, vitae aperiam.
							</p>
						}
					/>
					<Reveal
						children={
							<p className="leading-[2em] font-[1em]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
								vero id, eius eum at et sapiente nobis recusandae ad impedit
								veniam dolorum repellat officiis totam eaque, maxime consequatur
								neque natus! Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Nisi, accusamus laudantium! Animi esse numquam in
								exercitationem qui tenetur, corrupti deserunt rerum quas optio
								quod reprehenderit voluptate culpa? Delectus, vitae aperiam.
							</p>
						}
					/>
					<Reveal
						children={
							<p className="leading-[2em] font-[1em]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
								vero id, eius eum at et sapiente nobis recusandae ad impedit
								veniam dolorum repellat officiis totam eaque, maxime consequatur
								neque natus! Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Nisi, accusamus laudantium! Animi esse numquam in
								exercitationem qui tenetur, corrupti deserunt rerum quas optio
								quod reprehenderit voluptate culpa? Delectus, vitae aperiam.
							</p>
						}
					/>
				</div>
			</div>
		</>
	);
};

export default Details;
