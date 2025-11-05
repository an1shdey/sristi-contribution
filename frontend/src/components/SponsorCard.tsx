'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export interface Sponsor {
    image: string;
    tier: "Title Sponsors" | "Tech Sponsors" | "Food Sponsors";
}

interface SponsorCardProps {
    sponsor: Sponsor;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
    return (
        <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Sponsor Image */}
            <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-64 h-40 overflow-hidden rounded-2xl border-4 border-gray-700 bg-white shadow-lg flex items-center justify-center"
            >
                <Image
                    src={sponsor.image}
                    alt={sponsor.tier}
                    fill
                    className="object-contain p-4"
                />
            </motion.div>
        </motion.div>
    );
};

export default SponsorCard;
