import React from "react";

function Strip() {
	const logos = [
		"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
		"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
		"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
		"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
		"https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
		"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
		"https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
		"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
		"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
		"https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
		"https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
		"https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
		"https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
		"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
		"https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
	];

	return (
		<div className="overflow-hidden bg-accent3 p-6 z-5">
			<div className="flex gap-24 animate-marquee">
				{[...logos, ...logos].map((url, i) => (
					<div
						key={i}
						className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
					>
						<img
							src={url}
							alt="partner Company logo"
							className="h-12 w-auto max-w-[120px] object-contain"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Strip;
