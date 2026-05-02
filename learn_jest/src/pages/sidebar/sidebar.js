import React from 'react';
import { Link } from '@reach/router'
import './sidebar.scss'

import Routing from '../../routes/routing'

const Sidebar = () => {
    return (
        <>
            <ul className="sidebar">
                {
                    Routing.map((item, index) => (
                        <li key={index}><Link to={item.path}>{item.label}</Link></li>
                    ))
                }
            </ul>
        </>
    )
}

export default Sidebar;