import React from "react";

function RecentEvents() {
	const events = [
		{
			id: 1,
			title: "AI Innovators Hackathon",
			description:
				"Build cutting-edge AI tools to solve global challenges. Compete for prizes and mentorship from top tech leaders.",
			image: "https://challengerocket.com/files/oghackathon2024b.png?png",
		},
		{
			id: 2,
			title: "GreenTech Challenge",
			description:
				"Design sustainable solutions using technology to tackle climate change, waste, and energy challenges.",
			image:
				"https://ims.greentechchallenge.gr/wp-content/uploads/2020/09/1600848782-GREENTECH_640_420.jpg",
		},
		{
			id: 3,
			title: "FinTech Future Sprint",
			description:
				"Reimagine banking, finance, and payments through innovation, open APIs, and real-world challenges.",
			image:
				"https://www.ncr.org.za/images/Revised%20TechSprint%20Page%20Banner_v1.jpg",
		},
		{
			id: 4,
			title: "HealthHack 2025",
			description:
				"Collaborate with healthcare experts to create digital health solutions improving patient outcomes.",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYHriDCzhSB-ZSZ0HmDEPN3TVGIjO_KmuwA&s",
		},
		{
			id: 5,
			title: "Women in Tech Hackathon",
			description:
				"Empowering women innovators to lead the next wave of inclusive technology solutions.",
			image:
				"https://paconsulting.imgix.net/assets/hero/WiT-Hero-2500x1250.jpg?auto=format&crop=focalpoint&domain=paconsulting.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=511&ixlib=php-3.3.1&q=82&w=1023&s=24173667ec3119bd570bba72d22a87a9",
		},
		{
			id: 6,
			title: "EduHack Global",
			description:
				"Transform education through technology — build tools that make learning accessible to everyone.",
			image:
				"https://cdn.romania-insider.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-11/eduhack_2022_-_photo_pr.png",
		},
		{
			id: 7,
			title: "CyberDefence Challenge",
			description:
				"Protect the digital world by developing innovative cybersecurity tools and solutions.",
			image:
				"https://media.licdn.com/dms/image/v2/D5612AQHRikbl_zcitg/article-cover_image-shrink_720_1280/B56Zday8AnH8AM-/0/1749574993538?e=2147483647&v=beta&t=Zgv7LDsEMa12okmPtZV1BCuTa8m5iAq78DpgHxg2AlE",
		},
		{
			id: 8,
			title: "SmartCity Hack",
			description:
				"Shape the future of urban living with IoT, data, and sustainability-driven innovations.",
			image:
				"https://www.sectigo.com/uploads/resource-images/ConnectedCity_with-Locks-LI.png",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-6 py-8">
			<h2 className="text-3xl font-semibold mb-6">Recent Events</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-12 md:p-0 lg:grid-cols-4 gap-6">
				{events.map(({ id, title, description, image }) => (
					<div
						key={id}
						className="bg-white rounded-lg shadow-md overflow-hidden"
					>
						<img src={image} alt={title} className="w-full h-44 object-cover" />
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">{title}</h3>
							<p className="text-gray-600 text-sm">{description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default RecentEvents;
