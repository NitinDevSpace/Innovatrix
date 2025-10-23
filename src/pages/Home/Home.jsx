import Hero from "./Hero";
import Strip from "./Strip";
import RecentEvents from "./RecentEvents";
import Innovations from "./Innovations";
import Testimonials from "./Testimonials";
import JoinCommunity from "./JoinCommunity";
import Filler from "./Filler";

function Home() {
	return (
		<div className="overflow-hidden">
			<section>
				<Hero />
			</section>
			<section className="bg-accent3">
				<Strip />
			</section>
			<section>
				<RecentEvents />
			</section>
			<section>
				<Filler />
			</section>
			<section>
				<Innovations />
			</section>
			<section>
				<Testimonials />
			</section>
			<section>
				<JoinCommunity />
			</section>
		</div>
	);
}

export default Home;
