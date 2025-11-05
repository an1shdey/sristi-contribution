"use client";

import { useState } from "react";
import TeamCard, { Team } from "../../components/TeamCard";
import { Animated } from "@/Utils/Animation";
import Navbar from "../../components/Navbar";

function TeamMembers() {
	// 🎯 Team Data

	const teachers: Team[] = [
        // Row 1
        { name: "Teacher", designation: "Member", image: "/Teams/teacher.jpg" },
        { name: "Teacher", designation: "Member", image: "/Teams/teacher.jpg" },
        { name: "Teacher", designation: "Member", image: "/Teams/teacher.jpg" },
        { name: "Teacher", designation: "Member", image: "/Teams/teacher.jpg" },
        { name: "Teacher", designation: "Member", image: "/Teams/teacher.jpg" },

        // Row 2
        { name: "Teacher", designation: "Member", image: "/Teams/teacher.jpg" },
        { name: "Teacher", designation: "Member", image: "/Teams/teacher.jpg" },
	];

    const students: Team[] = [
        // Row 1
        { name: "Anish Dey", designation: "Nothing", image: "/Teams/anish.jpg" },
        { name: "Student", designation: "Member", image: "/Teams/student.jpg" },
        { name: "Student", designation: "Member", image: "/Teams/student.jpg" },
        { name: "Student", designation: "Member", image: "/Teams/student.jpg" },
        { name: "Student", designation: "Member", image: "/Teams/student.jpg" },

        // Row 2
        { name: "Student", designation: "Member", image: "/Teams/student.jpg" },
        { name: "Student", designation: "Member", image: "/Teams/student.jpg" },
        { name: "Student", designation: "Member", image: "/Teams/student.jpg" },
        { name: "Student", designation: "Member", image: "/Teams/student.jpg" },
	];

    const categories = ["All", "Teachers Team", "Students Team"];

	const [selectedCategory, setSelectedCategory] = useState<string>("All");

	const filteredEvents =
		selectedCategory === "All"
			? [...teachers, ...students]
			: selectedCategory === "Teachers Team"
			? teachers
			: students;


    return (
        <>
            <Navbar /> {/* 👈 Navbar added here */}

		<main className="min-h-screen px-6 py-16">
			<div className="mx-auto max-w-7xl text-center">
				<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
					✨ Our Team Members
				</h1>
				<p className="mt-4 text-lg text-gray-300">
					Discover competitions, workshops, and seminars at{" "}
					<span className="font-semibold text-indigo-400">SRISTI Techfest</span>.
				</p>
			</div>

			{/* 🔹 Category Filter */}
			<div className="mt-10 flex flex-wrap justify-center gap-3">
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => setSelectedCategory(cat)}
						className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
							selectedCategory === cat
								? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
								: "border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
						}`}
					>
						{cat}
					</button>
				))}
			</div>

			{/* 🔹 Team Grid */}
            <div className="mx-auto mt-14 max-w-7xl space-y-20">
                {selectedCategory === "All" ? (
                    <>
                        {/* Teachers Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">👩‍🏫 Teachers Team</h2>

                            <div className="flex flex-wrap justify-center gap-8">
                                {teachers.map((team, index) => (
                                    <div
                                        key={`teacher-${index}`}
                                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center"
                                    >
                                        <Animated
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            <TeamCard team={team} />
                                        </Animated>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Students Section */}
                        <div className="mt-20">
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">🎓 Students Team</h2>

                            <div className="flex flex-wrap justify-center gap-8">
                                {students.map((team, index) => (
                                    <div
                                        key={`student-${index}`}
                                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center"
                                    >
                                        <Animated
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            <TeamCard team={team} />
                                        </Animated>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-wrap justify-center gap-8">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((team, index) => (
                                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center">
                                    <Animated
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        <TeamCard team={team} />
                                    </Animated>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-400">
                                No events found in this category.
                            </p>
                        )}
                    </div>
                )}
            </div>
		</main>
        
        </>
	);
}

export default TeamMembers;
