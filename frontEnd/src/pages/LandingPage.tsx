import NavBar from "../components/Layouts/NavBar";

const LandingPage = () => {
	const array = [1, 2, 3, 4, 5, 6];

	return (
		<>
			<NavBar />
			<main className="min-h-screen flex   px-4 w-full gradientBG ">
				<figure className="font-thin geist max-h-screen flex flex-col no-scrollbar gap-16  ps-10 px-4 my-auto">
					{array.map((item, index) => (
						<div className="" key={index}>
							{item}{" "}
						</div>
					))}
				</figure>
				<section className="overflow-x-auto max-h-screen flex flex-col no-scrollbar gap-16 md:gap-72 ps-10 px-4 my-auto   text-left md:text-left max-w-4xl">
					<h1 className="px-10 text-2xl md:flex-1 md:h-1/2  mt-32 md:mt-96   font-thin geist ">
						Are you ready to revolutionize the way your school manages academic
						processes? Introducing{" "}
						<span className="font-normal">Class Flow Hub.</span>
					</h1>
					<p className="px-10 text-2xl md:h-1/2 md:self-center font-thin geist ">
						the <span className="font-normal">all-in-one solution</span>{" "}
						designed to streamline enrollment, simplify grade management, and
						enhance communication between schools, teachers, and parents.
					</p>
					<div className="flex flex-col gap-10 px-10 md:flex-1 md:self-center md:gap-48">
						<h2 className="geist text-2xl">Key Features:</h2>
						<p className="px-10 text-2xl md:h-1/2 md:self-center font-thin geist ">
							Enrollment Made Easy Effortlessly manage student enrollment with
							our user-friendly interface. Say goodbye to paperwork and hello to
							a streamlined enrollment process.
						</p>
						<p className="px-10 text-2xl md:h-1/2 md:self-center font-thin geist ">
							2. Real-Time Academic Results Get instant access to comprehensive
							academic results. Track student progress, identify strengths, and
							address areas for improvement seamlessly.
						</p>
						<p className="px-10 text-2xl md:h-1/2 md:self-center font-thin geist ">
							3. Appointment Scheduling Facilitate communication between
							teachers and parents with our intuitive appointment scheduling
							feature. Easily schedule and follow up on meetings, ensuring
							everyone stays informed and involved.
						</p>
						<p className="px-10 text-2xl md:h-1/2 md:self-center font-thin geist ">
							4. Parent/Guardian Access Class Flow Hub provides secure access
							for parents and guardians to view their student's grades,
							assignments, and important announcements. Stay connected with your
							child's academic journey effortlessly.
						</p>
					</div>

					<div className="flex flex-col gap-10 px-10 md:flex-1 md:self-center">
						<h2 className="geist text-2xl">
							Be the First to Experience Class Flow Hub!
						</h2>
						<p className="px-10 text-2xl md: md:self-center font-thin geist ">
							Exciting times lie ahead! Be among the first to experience the
							future of academic management. Sign up now to receive exclusive
							updates and be notified when Class Flow Hub is up and running
						</p>
						<button className="btn btn-primary">Sign Up</button>
					</div>
				</section>
			</main>
		</>
	);
};

export default LandingPage;
