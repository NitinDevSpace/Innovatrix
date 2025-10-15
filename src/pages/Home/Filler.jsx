import React from "react";
import { useNavigate } from "react-router-dom";

function Filler() {
	const navigate = useNavigate();

	return (
		<section className="w-full bg-gradient-to-r from-primary via-secondary2 to-accent1 min-h-screen px-8 py-16 flex flex-col md:flex-row items-center justify-center gap-44 text-white">
			<div className="flex flex-col max-w-lg">
				<h1 className="text-6xl font-extrabold text-white font-grotesk">
					Build.
				</h1>
				<h1 className="text-6xl font-extrabold text-white font-grotesk">
					Innovate.
				</h1>
				<h1 className="text-6xl font-extrabold text-white font-grotesk">
					Create.
				</h1>
				<p className="mt-6 text-lg text-gray-200 max-w-lg">
					Fuel ideas into reality with the power of collaboration and
					technology.
				</p>
				<div className="mt-8 flex gap-6">
					<button
						onClick={() => {
							navigate("/builders");
						}}
						className="px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-opacity-90 transition"
					>
						Join as Builder
					</button>
					<button
						onClick={() => {
							navigate("/organizers");
						}}
						className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition"
					>
						Host a Hackathon
					</button>
				</div>
			</div>
			<div className="relative flex justify-center items-center">
				<img
					src="https://usabilitygeek.com/wp-content/uploads/2018/09/ux-designers-innovate-lead.jpg"
					alt="Innovation"
					className="rounded-xl shadow-2xl w-[550px] h-[380px] object-cover"
				/>
				<img
					src="https://www.templeton-recruitment.com/hs-fs/hubfs/Future-Tech-Jobs-That-Do-not-Exist-Yet.jpg?width=1600&height=900&name=Future-Tech-Jobs-That-Do-not-Exist-Yet.jpg"
					alt="Future Tech"
					className="absolute top-8 right-[-160px] rounded-lg shadow-lg w-[220px] h-[140px] object-cover"
				/>
				<img
					src="https://cdn.mos.cms.futurecdn.net/tJcUvk4Kt7k7eQxLewANBn.jpg"
					alt="Collaboration"
					className="absolute bottom-[-30px] left-[-150px] rounded-lg shadow-lg w-[200px] h-[130px] object-cover"
				/>
			</div>
		</section>
	);
}

export default Filler;
