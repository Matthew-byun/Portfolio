const Hero = () => {
	return (
		<div className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 pt-4">
			<img
				className="rounded-lg"
				src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
				alt="image description"
			/>

			<div className="w-100% absolute text-lg text-white bottom-0">
				<div className="flex gap-4 justify-center items-center bg-black py-2">
					<p className="text-sm font-bold">LIVE</p>
					<p className="text-sm font-bold">GITHUB</p>
					<p className="text-sm font-bold">FIGMA</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
