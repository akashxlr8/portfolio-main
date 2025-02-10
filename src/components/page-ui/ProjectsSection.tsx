import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'Neo4j Graph Chatbot Agent',
        link: 'https://github.com/akashxlr8/neo4j',
        thumbnail: '/projects/graphdb-chatbot.png'
    },
    {
        title: 'CSV visulaizer',
        link: 'https://github.com/akashxlr8/ravian3',
        thumbnail: '/projects/ravian3.gif'
    },
    {
        title: 'CSV visulaizer bot',
        link: 'https://github.com/akashxlr8/ravian2',
        thumbnail: '/projects/ravian2.png'
    },

    {
        title: 'Dash Visualization',
        link: 'https://github.com/akashxlr8/ravian1',
        thumbnail: '/projects/dash app.gif'
    }
];
