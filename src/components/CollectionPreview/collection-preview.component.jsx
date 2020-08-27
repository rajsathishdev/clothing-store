import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({id, title, items}) => {
    console.log(items);
    return (
        <div className="collection-preview">
            {
                items.map((item) => {
                    return <h1 key={item.id}>{item.name }</h1>
                })
            }
        </div>
    );
}

export default CollectionPreview;