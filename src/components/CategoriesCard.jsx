import React from 'react';
import "../sections/Categories/Categories.css";

const CategoriesCard = ({ imgURL, title }) => {
    return (
        <div className="categories-card">
            <img src={imgURL} alt={title} />
            <h4>{title}</h4>
        </div>
    );
};

export default CategoriesCard;