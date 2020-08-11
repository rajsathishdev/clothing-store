import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


export class Directory extends React.Component {
    render() {
        return 
        (
            <div className="directory-menu">
                <MenuItem title={"tile"}/>
            </div>
        );
    }
}