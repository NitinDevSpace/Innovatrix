import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
		agreeToTerms: false,
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		
		console.log("Sign up attempt:", formData);
	};

	return (
		<div
			className="min-h-screen relative overflow-hidden bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://t3.ftcdn.net/jpg/03/64/76/22/360_F_364762217_G4bMaSfMBuwgjawubHlxJqyt1SG2gJ5n.jpg')",
			}}
		>
			{/* Main content */}
			<div className="relative z-10 min-h-screen flex items-center justify-center p-4">
				{/* Sign up form container with glassmorphism effect */}
				<div className="w-full max-w-md">
					<div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 shadow-2xl">
						{/* Sign up title */}
						<h1 className="text-4xl font-grotesk font-light text-white text-center mb-10">
							Sign Up
						</h1>

						{/* Sign up form */}
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Full Name field */}
							<div className="relative">
								<input
									type="text"
									name="fullName"
									value={formData.fullName}
									onChange={handleInputChange}
									placeholder="Full Name"
									required
									className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
								/>
							</div>

							{/* Email field */}
							<div className="relative">
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="Email"
									required
									className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
								/>
							</div>

							{/* Username field */}
							<div className="relative">
								<input
									type="text"
									name="username"
									value={formData.username}
									onChange={handleInputChange}
									placeholder="Username"
									required
									className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
								/>
							</div>

							{/* Password field */}
							<div className="relative">
								<input
									type="password"
									name="password"
									value={formData.password}
									onChange={handleInputChange}
									placeholder="Password"
									required
									className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
								/>
							</div>

							{/* Confirm Password field */}
							<div className="relative">
								<input
									type="password"
									name="confirmPassword"
									value={formData.confirmPassword}
									onChange={handleInputChange}
									placeholder="Confirm Password"
									required
									className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
								/>
							</div>

							{/* Terms agreement checkbox */}
							<div className="flex items-start pt-4">
								<label className="flex items-start cursor-pointer">
									<input
										type="checkbox"
										name="agreeToTerms"
										checked={formData.agreeToTerms}
										onChange={handleInputChange}
										required
										className="sr-only"
									/>
									<div className="w-5 h-5 border-2 border-white border-opacity-70 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
										{formData.agreeToTerms && (
											<div className="w-3 h-3 bg-white rounded"></div>
										)}
									</div>
									<span className="text-white text-opacity-90 text-sm leading-relaxed">
										I agree to the{" "}
										<button
											onClick={() => navigate("/terms")}
											type="button"
											className="underline hover:text-opacity-100 transition-opacity duration-200"
										>
											Terms of Service
										</button>{" "}
										and{" "}
										<button
											onClick={() => navigate("/privacy-policy")}
											type="button"
											className="underline hover:text-opacity-100 transition-opacity duration-200"
										>
											Privacy Policy
										</button>
									</span>
								</label>
							</div>

							{/* Sign up button */}
							<div className="pt-6">
								<button
									type="submit"
									className="w-full bg-white bg-opacity-90 text-secondary2 font-grotesk font-medium py-4 rounded-2xl text-lg hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
								>
									Sign Up
								</button>
							</div>
						</form>

						{/* Login link */}
						<div className="text-center mt-8">
							<p className="text-white text-opacity-90 text-sm">
								Already have an account?{" "}
								<button
									onClick={() => navigate("/sign-in")}
									className="text-white text-opacity-75 font-grotesk font-medium hover:underline hover:text-opacity-100 transition-opacity duration-200"
								>
									Sign In
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
