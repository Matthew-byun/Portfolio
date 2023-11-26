import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	const handleOnClick = (link: string) => {
		return window.open(link);
	};
	return (
		<div className="b-container pb-10 gap-10">
			<div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-10">
				<div className="col justify-between gap-4">
					<div className="title font-bold" id="footer">
						Matthew
					</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
						incidunt provident impedit officiis eveniet tempore fugiat adipisci
						ea ducimus, nulla quo neque. Velit sint modi hic voluptatem non
						officia dignissimos.
					</p>
					<div className="flex flex-wrap lg:flex-nowrap gap-4">
						<p
							className="tag_footer"
							onClick={() =>
								handleOnClick("https://www.facebook.com/mid.mfriend")
							}
						>
							FACEBOOK
						</p>

						<p
							className="tag_footer"
							onClick={() =>
								handleOnClick(
									"https://www.linkedin.com/in/matthew-tc-494854289/"
								)
							}
						>
							LINKEDIN
						</p>
						<p
							className="tag_footer"
							onClick={() =>
								handleOnClick("https://twitter.com/Matthewyun2109")
							}
						>
							TWITTER
						</p>
					</div>
				</div>

				<div className="flex justify-between w-100% lg:justify-end gap-2 lg:gap-20">
					<div className="col gap-4">
						<p className="sub-title">Menu</p>
						<p className="pointer" onClick={() => navigate("/")}>
							Menu 1
						</p>
						<p className="pointer" onClick={() => navigate("/")}>
							Menu 2
						</p>
						<p className="pointer" onClick={() => navigate("/")}>
							Menu 3
						</p>
						<p className="pointer" onClick={() => navigate("/")}>
							Menu 4
						</p>
					</div>
					<div className="col gap-4">
						<p className="sub-title">Projects</p>
						<p className="pointer" onClick={() => navigate("/project?defi")}>
							Defi
						</p>
						<p
							className="pointer"
							onClick={() => navigate("/project?launchpad")}
						>
							Launchpad
						</p>
						<p className="pointer" onClick={() => navigate("/project?movie")}>
							Movie
						</p>
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
