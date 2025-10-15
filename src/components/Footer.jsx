import React from "react";
import { Heart, Instagram, Facebook, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
	return (
		<footer className="bg-secondary2 p-4 text-accent2 ">
			{/* Top section: Logo + Links */}
			<div className="lg:max-w-[100rem] mx-auto px-4 py-10 sm:px-6 lg:px-8">
				<div className="flex justify-between items-start md:items-center">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link
							to="/"
							className="flex gap-6 items-center text-2xl font-grotesk font-bold text-white hover:scale-105 hover:text-accent1"
						>
							<img
								className="w-12 scale-125 rounded"
								src={logo}
								alt="Logo - A bulb with codes to represent Innovation related to coding"
							/>
							Innovatrix
						</Link>
					</div>

					{/* Navigation links */}
					<div className="flex flex-col md:flex-row space-y-2 mr-16 md:mr-0 font-grotesk md:space-y-0 md:space-x-8">
						<Link to="/about" className="hover:text-accent1 font-medium">
							About
						</Link>
						<Link
							to="/organizers"
							className="hover:text-accent1 font-medium"
						>
							For Organizers
						</Link>
						<Link to="/builders" className="hover:text-accent1 font-medium">
							For Builders
						</Link>
						<Link to="/kanban" className="hover:text-accent1 font-medium">
							Kanban
						</Link>
					</div>
				</div>

				{/* Divider */}
				<hr className="my-6 border-gray-700" />

				{/* Bottom section */}
				<div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
					<div className="mb-2 md:mb-0 flex space-x-4">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accent1"
							aria-label="Instagram"
						>
							<Instagram className="w-5 h-5" />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accent1"
							aria-label="Twitter"
						>
							<TwitterIcon className="w-5 h-5" />
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accent1"
							aria-label="Facebook"
						>
							<Facebook className="w-5 h-5" />
						</a>
					</div>
					<div className="mb-2 md:mb-0 flex justify-center flex-1">
						<div className="flex items-center space-x-1">
							<span>Built with React & </span>
							<Heart className="w-4 h-4 text-purple-500" />
						</div>
					</div>
					<div className="mb-2 md:mb-0">
						<Link to="/privacy" className="hover:text-accent1">
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
