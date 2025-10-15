import React from "react";
import { useNavigate } from "react-router-dom";

function JoinCommunity() {
	const naviagte = useNavigate();

	const features = [
		{
			title: "Networking Opportunities",
			description:
				"Connect with like-minded innovators and expand your professional network.",
			image:
				"https://cmscritic.com/ms-content/uploads/2023/08/top-social-networking-sites_wmysmq.jpg?format=auto&width=2048",
		},
		{
			title: "Innovative Ideas",
			description:
				"Be part of a community that fosters creativity and groundbreaking ideas.",
			image:
				"https://www.teachingtimes.com/wp-content/uploads/2018/01/Innovation2-scaled.jpg",
		},
		{
			title: "Learning Resources",
			description:
				"Access exclusive tutorials, webinars, and workshops to enhance your skills.",
			image:
				"https://img.freepik.com/free-vector/education-infographic-template_1212-123.jpg?semt=ais_hybrid&w=740&q=80",
		},
		{
			title: "Collaborative Projects",
			description:
				"Work together on exciting projects and bring your ideas to life.",
			image:
				"https://a.storyblok.com/f/99519/1100x619/66d49daabb/the-ultimate-guide-of-project-collaboration-blog__1_.png/m/2160x1216/filters:format(png)",
		},
		{
			title: "Mentorship Programs",
			description:
				"Get guidance from industry experts to accelerate your growth.",
			image:
				"https://www.aihr.com/wp-content/uploads/mentorship-programs-cover.png",
		},
	];

	return (
		<section className="bg-gradient-to-r from-primary via-secondary via-secondary2 to-secondary text-white py-16 px-6 md:px-16">
			<div className="max-w-7xl mx-auto text-center mb-12">
				<h2 className="text-4xl font-extrabold mb-4">
					Join the Innovatrix Community
				</h2>
				<p className="text-lg max-w-3xl mx-auto mb-6">
					Unlock opportunities for networking, innovation, learning, and
					collaboration by joining our vibrant community.
				</p>
			</div>
			<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{features.map(({ title, description, image }) => (
					<div
						key={title}
						className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 flex flex-col items-center"
					>
						<img
							src={image}
							alt={title}
							className="w-32 h-32 object-cover rounded-xl mb-4"
						/>
						<h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
						<p className="text-center text-sm">{description}</p>
					</div>
				))}
			</div>
			<div className="flex justify-center items-center mt-12">
				<button
					onClick={() => {
						naviagte("/builders");
					}}
					className="bg-white text-primary font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 hover:bg-accent3 transition-colors duration-300"
				>
					Join Community
				</button>
			</div>
		</section>
	);
}

export default JoinCommunity;
