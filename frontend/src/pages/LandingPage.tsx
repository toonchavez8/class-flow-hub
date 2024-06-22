import NavBar from "../components/Layouts/NavBar";
import BgIcon from "../components/atoms/BgIcon";
import EmailForm from "../components/atoms/EmailForm";
import ScrollToExplore from "../components/atoms/ScrollToExplore";
import "./LandingPage.css";
import { Link } from "react-scroll";

const LandingPage = () => {
	const array = ["01", "02", "03", "04", "05", "06"];

	return (
		<>
			<NavBar />
			<main className="relative flex min-h-screen px-4 overflow-hidden isolate md:px-16w-full bg-base-300 text-primary">
				<figure className="flex flex-col max-h-screen gap-16 px-6 my-auto overflow-x-auto font-thin geist no-scrollbar ps-10 opacity-gradient">
					{array.map((item) => (
						<Link
							key={item}
							to={`section-${item}`}
							spy={true}
							smooth={true}
							duration={500}
							className={`first-of-type:mt-96 last-of-type:mb-96 last-of-type:pb-24 text-2xl`}
						>
							{item}{" "}
						</Link>
					))}
				</figure>
				<section className="overflow-x-auto max-h-screen flex flex-col no-scrollbar gap-16 md:gap-72 ps-16  py-15 my-auto   text-left md:text-left lg:pe-[15rem] xl:pe-[45rem]  opacity-gradient ">
					<h1 className="px-10 mt-32 text-2xl font-thin md:text-4xl md:flex-1 md:h-1/2 md:mt-96 geist ">
						Are you ready to revolutionize the way your school manages academic
						processes? Introducing{" "}
						<span className="font-normal">Class Flow Hub.</span>
					</h1>
					<p className="px-10 text-2xl font-thin md:h-1/2 md:self-center geist ">
						the <span className="font-normal">all-in-one solution</span>{" "}
						designed to streamline enrollment, simplify grade management, and
						enhance communication between schools, teachers, and parents.
					</p>
					<div className="flex flex-col gap-10 px-10 md:flex-1 md:self-center md:gap-48">
						<h2 className="text-2xl geist">Key Features:</h2>
						<p className="px-10 text-2xl font-thin md:h-1/2 md:self-center geist ">
							Enrollment Made Easy Effortlessly manage student enrollment with
							our user-friendly interface. Say goodbye to paperwork and hello to
							a streamlined enrollment process.
						</p>
						<p className="px-10 text-2xl font-thin md:h-1/2 md:self-center geist ">
							2. Real-Time Academic Results Get instant access to comprehensive
							academic results. Track student progress, identify strengths, and
							address areas for improvement seamlessly.
						</p>
						<p className="px-10 text-2xl font-thin md:h-1/2 md:self-center geist ">
							3. Appointment Scheduling Facilitate communication between
							teachers and parents with our intuitive appointment scheduling
							feature. Easily schedule and follow up on meetings, ensuring
							everyone stays informed and involved.
						</p>
						<p className="px-10 text-2xl font-thin md:h-1/2 md:self-center geist ">
							4. Parent/Guardian Access Class Flow Hub provides secure access
							for parents and guardians to view their student's grades,
							assignments, and important announcements. Stay connected with your
							child's academic journey effortlessly.
						</p>
					</div>

					<div className="flex flex-col gap-10 px-10 pb-64 md:flex-1 md:self-center md:gap-48">
						<h2 className="text-2xl geist">
							Be the First to Experience Class Flow Hub!
						</h2>
						<p className="px-10 text-2xl font-thin md: md:self-center geist ">
							Exciting times lie ahead! Be among the first to experience the
							future of academic management. Sign up now to receive exclusive
							updates and be notified when Class Flow Hub is up and running
						</p>
						<EmailForm />
					</div>
				</section>
				<BgIcon />
				<ScrollToExplore />
			</main>
		</>
	);
};

export default LandingPage;
