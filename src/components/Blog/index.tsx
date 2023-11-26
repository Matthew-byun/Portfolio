import Reveal from "components/Reveal";
import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
	const navigate = useNavigate();
	return (
		<div className="b-container col">
			<div id="blog">BLOG</div>
			<Reveal
				children={<div className="title font-bold">Article & News</div>}
				isSlideMotion={false}
			/>
			<div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
				<div className="col gap-5">
					<Reveal
						children={<div className="font-bold sub-title">Blog 1</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
								alt="image description"
								onClick={() =>
									navigate(
										"/blog?https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
									)
								}
							/>
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
				<div className="col gap-5">
					<Reveal
						children={<div className="font-bold sub-title">Blog 2</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY"
								alt="image description"
								onClick={() =>
									navigate(
										"/blog?https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY"
									)
								}
							/>
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
				<div className="col gap-5">
					<Reveal
						children={<div className="font-bold sub-title">Blog 3</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w"
								alt="image description"
								onClick={() =>
									navigate(
										"/blog?https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w"
									)
								}
							/>
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
				<div className="col gap-5">
					<Reveal
						children={<div className="font-bold sub-title">Blog 4</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4"
								alt="image description"
								onClick={() =>
									navigate(
										"/blog?https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4"
									)
								}
							/>
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
				<div className="col gap-5">
					<Reveal
						children={<div className="font-bold sub-title">Blog 5</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src="https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI"
								alt="image description"
								onClick={() =>
									navigate(
										"/blog?https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI"
									)
								}
							/>
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
				<div className="col gap-5">
					<Reveal
						children={<div className="font-bold sub-title">Blog 6</div>}
						isSlideMotion={false}
					/>

					<Reveal
						children={
							<img
								className="rounded-lg w-100% h-100% max-w-md object-cover pointer"
								src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
								alt="image description"
								onClick={() =>
									navigate(
										"/blog?https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
									)
								}
							/>
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
