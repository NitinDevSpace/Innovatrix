import React from "react";
import partners from "../../assets/partners.png";
import programming from "../../assets/programming.png";
import lightbulb from "../../assets/light-bulb.png";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
	return (
		<div className="bg-accent2 p-6">
			<div className="flex flex-col gap-24 lg:flex-row lg:max-w-[100rem] my-6 justify-between mx-auto p-6">
				{/* Left side */}
				<div className="flex flex-col font-grotesk lg:max-w-[60%]">
					<h1 className="py-1 text-3xl font-bold">
						Innovate. Collaborate. Elevate.
					</h1>
					<h1 className="py-1 text-2xl font-bold">
						Empowering organizations to unlock breakthrough ideas
					</h1>
					<h1 className="py-1 text-2xl font-bold">
						through <span className="text-accent1"> Innovatrix </span>
						<span className="text-accent1">
							
							<Typewriter
								words={[
									"Startup Programs",
									"Hackathons",
									"Innovation Challenges",
								]}
								loop={true}
								cursor
								cursorStyle="!"
								typeSpeed={80}
								deleteSpeed={50}
								delaySpeed={1500}
							/>
							
						</span>
					</h1>

					<p className="font-inter text-lg py-6">
						Source the ideas <br />
						and talent that turn your <br />
						biggest challenges into your next opportunities.
					</p>
					{/* Three Infos */}
					<div className="flex gap-4 text-xl text-black my-6">
						<div className="border-r-2 border-black flex flex-col items-start p-4">
							<img src={programming} alt="" width={50} />
							<h1 className="font-bold text-2xl mt-4">30+</h1>
							<span className="text-lg">Programs</span>
						</div>
						<div className="border-r-2 border-black flex flex-col items-start p-4">
							<img src={partners} alt="" width={50} />
							<h1 className="font-bold text-2xl mt-4">80000+</h1>
							<span className="text-lg">Builders</span>
						</div>
						<div className="border-r-2 border-black flex flex-col items-start p-4">
							<img src={lightbulb} alt="" width={50} />
							<h1 className="font-bold text-2xl mt-4">100+</h1>
							<span className="text-lg">Ideas Shipped</span>
						</div>
					</div>
				</div>
				{/* Right side */}
				<div className="flex text-white justify-around gap-12 grow items-center">
					<div className="relative">
						<div className="absolute bottom-0 bg-accent1 border w-64 h-44 rounded-xl"></div>
						<div className="relative right-5 bottom-5 flex flex-col gap-4 bg-secondary2 z-10 w-64 h-80 rounded-xl p-4">
							<div className="text-4xl font-grotesk font-bold border-b-2 border-white pb-8">
								For Organizers
							</div>
							<div className="my-4">Companies, Universities & Communities</div>
							<button className="bg-accent1 hover:scale-105 rounded-lg p-2 shadow-xl font-grotesk font-bold">
								Contact Us
							</button>
						</div>
					</div>
					<div className="relative">
						<div className="absolute bottom-0 bg-secondary2 border w-64 h-44 rounded-xl"></div>
						<div className="relative right-5 bottom-5 flex flex-col gap-4 bg-accent1 z-10 w-64 h-80 rounded-xl p-4">
							<div className="text-4xl font-grotesk font-bold border-b-2 border-white pb-8">
								For <br /> Builders
							</div>
							<div className="my-4">Students, Startups & Innovators</div>
							<button className="bg-secondary2 hover:scale-105 rounded-lg p-2 shadow-xl font-grotesk font-bold">
								Build Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
