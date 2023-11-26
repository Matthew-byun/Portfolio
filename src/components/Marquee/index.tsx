import Marquee from "react-fast-marquee";
const marqueeVar = ["DEVELOPER", "BLOCKCHAIN", "DEVELOPER", "WEB"];

const MarqueeHero = () => {
	return (
		<>
			<div className="absolute bg-[#3fa5d1] w-100% h-[48px]"></div>
			<Marquee speed={40} gradient={true} autoFill={true}>
				<div className="flex py-[10px]">
					{marqueeVar.map((item, index) => {
						return (
							<div
								className={`px-4 text-white ${
									index % 2 === 0 ? "font-bold" : "italic"
								}`}
								key={index}
							>
								{item}
							</div>
						);
					})}
				</div>
			</Marquee>
		</>
	);
};

export default MarqueeHero;
