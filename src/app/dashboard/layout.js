import Layout from "@/app/components/Layout";
import Navigation from "@/app/components/Navigation";
import * as React from "react";
import ColorScheme from "@/app/components/ColorScheme";
import ThemeRegistry from "@/app/ThemeRegistry";
import Header from "@/app/components/Header";
import PrivateRoute from "../components/PrivateRoute";

export const metadata = {
	title: "Desa Cantik : Margoagung",
	description: "Desa Cantik Margoagung Kabupaten Sleman",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry options={{ key: "joy" }}>
					<Layout.Root
						sx={{
							gridTemplateColumns: {
								xs: "1fr",
								md: "minmax(160px, 260px) minmax(600px, 1fr)",
							},
						}}
					>
						<PrivateRoute>
							<Header>
								<ColorScheme />
							</Header>
							<Layout.SideNav>
								<Navigation />
							</Layout.SideNav>
							<Layout.Main>{children}</Layout.Main>
						</PrivateRoute>
					</Layout.Root>
				</ThemeRegistry>
			</body>
		</html>
	);
}
