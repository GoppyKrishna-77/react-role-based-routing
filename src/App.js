import { Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";

import AdminDB from "./pages/AdminDB";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";

const ROLES = {
	User: 0,
	Member: 1,
	Admin: 2,
};
function App() {
	return (
		<>
			<Routes path="/" elements={<Layout />}>
				{/* Public Routes */}
				<Route path="admin" element={<AdminLogin />} />

				<Route path="/" element={<Home />} />

				{/* Protected Routes */}
				<Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
					<Route path="admin-db" element={<AdminDB />} />
				</Route>

				{/* Catch All */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
