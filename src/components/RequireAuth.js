import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();
	console.log("verified");
	console.log(auth.roles);

	return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : (
		<Navigate to="/admin" state={{ from: location }} replace />
	);
};

export default RequireAuth;
