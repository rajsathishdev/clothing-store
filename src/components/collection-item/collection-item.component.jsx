import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({imageUrl, price, name}) => {
    return (
        <div class="collection-item">
            <div class="image" style={{backgroundImage: `url(${imageUrl})`}}>

            </div>
            <div class="collection-footer">
                <div class="name">{name }</div>
                <div class="price">{price}</div>
            </div>
        </div>
    );
}

export default CollectionItem;