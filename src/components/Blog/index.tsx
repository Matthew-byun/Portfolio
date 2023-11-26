import Reveal from "components/Reveal";
import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
	const navigate = useNavigate();
	return (
		<div className="b-container col">
			<div id="blog">BLOG</div>
			<Reveal
				children={<div className="text-3xl font-bold">Article & News</div>}
				isSlideMotion={false}
			/>
			<div className="grid grid-cols-3 gap-10">
				<div className="col gap-10">
					<Reveal
						children={<div className="font-bold text-2xl">Blog 1</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<div
								className="w-100% h-[400px] bg-blue-400 pointer"
								onClick={() => navigate("/blog")}
							></div>
						}
						isSlideMotion={false}
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
				<div className="col gap-10">
					<Reveal
						children={<div className="font-bold text-2xl">Blog 2</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<div
								className="w-100% h-[400px] bg-blue-400 pointer"
								onClick={() => navigate("/blog")}
							></div>
						}
						isSlideMotion={false}
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
				<div className="col gap-10">
					<Reveal
						children={<div className="font-bold text-2xl">Blog 3</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<div
								className="w-100% h-[400px] bg-blue-400 pointer"
								onClick={() => navigate("/blog")}
							></div>
						}
						isSlideMotion={false}
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
				<div className="col gap-10">
					<Reveal
						children={<div className="font-bold text-2xl">Blog 4</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<div
								className="w-100% h-[400px] bg-blue-400 pointer"
								onClick={() => navigate("/blog")}
							></div>
						}
						isSlideMotion={false}
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
				<div className="col gap-10">
					<Reveal
						children={<div className="font-bold text-2xl">Blog 5</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<div
								className="w-100% h-[400px] bg-blue-400 pointer"
								onClick={() => navigate("/blog")}
							></div>
						}
						isSlideMotion={false}
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
				<div className="col gap-10">
					<Reveal
						children={<div className="font-bold text-2xl">Blog 6</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<div
								className="w-100% h-[400px] bg-blue-400 pointer"
								onClick={() => navigate("/blog")}
							></div>
						}
						isSlideMotion={false}
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

export default Blog;
