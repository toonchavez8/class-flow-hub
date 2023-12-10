import { FaThreads } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="geist text-primary flex justify-around items-center  font-thin py-2 opacity-gradient">
			<h5 className="text-lg">All rights served</h5>
			<a href="">
				<FaThreads className="w-6 h-6" />
			</a>
			<a href="">
				<AiFillGithub className="w-6 h-6" />
			</a>
			<a href="">
				<FaInstagram className="w-6 h-6" />
			</a>
		</div>
	);
};

export default SocialMedia;
