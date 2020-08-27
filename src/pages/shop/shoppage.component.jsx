import React from 'react';

import CollectionPreview from '../../components/CollectionPreview/collection-preview.component';

import './shoppage.styles.scss';
import SHOP_DATA from '../../shop.data';


class ShopPage extends React.Component
{

    constructor(props) {
        super(props);
        this.state =  {
            collections : SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        
        return (
            <div className="shop-page">
                <h1>Shop Page</h1>
                {
                    collections.map(({id, ...otherCollectionProps}) => {
                     return   <CollectionPreview key={id} { ...otherCollectionProps} />
                    })
                }
            </div>
        )
    }
}

export default ShopPage;