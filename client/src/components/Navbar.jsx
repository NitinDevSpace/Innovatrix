import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, CircleUserRound, Menu, X } from "lucide-react"; // Hamburger menu and close icons
import { Link, useNavigate } from "react-router-dom"; // For navigation
import logo from "../assets/logo.png";
import { useAuthStore } from "../zustand/store";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [profile, setProfile] = useState(false);
	const profileRef = useRef(null);
	const { signedIn, signIn, signOut } = useAuthStore();
	const navigate = useNavigate();

	function handleProfile() {
		if (!signedIn) {
			navigate("/sign-in");
			return;
		}
		setProfile(!profile);
	}

	function getTokenFromCookies() {
		const match = document.cookie.match(new RegExp("(^| )token=([^;]+)"));
		return match ? match[2] : null;
	}

	useEffect(() => {
		const token = getTokenFromCookies();
		if (token) {
			signIn(); // Update Zustand store
		}
	}, []);

	useEffect(() => {
		if (!profile) return; // Only run when dropdown is open

		function handleClickOutside(event) {
			// If click happens outside of the profile button + dropdown
			if (profileRef.current && !profileRef.current.contains(event.target)) {
				setProfile(false); // close the dropdown
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup when dropdown closes or component unmounts
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [profile]);

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link
							to="/"
							className="flex gap-2 items-center text-2xl font-grotesk font-bold text-secondary2 hover:scale-105 hover:text-primary"
						>
							<img
								className="w-12 scale-125 rounded-full"
								src={logo}
								alt="Logo - A bulb with codes to represent Innovation related to coding"
							/>
							Innovatrix
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-8 items-center">
						<Link
							to="/about"
							className="text-secondary2 hover:scale-105 hover:text-primary font-medium font-grotesk"
						>
							About
						</Link>
						<Link
							to="/organizers"
							className="text-secondary2 hover:scale-105 hover:text-primary font-medium font-grotesk"
						>
							For Organizers
						</Link>
						<Link
							to="/builders"
							className="text-secondary2 hover:scale-105 hover:text-primary font-medium font-grotesk"
						>
							For Builders
						</Link>
						<Link
							to="/kanban"
							className="text-secondary2 hover:scale-105 hover:text-primary font-medium font-grotesk"
						>
							Kanban
						</Link>
						<button
							ref={profileRef}
							className="relative flex flex-col justify-center items-center text-secondary2"
						>
							<div
								onClick={handleProfile}
								className="flex gap-2 items-center  hover:scale-105 hover:text-primary font-medium font-grotesk"
							>
								<CircleUserRound />
								{signedIn ? (
									<>
										Name
										{profile ? <ChevronUp /> : <ChevronDown />}
									</>
								) : (
									"Sign In"
								)}
							</div>
							{/* Profule Drawer */}
							{profile && (
								<div className="absolute top-full mt-2 bg-white w-44 p-4 flex flex-col gap-3 font-grotesk rounded shadow-md z-50">
									<button
										onClick={() => {
											navigate("/profile");
										}}
										className="hover:scale-105 hover:text-primary"
									>
										Profile
									</button>
									<button
										onClick={() => {
											signOut();
											navigate("/");
											setProfile(false);
										}}
										className="hover:scale-105 hover:text-primary"
									>
										Sign Out
									</button>
								</div>
							)}
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-secondary2 hover:scale-105 hover:text-primary focus:outline-none"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-md px-4">
					<Link
						to="/about"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:scale-105 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
					<Link
						to="/organizers"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:scale-105 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						For Organizers
					</Link>
					<Link
						to="/builders"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:scale-105 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						For Builders
					</Link>
					<Link
						to="/kanban"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:scale-105 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						Kanban
					</Link>
					<Link
						to="/community"
						className="block px-4 py-2 text-secondary2 hover:bg-indigo-50 hover:scale-105 hover:text-primary"
						onClick={() => setIsOpen(false)}
					>
						Join Community
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
