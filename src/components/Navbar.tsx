import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between bg-black px-6 py-4 text-white">
			<span className="text-xl font-semibold">website-name</span>
			<div className="flex gap-6">
				<Link to="/" className="flex items-center gap-2 hover:underline">
					Home
				</Link>
				<Link to="/page" className="flex items-center gap-2 hover:underline">
					Page
				</Link>
			</div>
		</nav>
	);
}
