import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
	children: JSX.Element;
	isSlideMotion?: boolean;
}

const Reveal = ({ children, isSlideMotion = true }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView]);
	return (
		<div ref={ref} className={`relative overflow-hidden z-0`}>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						y: 125,
					},
					visible: {
						opacity: 1,
						y: 0,
					},
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.75, delay: 0.25 }}
			>
				{children}
			</motion.div>
			{isSlideMotion && (
				<motion.div
					variants={{
						hidden: {
							left: 0,
						},
						visible: {
							left: "100%",
						},
					}}
					initial="hidden"
					animate={slideControls}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="absolute top-4 bottom-4 left-0 right-0 z-20 bg-gray-400"
				></motion.div>
			)}
		</div>
	);
};

export default Reveal;
