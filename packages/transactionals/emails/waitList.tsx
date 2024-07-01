import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Text,
	Tailwind,
} from "@react-email/components";
import * as React from "react";

interface WaitlistEmailProps {
	name: string;
}

export const WaitlistEmail: React.FC<Readonly<WaitlistEmailProps>> = ({
	name,
}) => (
	<Html>
		<Head />
		<Preview>Thank you for joining our waitlist and for your patience</Preview>
		<Tailwind>
			<Body className="mx-auto my-auto font-sans bg-white">
				<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
					<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
						Coming Soon.
					</Heading>
					<Text>
						Thank you {name} for joining our waitlist and for your patience. We
						will send you a note when we have something new to share.
					</Text>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

export default WaitlistEmail;
