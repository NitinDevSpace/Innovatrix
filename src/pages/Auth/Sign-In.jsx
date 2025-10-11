import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, SignInRequest } from "../../services/user";
import { useAuthStore } from "../../zustand/store";

const SignIn = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		rememberMe: false,
	});

	const { signIn } = useAuthStore();

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await SignInRequest(formData);
		if (response.status == 200) {
			const user = await getUserDetails();
			if (user) signIn(user);
			navigate("/");
		}
	};

	return (
		<div className="min-h-screen relative overflow-hidden bg-cover bg-center">
			{/* Background image */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage:
						// "url('https://img.freepik.com/free-vector/3d-style-black-background-with-paper-layer_206725-669.jpg?semt=ais_hybrid&w=740&q=80')",
						"url('https://t3.ftcdn.net/jpg/03/64/76/22/360_F_364762217_G4bMaSfMBuwgjawubHlxJqyt1SG2gJ5n.jpg')",
				}}
			>
				{/* optional: reduced opacity */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
			</div>
			{/* Main content */}
			<div className="relative z-10 min-h-screen flex items-center justify-center p-4">
				{/* Sign In form container with glassmorphism effect */}
				<div className="w-full max-w-md">
					<div className="bg-white bg-opacity-10 backdrop-blur-2xl border-2 border-white rounded-3xl p-8 shadow-2xl">
						{/* Sign In title */}
						<h1 className="text-4xl font-grotesk font-light text-white text-center mb-12">
							Sign In
						</h1>

						{/* Sign In form */}
						<form onSubmit={handleSubmit} className="space-y-8">
							{/* Username field */}
							<div className="relative">
								<input
									type="text"
									name="username"
									autoComplete="username"
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
									autoComplete="current-password"
									value={formData.password}
									onChange={handleInputChange}
									placeholder="Password"
									required
									className="w-full bg-transparent border-b-2 border-white border-opacity-50 pb-3 text-white placeholder-white placeholder-opacity-80 text-lg focus:outline-none focus:border-white transition-colors duration-300"
								/>
							</div>

							{/* Remember me and Forgot password */}
							<div className="flex items-center justify-between pt-4">
								<label className="flex items-center cursor-pointer">
									<input
										type="checkbox"
										name="rememberMe"
										checked={formData.rememberMe}
										onChange={handleInputChange}
										className="sr-only"
									/>
									<div className="w-5 h-5 border-2 border-white border-opacity-70 rounded flex items-center justify-center mr-3">
										{formData.rememberMe && (
											<div className="w-3 h-3 bg-white rounded"></div>
										)}
									</div>
									<span className="text-white text-opacity-90 text-sm">
										Remember me
									</span>
								</label>

								<button
									onClick={() => navigate("/reset-password")}
									type="button"
									className="text-white text-opacity-90 text-sm hover:text-opacity-100 transition-opacity duration-200"
								>
									Forgot Password?
								</button>
							</div>

							{/* Sign In button */}
							<div className="pt-6">
								<button
									type="submit"
									className="w-full font-grotesk bg-white bg-opacity-90 text-gray-800 font-medium py-4 rounded-2xl text-lg hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
								>
									Sign In
								</button>
							</div>
						</form>

						{/* Register link */}
						<div className="text-center mt-8">
							<p className="text-white text-opacity-90 text-sm">
								Don't have an account?{" "}
								<button
									onClick={() => navigate("/sign-up")}
									className="text-white text-opacity-75 font-grotesk font-bold hover:underline hover:text-opacity-100 transition-opacity duration-200"
								>
									Sign Up
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
