import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'assets/images/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'assets/images/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'assets/images/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'assets/images/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'assets/images/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map((section) => {
                        return <MenuItem title={section.title} key={section.id} imageUrl={ section.imageUrl} />
                    })
                }
            </div>
        )
        
       
    }
}

export default Directory;