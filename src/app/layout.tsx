import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Suspense, type PropsWithChildren } from "react";
import { OverlayProvider, QueryProvider } from "@/provider";
import './globals.css';

export const metadata: Metadata = {
	title: "3Legant",
	description: "Інтернет-магазин подарунків і декору",
};

const geistPoppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
	variable: "--font-poppins",
});

const geistInter = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["200", "300", "400", "500", "600", "700"],
	variable: "--font-inter",
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {

	return (
		<html lang='uk'>
			<body
				className={`${geistPoppins.variable} ${geistInter.variable} antialiased`}
			>
				<Suspense>
					<QueryProvider>
						<OverlayProvider>{children}</OverlayProvider>
					</QueryProvider>
				</Suspense>
			</body>
		</html>
	);
}
