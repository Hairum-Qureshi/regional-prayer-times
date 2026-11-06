import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page from "../pages/Page";
import NotFound from "../pages/NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/page" element={<Page />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
