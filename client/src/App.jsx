import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import KanbanBoard from "./pages/KanbanBoard";
import Organizers from "./pages/Organizers";
import Builders from "./pages/Builders";
import Community from "./pages/Community";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/organizers" element={<Organizers />} />
				<Route path="/builders" element={<Builders />} />
				<Route path="/kanban" element={<KanbanBoard />} />
				<Route path="/community" element={<Community />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
