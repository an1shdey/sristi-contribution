"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

type AnimationType = "slideUp" | "slideDown" | "scale" | "slideLeft" | "slideRight";

interface AnimatedProps extends Omit<HTMLMotionProps<"div">, "onDrag"> {
	children: ReactNode;
	type?: AnimationType;
	hover?: boolean;
	initialDelay?: number; // in seconds
	animateOnView?: boolean;
	viewportOnce?: boolean; // animate only once
}

const variantsMap: Record<AnimationType, Variants> = {
	slideUp: {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
		hover: { scale: 1.03 },
	},
	slideDown: {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0 },
		hover: { scale: 1.03 },
	},
	slideLeft: {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0 },
		hover: { scale: 1.03 },
	},
	slideRight: {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
		hover: { scale: 1.03 },
	},
	scale: {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
		hover: { scale: 1.05 },
	},
};

export const Animated: React.FC<AnimatedProps> = ({
	children,
	type = "scale",
	hover = false,
	initialDelay = 0,
	animateOnView = false,
	viewportOnce = true,
	...props
}) => {
	const variants = variantsMap[type];

	return (
		<motion.div
			{...props}
			initial="hidden"
			animate={animateOnView ? undefined : "visible"}
			whileHover={hover ? "hover" : undefined}
			whileInView={animateOnView ? "visible" : undefined}
			viewport={{ once: viewportOnce, amount: 0.2 }}
			variants={variants}
			transition={{ duration: 0.6, delay: initialDelay }}
		>
			{children}
		</motion.div>
	);
};
