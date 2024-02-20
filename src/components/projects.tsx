"use client";
import styles from '@/styles/project.module.css';
import projectData from '@/json/projects.json';
import { Project } from '@/components/project';
import { useState } from 'react';
import { motion } from "framer-motion";

type Project = {
    title: string,
    description: string,
    image: string,
    year: string,
    url: string,
    tags?: string[],
}

export const Projects = () => {
    const projects: Project[] = projectData.data;
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(projects.length / 4);
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0, scale: 0.98 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    }


    const selectPage = async (action: "next" | "back") => {
        if (action === "next") {
            setCurrentPage(prevPage => prevPage + 1);
        } else {
            setCurrentPage(prevPage => prevPage - 1);
        }

        // scroll to #projects
        const projects = document.getElementById("projects");

        if (projects) {
            projects.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <>
            <div className={styles.project_pages}>
                <h3>
                    {
                        `${currentPage * 4 - 3}-${(currentPage * 4) > projects.length ? currentPage * 4 - (currentPage * 4 - projects.length) : currentPage * 4}`
                    } / {projects.length}
                </h3>

                <div className={styles.project_pages_nav}>
                    {
                        currentPage !== 1 &&
                        <button className='btn'
                            onClick={() => selectPage("back")}
                        >
                            Previous

                        </button>
                    }

                    {
                        currentPage !== pages &&
                        <button
                            className='btn'
                            onClick={() => selectPage("next")}
                        >
                            Next
                        </button>
                    }
                </div>
            </div>

            <div className={styles.projects}>

                {projects.map((project, index) => {
                    if (index < (currentPage - 1) * 4 || index >= currentPage * 4) return null;
                    return (
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            key={index}
                            transition={{ type: "ease-in", duration: 0.3 }}
                        >
                            <Project url={project.url} title={project.title} description={project.description} image={project.image} year={project.year}
                                tags={project.tags}
                            />
                        </motion.div>
                    )
                })}
            </div>

        </>
    )
}
