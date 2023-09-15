"use client";
import { auth } from "../services/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthRoute = ({ children }) => {
	const router = useRouter();
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	if (loading) {
		return <></>;
	}
	if (currentUser) {
		router.push("/dashboard");
	} else {
		return <>{children}</>;
	}
};
export default AuthRoute;
