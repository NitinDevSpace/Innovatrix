import React from "react";

function Filler() {
	return (
		<div className="flex flex-col md:flex-row  p-6 justify-around items-center bg-primary">
			<div className="mt-12 md:mt-0">
				<h1 className="text-white text-5xl font-grotesk">Build.</h1>
				<h1 className="text-white text-5xl font-grotesk">Innovate.</h1>
				<h1 className="text-white text-5xl font-grotesk">Create.</h1>
			</div>
			<div className="h-[60vh] flex justify-end items-center">
				<div className="h-[260px] shadow-xl shadow-blue-600  rounded-xl overflow-hidden">
					<img
						src="https://www.shutterstock.com/image-vector/futuristic-robot-interacting-digital-data-260nw-2500204599.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Filler;
