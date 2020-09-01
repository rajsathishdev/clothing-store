import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../CollectionItem/collection-item.component';

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
                    .map(({id, ...otherCollectionProps}) => {
                        return <CollectionItem key={id} {...otherCollectionProps} />
                    })
                }
            </div>
            
        </div>
    );
}

export default CollectionPreview;