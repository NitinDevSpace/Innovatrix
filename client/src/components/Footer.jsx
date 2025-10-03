import React from "react";
import { Heart, Instagram, Facebook, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-200 mt-10">
			{/* Top section: Logo + Links */}
			<div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center">
					{/* Logo */}
					<div className="mb-6 md:mb-0">
						<Link
							to="/"
							className="text-2xl font-bold text-indigo-500 hover:text-indigo-400"
						>
							Hackon
						</Link>
					</div>

					{/* Navigation links */}
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
						<Link to="/about" className="hover:text-indigo-400 font-medium">
							About
						</Link>
						<Link
							to="/organizers"
							className="hover:text-indigo-400 font-medium"
						>
							For Organizers
						</Link>
						<Link to="/builders" className="hover:text-indigo-400 font-medium">
							For Builders
						</Link>
						<Link to="/kanban" className="hover:text-indigo-400 font-medium">
							Kanban
						</Link>
						<Link to="/community" className="hover:text-indigo-400 font-medium">
							Join Community
						</Link>
					</div>
				</div>

				{/* Divider */}
				<hr className="my-6 border-gray-700" />

				{/* Bottom section */}
				<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
					<div className="mb-2 md:mb-0 flex space-x-4">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-indigo-400"
							aria-label="Instagram"
						>
							<Instagram className="w-5 h-5" />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-indigo-400"
							aria-label="Twitter"
						>
							<TwitterIcon className="w-5 h-5" />
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-indigo-400"
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
						<Link to="/privacy" className="hover:text-indigo-400">
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
