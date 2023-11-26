import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import ScrollToTop from "hooks/ScrollToTop";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const SecondaryNav = lazy(() => import("./components/Secondary_Nav"));

const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const Blog = lazy(() => import("./pages/Blog"));

function App() {
	return (
		<HashRouter>
			<Suspense fallback={<></>}>
				<Header />
				<SecondaryNav />
				<ScrollToTop />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/project" element={<Project />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="*" element={<Navigate to="/home" />} />
				</Routes>
				<Footer />
			</Suspense>
		</HashRouter>
	);
}

export default App;
