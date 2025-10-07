import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
		<div className="font-sans text-gray-900 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
			{/* Hero Section */}
			<section
				className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-6 md:px-12"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
				}}
			>
				<div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>
				<div className="relative z-10 max-w-4xl">
					<h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fadeInDown">
						Welcome to Hackon
					</h1>
					<p className="text-indigo-200 text-xl md:text-2xl mb-12 animate-fadeInUp">
						Empowering organizers and builders to create amazing hackathons
					</p>
					<div className="flex flex-col md:flex-row gap-8 justify-center">
						{/* Organizers Card */}
						<div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg w-64 h-64 flex flex-col justify-between p-6 cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInLeft">
							<h2 className="text-xl font-semibold text-indigo-900 mb-4">
								Wanna organize a hackathon?
							</h2>
							<Link
								to="/organizers"
								className="mt-auto inline-block bg-indigo-600 text-white font-semibold py-3 px-5 rounded-md shadow-md hover:bg-indigo-700 transition"
							>
								Contact Us
							</Link>
						</div>
						{/* Builders Card */}
						<div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg w-64 h-64 flex flex-col justify-between p-6 cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInRight">
							<h2 className="text-xl font-semibold text-indigo-900 mb-4">
								Join as a Builder
							</h2>
							<Link
								to="/builders"
								className="mt-auto inline-block bg-indigo-600 text-white font-semibold py-3 px-5 rounded-md shadow-md hover:bg-indigo-700 transition"
							>
								Build Now
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* About Hackon */}
			<section className="max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
				<img
					src="https://d8it4huxumps7.cloudfront.net/uploads/competition-sharable/6821812fa1e8d_Launch_KIt_SEO.jpg"
					alt="About Hackon"
					className="w-full md:w-1/2 rounded-lg shadow-lg animate-fadeInLeft"
				/>
				<div className="md:w-1/2 text-center md:text-left">
					<h2 className="text-3xl font-bold text-indigo-900 mb-4 animate-fadeInUp">
						About Hackon
					</h2>
					<p className="text-gray-700 text-lg leading-relaxed animate-fadeInUp delay-150">
						Hackon is your one-stop platform to organize and participate in
						hackathons seamlessly. Whether you are an organizer looking to host
						an event or a builder eager to showcase your skills, Hackon provides
						the tools and community to help you succeed.
					</p>
				</div>
			</section>

			{/* Highlights / Features */}
			<section className="bg-indigo-100 py-20 px-6 md:px-12">
				<h2 className="text-3xl font-bold text-indigo-900 text-center mb-12 animate-fadeInUp">
					Why Choose Hackon?
				</h2>
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
					<div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center animate-fadeInUp delay-100 hover:shadow-2xl transition">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-16 w-16 mb-4 text-indigo-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12h6m-6 4h6m-7-8h8m-8 0a4 4 0 018 0v4a4 4 0 01-8 0v-4z"
							/>
						</svg>
						<h3 className="text-xl font-semibold mb-2">
							Easy Event Management
						</h3>
						<p className="text-gray-700">
							Simplify hackathon organization with intuitive tools and
							dashboards.
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center animate-fadeInUp delay-200 hover:shadow-2xl transition">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-16 w-16 mb-4 text-indigo-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<h3 className="text-xl font-semibold mb-2">Collaborate & Build</h3>
						<p className="text-gray-700">
							Connect with talented builders and bring your ideas to life.
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center animate-fadeInUp delay-300 hover:shadow-2xl transition">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-16 w-16 mb-4 text-indigo-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 8v4l3 3"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 19a7 7 0 100-14 7 7 0 000 14z"
							/>
						</svg>
						<h3 className="text-xl font-semibold mb-2">
							24/7 Community Support
						</h3>
						<p className="text-gray-700">
							Join a vibrant community that supports and inspires you every step
							of the way.
						</p>
					</div>
				</div>
			</section>

			{/* Join Community */}
			<section className="bg-indigo-600 text-white py-20 px-6 md:px-12 text-center">
				<h2 className="text-4xl font-bold mb-6 animate-fadeInUp">
					Ready to be part of the Hackon community?
				</h2>
				<p className="text-lg max-w-xl mx-auto mb-8 animate-fadeInUp delay-150">
					Join thousands of organizers and builders who are changing the world
					through hackathons.
				</p>
				<Link
					to="/community"
					className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition animate-fadeInUp delay-300"
				>
					Join Community
				</Link>
			</section>

			<style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
		</div>
	);
}

export default Home