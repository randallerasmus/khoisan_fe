// components/Tile.tsx
import React from 'react';
import './Tile.css';

interface TileProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Tile: React.FC<TileProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="tile">
            <img src={imageUrl} alt={title} className="tile-image" />
            <h2 className="tile-title">{title}</h2>
            <p className="tile-description">{description}</p>
        </div>
    );
};

export default Tile;
