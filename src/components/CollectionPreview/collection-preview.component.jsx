import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => {
    console.log(items);
    return (
        <div className="collection-preview">
            <h1 className="title">
                { title.toUpperCase() }
            </h1>
            <div className="preview">
                {
                    items
                    .filter((item,idx)=> idx < 4)
                    .map((item) => {
                        return <h1 key={item.id}>{item.name }</h1>
                    })
                }
            </div>
            
        </div>
    );
}

export default CollectionPreview;