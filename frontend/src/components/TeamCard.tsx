'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export interface Team {
    name: string;
    designation: string;
    image: string;      
}

interface TeamCardProps {
    team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    return (
        <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Team Member Image*/}
            <motion.div
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
            >
                <Image
                    src={team.image}
                    alt={team.name}
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Team Content */}
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">{team.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{team.designation}</p>
            </div>
        </motion.div>
    );
};

export default TeamCard;
