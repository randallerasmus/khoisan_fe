// pages/page.tsx
import React from 'react';

import '@/app/components/Home.css';
import NavBar from "@/app/components/NavBar";
import Tile from "@/app/components/Tile"; // Optional: create a Home.css for additional styling

const Page: React.FC = () => {
    const tilesData = [
        {
            title: 'First Blog Post',
            description: 'This is a brief description of the first blog post.',
            imageUrl: 'https://via.placeholder.com/300', // Replace with your image URL
        },
        {
            title: 'Second Blog Post',
            description: 'This is a brief description of the second blog post.',
            imageUrl: 'https://via.placeholder.com/300', // Replace with your image URL
        },
        {
            title: 'Third Blog Post',
            description: 'This is a brief description of the third blog post.',
            imageUrl: 'https://via.placeholder.com/300', // Replace with your image URL
        },
        // Add more tiles as needed
    ];

    return (
        <div>
            <NavBar />
            <div className="tiles-container">
                {tilesData.map((tile, index) => (
                    <Tile
                        key={index}
                        title={tile.title}
                        description={tile.description}
                        imageUrl={tile.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
