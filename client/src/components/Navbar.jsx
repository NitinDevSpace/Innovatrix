import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger menu and close icons
import { Link } from "react-router-dom"; // For navigation

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link
							to="/"
							className="text-2xl font-bold text-gray-800 hover:text-indigo-600"
						>
							Hackon
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-8 items-center">
						<Link
							to="/organizers"
							className="text-gray-700 hover:text-indigo-600 font-medium"
						>
							For Organizers
						</Link>
						<Link
							to="/builders"
							className="text-gray-700 hover:text-indigo-600 font-medium"
						>
							For Builders
						</Link>
						<Link
							to="/kanban"
							className="text-gray-700 hover:text-indigo-600 font-medium"
						>
							Kanban
						</Link>
						<Link
							to="/community"
							className="text-gray-700 hover:text-indigo-600 font-medium"
						>
							Join Community
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 hover:text-indigo-600 focus:outline-none"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-md">
					<Link
						to="/organizers"
						className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
						onClick={() => setIsOpen(false)}
					>
						For Organizers
					</Link>
					<Link
						to="/builders"
						className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
						onClick={() => setIsOpen(false)}
					>
						For Builders
					</Link>
					<Link
						to="/kanban"
						className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
						onClick={() => setIsOpen(false)}
					>
						Kanban
					</Link>
					<Link
						to="/community"
						className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
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
