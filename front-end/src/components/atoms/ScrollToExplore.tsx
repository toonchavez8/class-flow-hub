const ScrollToExplore = () => {
	return (
		<figure className="absolute animate-pulse  bottom-0 w-full z-50 flex flex-col items-center justify-center geist font-thin">
			<img
				src="/Icon-scroll.svg"
				alt="bg-decorative element"
				className=" object-fill w-8 h-8 motion-safe:animate-bounce "
			/>
			<div>Scroll to explore </div>
		</figure>
	);
};

export default ScrollToExplore;
