"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Events", path: "/events" },
	{ name: "Teams", path: "/organizing_team" },
	{ name: "Contact", path: "/contact" },
] as const;

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<nav className="sticky top-0 z-50 bg-slate-900/80 shadow-lg backdrop-blur-md">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				{/* Logo */}
				<Link
					href="/"
					className="text-2xl font-extrabold tracking-tight text-amber-400 transition hover:text-amber-300"
				>
					SRISTI
				</Link>

				{/* Desktop Nav */}
				<ul className="hidden items-center gap-8 md:flex">
					{navItems.map((item) => {
						const isActive = pathname === item.path;
						return (
							<li key={item.path}>
								<Link
									href={item.path}
									className={`relative font-medium transition-colors duration-300 ${
										isActive
											? "text-blue-400"
											: "text-slate-200 hover:text-blue-300"
									}`}
								>
									{item.name}
									{/* underline indicator for active link */}
									{isActive && (
										<motion.span
											layoutId="active-underline"
											className="absolute -bottom-1 left-0 h-[2px] w-full bg-blue-500"
										/>
									)}
								</Link>
							</li>
						);
					})}
				</ul>

				{/* Mobile menu toggle */}
				<button
					onClick={toggleMenu}
					aria-label="Toggle menu"
					className="rounded p-2 text-slate-200 transition hover:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none md:hidden"
				>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="overflow-hidden bg-slate-900/95 shadow-md md:hidden"
					>
						<ul className="flex flex-col gap-4 px-6 py-4">
							{navItems.map((item) => {
								const isActive = pathname === item.path;
								return (
									<li key={item.path}>
										<Link
											href={item.path}
											onClick={() => setIsMenuOpen(false)}
											className={`block rounded px-2 py-1 font-medium transition ${
												isActive
													? "text-blue-400"
													: "text-slate-200 hover:bg-slate-800 hover:text-blue-300"
											}`}
										>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
