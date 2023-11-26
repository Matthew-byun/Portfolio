const Footer = () => {
	return (
		<div className="b-container pb-10">
			<div className="grid grid-cols-2">
				<div className="col justify-between">
					<div className="text-3xl font-bold">Footer</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
						incidunt provident impedit officiis eveniet tempore fugiat adipisci
						ea ducimus, nulla quo neque. Velit sint modi hic voluptatem non
						officia dignissimos.
					</p>
					<div className="flex gap-4">
						<p className="tag_footer">FACEBOOK</p>
						<p className="tag_footer">INSTAGRAM</p>
						<p className="tag_footer">LINKEDIN</p>
						<p className="tag_footer">TWITTER</p>
					</div>
				</div>

				<div className="flex justify-end gap-20">
					<div className="col gap-4">
						<p className="font-medium">Menu</p>
						<p>Menu 1</p>
						<p>Menu 2</p>
						<p>Menu 3</p>
						<p>Menu 4</p>
					</div>
					<div className="col gap-4">
						<p className="font-medium">Projects</p>
						<p>Web design</p>
						<p>Defi app</p>
						<p>Ecommerce</p>
					</div>
				</div>
			</div>
			<div className="border-t-2"></div>
			<div>
				Made by
				<p className="font-bold inline"> Phan Nguyen Hoai Trung</p>
			</div>
		</div>
	);
};

export default Footer;
