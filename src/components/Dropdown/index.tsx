import { useOnClickOutSide } from "hooks/useOnClickOutSide";
import { useRef, useState } from "react";
import IconDrop from "assets/img/down-arrow.png";

const Droplist = [
	"Case Study",
	"Work",
	"About",
	"Gallery",
	"Contact",
	"Services",
];
const Dropdown = () => {
	const [isDrop, setIsDrop] = useState(false);
	const ref = useRef(null);

	useOnClickOutSide(ref, () => {
		setIsDrop(false);
	});

	return (
		<div ref={ref} className="relative">
			<div
				className="flex gap-1 items-center"
				onClick={() => setIsDrop((i) => !i)}
			>
				<p className="z-20">PAGE</p>
				<img src={IconDrop} alt="icon-down" className="max-w-[32px]" />
			</div>

			<ul
				className={`row gap-4 absolute z-20 bg-white w-[200px] ${
					isDrop ? "" : "hidden"
				} border-black border-2 items-center justify-between px-2 flex-wrap whitespace-nowrap ease-in-out`}
			>
				{Droplist.map((item, index) => {
					return (
						<li className="basis-1/6 my-2" key={index}>
							{item}
						</li>
					);
				})}
				<div className="absolute w-100% border-t-4 border-black z-20 left-0 bottom-0"></div>
			</ul>
		</div>
	);
};

export default Dropdown;
