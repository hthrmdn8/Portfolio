import React from 'react';
import '../styles/projectCard.css'

interface CardData {
    title: string;
    description: string;
    finished: boolean;
    url: URL;
    id: number;
}

interface CardProps {
    data: CardData;
}

const ProjectCard: React.FC<CardProps> = ({ data }) => {
    const { title, description, finished, url, id } = data;

    return (
        <div className="card">
            {/* <img src={url.toString()} alt={title} className="card-image" /> */}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-status">{finished ? 'Finished' : 'In Progress'}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
