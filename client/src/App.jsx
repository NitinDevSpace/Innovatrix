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
import SignIn from "./pages/Auth/Sign-In";
import SignUp from "./pages/Auth/Sign-Up";
import Profile from "./pages/Auth/Profile";

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
				<Route path="/profile" element={<Profile />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
