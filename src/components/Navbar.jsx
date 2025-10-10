import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, CircleUserRound, Menu, X } from "lucide-react"; // Hamburger menu and close icons
import { Link, useNavigate } from "react-router-dom"; // For navigation
import logo from "../assets/logo.png";
import { useAuthStore } from "../zustand/store";
import { SignOutRequest } from "../services/user";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [profile, setProfile] = useState(false);
	const profileRef = useRef(null);
	const { signedIn, signOut, user } = useAuthStore();
	const navigate = useNavigate();

	function handleProfile() {
		if (!signedIn) {
			navigate("/sign-in");
			return;
		}
		setProfile(!profile);
	}

	async function handleSignout() {
		const response = await SignOutRequest();
		signOut();
		navigate("/");
		setProfile(false);
	}

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
		<nav className="bg-white shadow-md overflowx-hidden sticky top-0 z-50">
			<div className="lg:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
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
										{user.data.fullName}
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
										onClick={handleSignout}
										className="hover:scale-105 hover:text-red-500"
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
							className="text-secondary2 focus:outline-none"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="flex flex-col absolute right-0 font-grotesk md:hidden bg-white shadow-md px-4">
					<Link
						to="/about"
						className="block px-4 py-2 text-secondary2"
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
					<Link
						to="/organizers"
						className="block px-4 py-2 text-secondary2"
						onClick={() => setIsOpen(false)}
					>
						For Organizers
					</Link>
					<Link
						to="/builders"
						className="block px-4 py-2 text-secondary2"
						onClick={() => setIsOpen(false)}
					>
						For Builders
					</Link>
					<Link
						to="/kanban"
						className="block px-4 py-2 text-secondary2"
						onClick={() => setIsOpen(false)}
					>
						Kanban
					</Link>
					<button
						ref={profileRef}
						className="flex w-full flex-col px-4 py-2  text-secondary2"
					>
						<div
							onClick={handleProfile}
							className="flex gap-2 items-center w-full  font-medium font-grotesk"
						>
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
							<div className="absolute top-full right-0  bg-white w-44 px-8 py-2 flex flex-col items-start gap-3 font-grotesk rounded shadow-md z-50">
								<button
									onClick={() => {
										navigate("/profile");
									}}
								>
									Profile
								</button>
								<button
									onClick={() => {
										signOut();
										navigate("/");
										setProfile(false);
									}}
									className="text-red-500"
								>
									Sign Out
								</button>
							</div>
						)}
					</button>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
