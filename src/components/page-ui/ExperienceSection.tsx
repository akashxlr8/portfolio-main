'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Tata Consultancy Services',
        description: (
            <ul className="list-disc">
                <li>Developed a pioneering AI platform, implementing RAG and semantic caching for a major US Banking client.</li>
                <li>
                    Defined project scope, gathered requirements, and translated user needs into technical specifications, worked with platform
                    architects to help shape the whole application from scratch.
                </li>
                <li>
                    Used langchain, Openai, Croma Vector DB, Pydantic for structured outputs, Python for building robust AI solutions and enhancing
                    data processing capabilities.
                </li>
            </ul>
        ),
        badge: 'Generative AI Developer /Nov 2023 - Present'
    },
    {
        title: 'Stealth Startup',
        description: (
            <ul className="list-disc">
                <li>
                    Sole developer responsible for architecting, designing, and developing a multi-modal AI chatbot feature from start to finish while
                    ensuring scalability and performance enhancements for user engagement.
                </li>
                <li>
                    Implemented functionalities such as chat history management, text-to-sql tool, intent classification, image input, and parallel
                    processing of user queries to enhance user experience and performance.
                </li>
                <li>
                    Utilized LangGraph for multi-agent interactions, angchain pydantic models, OpenAI, FastAPI, PostgreSQL, and custom middleware
                    resulting in a live application with over 1500 active daily users.
                </li>
            </ul>
        ),
        badge: 'AI Engineer /Oct 2024 – Present'
    },

    {
        title: 'SAIL Steel Authority Of India Limited (Intenship)',
        description: (
            <ul className="list-disc">
                <li>Developed a program software that improved the efficiency of loading steel coils onto rail wagons.</li>
                <li>
                    Used Google OR Tools for optimization and optimized loading of over 9000 steel coils resulting in a 2 fold increase in efficiency.
                </li>
            </ul>
        ),
        badge: 'Python Developer/Jul 2022 - Aug 2022'
    }
];
