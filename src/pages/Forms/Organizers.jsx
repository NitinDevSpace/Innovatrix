import React, { useState } from "react";
import { Globe, Users, Rocket, Award, Building2, Code2 } from "lucide-react";
import { OrganizerRegister } from "../../services/organizers";

function Organizers() {
	const [formData, setFormData] = useState({
		organizerId: `ORG-${Date.now()}`,
		instituteType: "",
		instituteName: "",
		email: "",
		phone: "",
		jobTitle: "",
		hackathonType: "",
	});

	const [errors, setErrors] = useState({});
	const [submitting, setSubmitting] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");

	const instituteTypes = [
		"University",
		"College",
		"Bootcamp",
		"Company",
		"Community",
		"Other",
	];

	const hackathonTypes = ["Online", "Onsite", "Hybrid"];

	const validate = () => {
		const newErrors = {};

		if (!formData.instituteType)
			newErrors.instituteType = "Type of Institute is required";
		if (!formData.instituteName.trim())
			newErrors.instituteName = "Institute Name is required";

		if (!formData.email) {
			newErrors.email = "Email is required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			newErrors.email = "Invalid email address";
		}

		if (!formData.phone) {
			newErrors.phone = "Phone Number is required";
		} else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/\s+/g, ""))) {
			newErrors.phone = "Invalid phone number (E.164 format recommended)";
		}

		if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job Title is required";
		if (!formData.hackathonType)
			newErrors.hackathonType = "Hackathon Type is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: "" }));
		setSuccessMessage("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;

		setSubmitting(true);
		setSuccessMessage("");

		try {
			const response = await OrganizerRegister(formData);

			if (!response || response.error) {
				throw new Error("Failed to submit form");
			}

			setSuccessMessage("Registration successful! Thank you.");
			setFormData({
				organizerId: `ORG-${Date.now()}`,
				instituteType: "",
				instituteName: "",
				email: "",
				phone: "",
				jobTitle: "",
				hackathonType: "",
			});
			setErrors({});
		} catch (error) {
			setErrors({ submit: error.message || "Submission failed" });
		} finally {
			setSubmitting(false);
		}
	};

	const benefits = [
		{
			icon: "🚀",
			title: "Accelerate Innovation",
			description:
				"Host hackathons that inspire groundbreaking ideas and solutions.",
		},
		{
			icon: "🤝",
			title: "Build Community",
			description:
				"Connect with passionate developers and tech enthusiasts worldwide.",
		},
		{
			icon: "📈",
			title: "Grow Your Brand",
			description:
				"Showcase your institute’s commitment to technology and innovation.",
		},
	];

	return (
		<div
			className="min-h-screen bg-cover bg-center relative font-grotesk"
			style={{
				backgroundImage:
					"url('https://t3.ftcdn.net/jpg/03/64/76/22/360_F_364762217_G4bMaSfMBuwgjawubHlxJqyt1SG2gJ5n.jpg')",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
			<div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row gap-16">
				{/* Left Panel */}
				<section className="lg:w-1/2 flex flex-col justify-center text-white space-y-8">
					<h1 className="text-5xl sm:text-6xl font-extrabold leading-tight max-w-xl">
						Empower Innovation. Host the Future.
					</h1>
					<p className="text-lg sm:text-xl max-w-lg opacity-90">
						Partner with us to create unforgettable hackathons that foster
						creativity, collaboration, and community growth. Join a network of
						forward-thinking organizers making an impact.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
						{benefits.map(({ icon, title, description }) => (
							<div
								key={title}
								className="bg-white bg-opacity-10 backdrop-blur-2xl rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-transform hover:scale-105"
							>
								<div className="text-4xl mb-4">{icon}</div>
								<h3 className="text-xl font-semibold mb-2">{title}</h3>
								<p className="text-sm opacity-90">{description}</p>
							</div>
						))}
					</div>
					{/* Optional illustration */}
					<div className="mt-12 max-w-xl opacity-80 select-none pointer-events-none">
						<img
							src="https://media.licdn.com/dms/image/v2/D5612AQEF0riJVDZrRw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705562089763?e=2147483647&v=beta&t=sA2wR7RSza8aSWVlrYSe_lSa3_Fut7gloTmrY4PlTAg"
							alt="Innovation illustration"
							className="rounded-xl shadow-lg"
						/>
					</div>
				</section>

				{/* Right Panel - Form */}
				<section className="lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-2xl rounded-xl shadow-2xl p-10 max-w-md mx-auto">
					<h2 className="text-3xl font-extrabold text-white mb-8 text-center">
						Partner / Organizer Registration
					</h2>
					<form
						onSubmit={handleSubmit}
						noValidate
						className="space-y-6 text-white"
					>
						<input
							type="hidden"
							name="organizerId"
							value={formData.organizerId}
						/>

						<div>
							<label
								htmlFor="instituteType"
								className="block text-sm font-medium"
							>
								Type of Institute <span className="text-red-500">*</span>
							</label>
							<select
								id="instituteType"
								name="instituteType"
								value={formData.instituteType}
								onChange={handleChange}
								required
								className={`mt-1 block w-full rounded-md p-2  bg-white bg-opacity-20 border border-white border-opacity-30 shadow-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ${
									errors.instituteType ? "border-red-500" : ""
								}`}
							>
								<option value="" disabled className="p-2 text-black">
									Select institute type
								</option>
								{instituteTypes.map((type) => (
									<option key={type} value={type} className="p-2 text-black">
										{type}
									</option>
								))}
							</select>
							{errors.instituteType && (
								<p className="mt-1 text-sm text-red-400">
									{errors.instituteType}
								</p>
							)}
						</div>

						<div>
							<label
								htmlFor="instituteName"
								className="block  text-sm font-medium"
							>
								Institute Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="instituteName"
								id="instituteName"
								placeholder="Your Institute's Name"
								value={formData.instituteName}
								onChange={handleChange}
								required
								className={`mt-1 block w-full rounded-md p-2 bg-white bg-opacity-20 border border-white border-opacity-30 shadow-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ${
									errors.instituteName ? "border-red-500" : ""
								}`}
							/>
							{errors.instituteName && (
								<p className="mt-1 text-sm text-red-400">
									{errors.instituteName}
								</p>
							)}
						</div>

						<div>
							<label htmlFor="email" className="block  text-sm font-medium">
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="you@example.com"
								value={formData.email}
								onChange={handleChange}
								required
								className={`mt-1 block w-full p-2 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 shadow-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ${
									errors.email ? "border-red-500" : ""
								}`}
							/>
							{errors.email && (
								<p className="mt-1 text-sm text-red-400">{errors.email}</p>
							)}
						</div>

						<div>
							<label htmlFor="phone" className="block text-sm font-medium">
								Phone Number <span className="text-red-500">*</span>
							</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								placeholder="+1234567890"
								value={formData.phone}
								onChange={handleChange}
								required
								className={`mt-1 block w-full p-2 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 shadow-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ${
									errors.phone ? "border-red-500" : ""
								}`}
							/>
							{errors.phone && (
								<p className="mt-1 text-sm text-red-400">{errors.phone}</p>
							)}
						</div>

						<div>
							<label htmlFor="jobTitle" className="block text-sm font-medium">
								Job Title <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="jobTitle"
								id="jobTitle"
								placeholder="Your Job Title"
								value={formData.jobTitle}
								onChange={handleChange}
								required
								className={`mt-1 block w-full p-2 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 shadow-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ${
									errors.jobTitle ? "border-red-500" : ""
								}`}
							/>
							{errors.jobTitle && (
								<p className="mt-1 text-sm text-red-400">{errors.jobTitle}</p>
							)}
						</div>

						<div>
							<label
								htmlFor="hackathonType"
								className="block text-sm font-medium"
							>
								Hackathon Type <span className="text-red-500">*</span>
							</label>
							<select
								id="hackathonType"
								name="hackathonType"
								value={formData.hackathonType}
								onChange={handleChange}
								required
								className={`mt-1 block w-full rounded-md bg-white p-2 bg-opacity-20 border border-white border-opacity-30 shadow-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ${
									errors.hackathonType ? "border-red-500" : ""
								}`}
							>
								<option value="" disabled className="text-black">
									Select hackathon type
								</option>
								{hackathonTypes.map((type) => (
									<option key={type} value={type} className="text-black">
										{type}
									</option>
								))}
							</select>
							{errors.hackathonType && (
								<p className="mt-1 text-sm text-red-400">
									{errors.hackathonType}
								</p>
							)}
						</div>

						{errors.submit && (
							<p className="text-red-400 text-center text-sm">
								{errors.submit}
							</p>
						)}

						{successMessage && (
							<p className="text-green-400 text-center text-sm">
								{successMessage}
							</p>
						)}

						<div>
							<button
								type="submit"
								disabled={submitting}
								className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-lg text-white bg-gradient-to-r from-primary via-secondary to-primary hover:scale-105 focus:outline-none transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
							>
								{submitting ? "Submitting..." : "Register"}
							</button>
						</div>
					</form>
				</section>
			</div>

			{/* Bottom Section */}
			<section className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center space-y-6 text-white">
				{/* Placeholder for logos/trust section */}
				<div className="flex flex-wrap justify-center gap-6 max-w-6xl">
					<div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-lg p-3 shadow-md text-center w-[150px]">
						<Globe className="text-white w-6 h-6 mb-1" />
						<p className="text-sm font-semibold text-white">
							5+ Countries Reached
						</p>
					</div>
					<div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-lg p-3 shadow-md text-center w-[150px]">
						<Users className="text-white w-6 h-6 mb-1" />
						<p className="text-sm font-semibold text-white">10K+ Builders</p>
					</div>
					<div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-lg p-3 shadow-md text-center w-[150px]">
						<Rocket className="text-white w-6 h-6 mb-1" />
						<p className="text-sm font-semibold text-white">
							100+ Hackathons Hosted
						</p>
					</div>
					<div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-lg p-3 shadow-md text-center w-[150px]">
						<Building2 className="text-white w-6 h-6 mb-1" />
						<p className="text-sm font-semibold text-white">
							50+ Partner Institutes
						</p>
					</div>
					<div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-lg p-3 shadow-md text-center w-[150px]">
						<Award className="text-white w-6 h-6 mb-1" />
						<p className="text-sm font-semibold text-white">
							Global Innovation Awards
						</p>
					</div>
					<div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-lg p-3 shadow-md text-center w-[150px]">
						<Code2 className="text-white w-6 h-6 mb-1" />
						<p className="text-sm font-semibold text-white">
							Open Source Driven
						</p>
					</div>
				</div>

				{/* Final CTA */}
				<div className="text-center max-w-xl">
					<h3 className="text-2xl font-extrabold mb-4">
						Ready to make an impact?
					</h3>
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-primary hover:scale-105 text-white font-semibold shadow-lg transition duration-150"
						type="button"
					>
						Partner with Us Today
					</button>
				</div>
			</section>
		</div>
	);
}

export default Organizers;
