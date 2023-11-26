import React from "react";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
	const { search } = useLocation();
	const img = search.slice(1);

	return (
		<div className="b-container gap-20">
			<div className="col justify-center items-center gap-10 pt-10">
				<p className="tracking-[.8rem]">DEVELOPMENT</p>
				<p className="sub-title font-bold">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					harum commodi quo perferendis illum debitis officia unde id rem
					necessitatibus ab dicta, ea sit ullam, eligendi autem vel libero.
					Illo.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
					cum culpa ratione, aliquam molestiae magni! Non eius ipsam inventore
					nemo commodi repellat sit magnam quidem recusandae quo dignissimos,
					cumque maxime.
				</p>
			</div>
			<img className="rounded-lg" src={img} alt="image description" />
			<div className="col justify-center items-center gap-10 max-w-[896px] pt-4 mx-auto">
				<p className="sub-title font-bold">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					harum commodi quo perferendis illum debitis officia unde id rem
					necessitatibus ab dicta, ea sit ullam, eligendi autem vel libero.
					Illo.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
					cum culpa ratione, aliquam molestiae magni! Non eius ipsam inventore
					nemo commodi repellat sit magnam quidem recusandae quo dignissimos,
					cumque maxime.
				</p>
				<img className="rounded-lg" src={img} alt="image description" />
				<p className="sub-title font-bold">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					harum commodi quo perferendis illum debitis officia unde id rem
					necessitatibus ab dicta, ea sit ullam, eligendi autem vel libero.
					Illo.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
					cum culpa ratione, aliquam molestiae magni! Non eius ipsam inventore
					nemo commodi repellat sit magnam quidem recusandae quo dignissimos,
					cumque maxime.
				</p>
			</div>
		</div>
	);
};

export default BlogDetails;
