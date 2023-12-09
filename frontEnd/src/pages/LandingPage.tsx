const LandingPage = () => {
	return (
		<main className="bg-base-300 min-h-screen flex items-center justify-center px-4 ">
			<div className="max-w-4xl bg-base-100 p-8 rounded shadow-md prose">
				<h1 className="text-4xl font-bold mb-6 text-center text-accent">
					Welcome to Class Flow Hub
				</h1>
				<p className="text-lg text-primary text-center mb-8">
					Empowering Schools, Connecting Families
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h2 className="text-2xl font-bold mb-4">Key Features:</h2>
						<ul className="list-disc ml-6">
							<li>Enrollment Made Easy</li>
							<li>Real-Time Academic Results</li>
							<li>Appointment Scheduling</li>
							<li>Parent/Guardian Access</li>
						</ul>
					</div>

					<div>
						<img
							src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg"
							alt="Class Flow Hub Dashboard"
							className="w-full h-auto rounded"
						/>
					</div>
				</div>

				<div className="text-center mt-8">
					<p className="text-lg">Be the First to Experience Class Flow Hub!</p>
					<p className="text-gray-700 mb-6">
						Exciting times lie ahead! Be among the first to experience the
						future of academic management.
					</p>

					<button className="bg-blue-500 text-white py-2 px-6 rounded">
						Sign Up Now
					</button>
				</div>

				<div className="text-center mt-8">
					<p className="text-gray-600">
						Class Flow Hub - Where Academics Meet Innovation
					</p>
				</div>
			</div>
		</main>
	);
};

export default LandingPage;
