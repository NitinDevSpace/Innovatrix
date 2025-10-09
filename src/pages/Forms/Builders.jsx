import React, { useState, useRef } from "react";
import { ArrowBigDownDash, MoveDown, MoveRight } from "lucide-react";
import Strip from "../Home/Strip";

function Builders() {
	const [formData, setFormData] = useState({
		participantId: `P-${Math.floor(100000 + Math.random() * 900000)}`,
		name: "",
		email: "",
		companyName: "",
		skill: "",
		phoneNumber: "",
		jobTitle: "",
		referralSource: "",
	});

	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const formRef = useRef(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validateEmail = (email) => {
		// Basic email regex validation
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const validatePhone = (phone) => {
		// Basic phone validation (digits, spaces, dashes, parentheses)
		return /^[0-9\s\-()+]+$/.test(phone);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setSuccess(null);

		// Basic validations
		if (!formData.name.trim()) {
			setError("Please enter your name.");
			return;
		}
		if (!validateEmail(formData.email)) {
			setError("Please enter a valid email address.");
			return;
		}
		if (!formData.companyName.trim()) {
			setError("Please enter your company name.");
			return;
		}
		if (!formData.skill.trim()) {
			setError("Please enter your skill.");
			return;
		}
		if (!validatePhone(formData.phoneNumber)) {
			setError("Please enter a valid phone number.");
			return;
		}
		if (!formData.jobTitle.trim()) {
			setError("Please enter your job title.");
			return;
		}
		if (!formData.referralSource.trim()) {
			setError("Please enter how you heard about us.");
			return;
		}

		setSubmitting(true);

		try {
			const response = await fetch("http://localhost:8080/api/builders", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				const errData = await response.json();
				throw new Error(errData.message || "Failed to submit form");
			}

			setSuccess("Registration successful! Thank you for registering.");
			setFormData({
				participantId: `P-${Math.floor(100000 + Math.random() * 900000)}`,
				name: "",
				email: "",
				companyName: "",
				skill: "",
				phoneNumber: "",
				jobTitle: "",
				referralSource: "",
			});
		} catch (err) {
			setError(err.message);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div
			className="relative bg-cover bg-center text-white gap-12 flex flex-col items-center justify-center pt-12 px-6 sm:px-12 lg:px-24"
			style={{
				backgroundImage:
					"url('https://t3.ftcdn.net/jpg/03/64/76/22/360_F_364762217_G4bMaSfMBuwgjawubHlxJqyt1SG2gJ5n.jpg')",
			}}
		>
			{/* optional: reduced opacity */}
			<div className="absolute inset-0 bg-black opacity-50"></div>
			{/* Text heading */}
			<div className="mt-6 p-6 flex flex-col items-center gap-4 z-20 relative">
				<h1 className="font-grotesk font-extrabold text-4xl">
					Join the Innovatrix Builders Network
				</h1>
				<p className="text-white/90">
					A global community of developers, designers, and innovators shaping
					the next generation of technology through collaboration.
				</p>
				<button
					onClick={() => {
						const offset = 40; // adjust if you have sticky header
						window.scrollTo({
							top: formRef.current.offsetTop - offset,
							behavior: "smooth",
						});
					}}
					className="bg-white text-black font-grotesk text-lg mt-4 p-4 rounded-xl flex gap-4"
				>
					Become a Builder
					<span className="animate-bounce">
						<ArrowBigDownDash className="w-6 h-6 sm:w-7 sm:h-7" />
					</span>
				</button>
			</div>
			{/* below section of text heading */}
			<div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row gap-6 justify-center items-center md:items-start z-10 w-full max-w-[100rem] mx-auto">
				{/* left container */}
				<div className="w-full lg:w-[60%] overflow-hidden bg-white bg-opacity-10 backdrop-blur-2xl border-2 border-white rounded-3xl  shadow-2xl">
					<div className="p-12 flex flex-col items-center justify-center text-white gap-8">
						<h1 className="text-4xl font-grotesk font-extrabold mb-4 ">
							For the Builders, Dreamers, and Disruptors.
						</h1>
						<p className="text-lg font-light opacity-90 leading-relaxed">
							At Innovatrix, we believe builders are the heartbeat of innovation
							— the ones who turn bold ideas into reality. Whether you're a
							coder crafting the future, a designer shaping experiences, or a
							thinker challenging norms, this is your space to connect,
							collaborate, and create without limits. Join a community that
							celebrates your passion, fuels your growth, and gives you the
							platform to make your impact on the world.
						</p>
						<div className="mt-8">
							<img
								src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
								alt="Builders working"
								className="rounded-lg shadow-sm shadow-white object-cover w-full h-48 "
							/>
						</div>
						<h1 className="text-white text-3xl font-grotesk font-bold p-6 flex items-center gap-2">
							Register Now
							<span className="inline-block md:hidden font-bold animate-bounce">
								<MoveDown className="w-6 h-6" strokeWidth={4.5} />
							</span>
							<span className="hidden md:inline-block ">
								<MoveRight className="w-6 h-6 " strokeWidth={4.5} />
							</span>
						</h1>
					</div>
				</div>
				{/* right container form */}
				<div
					ref={formRef}
					className="w-full lg:w-[40%] overflow-hidden bg-white bg-opacity-10 backdrop-blur-2xl border-2 border-white rounded-3xl p-4 shadow-2xl"
				>
					<h1 className="text-4xl text-white font-grotesk font-extrabold m-6 justify-self-center">
						Builder Registration
					</h1>
					<form
						onSubmit={handleSubmit}
						className="p-10 sm:p-12 flex flex-col gap-4 justify-center"
						noValidate
					>
						<input
							type="hidden"
							name="participantId"
							value={formData.participantId}
						/>
						<div className="mb-4">
							<input
								id="name"
								name="name"
								type="text"
								placeholder="Your full name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
							/>
						</div>
						<div className="mb-4">
							<input
								id="email"
								name="email"
								type="email"
								placeholder="you@example.com"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
							/>
						</div>
						<div className="mb-4">
							<input
								id="companyName"
								name="companyName"
								type="text"
								placeholder="Your company or organization"
								value={formData.companyName}
								onChange={handleChange}
								required
								className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
							/>
						</div>
						<div className="mb-4">
							<input
								id="skill"
								name="skill"
								type="text"
								placeholder="Your main skill or expertise"
								value={formData.skill}
								onChange={handleChange}
								required
								className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
							/>
						</div>
						<div className="mb-4">
							<input
								id="phoneNumber"
								name="phoneNumber"
								type="tel"
								placeholder="+91 12345-67890"
								value={formData.phoneNumber}
								onChange={handleChange}
								required
								className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
							/>
						</div>
						<div className="mb-4">
							<input
								id="jobTitle"
								name="jobTitle"
								type="text"
								placeholder="Your current job title"
								value={formData.jobTitle}
								onChange={handleChange}
								required
								className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
							/>
						</div>
						<div className="mb-6">
							<input
								id="referralSource"
								name="referralSource"
								type="text"
								placeholder="How did you hear about us?"
								value={formData.referralSource}
								onChange={handleChange}
								required
								className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
							/>
						</div>
						{error && (
							<p className="mb-4 text-red-600 font-semibold animate-pulse">
								{error}
							</p>
						)}
						{success && (
							<p className="mb-4 text-green-600 font-semibold animate-pulse">
								{success}
							</p>
						)}
						<button
							type="submit"
							disabled={submitting}
							className="w-full bg-white/80 hover:bg-white active:bg-white text-black/80 hover:text-black active:text-black font-grotesk py-3 rounded-md shadow-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{submitting ? "Submitting..." : "Register"}
						</button>
					</form>
				</div>
			</div>
			{/* Above Footer */}
			<div className="flex flex-col items-center justify-center bg-accent2 z-10 relative w-[100vw] mt-12 pt-8">
				<h1 className="text-black mb-6 text-5xl p-6 font-grotesk font-semibold">
					Trusted by Innovators from
				</h1>
				<div className="w-full bg-white/80 backdrop-blur-md overflow-hidden mb-8">
					<Strip />
				</div>
				<div className="flex p-4 justify-around flex-col lg:flex-row mb-12 items-center w-full">
					<h1 className="text-3xl mb-6 lg:mb-0 md:text-5xl font-grotesk front-bold text-black">
						Build. Collaborate. Create Impact.
					</h1>
					<img
						src="https://d1y8sb8igg2f8e.cloudfront.net/images/Digital_Hand_and_Digital_Puzzle.width-800.png"
						alt=""
						className="mt-4 rounded-2xl shadow-xl bg-red-500"
					/>
				</div>
			</div>
		</div>
	);
}

export default Builders;
