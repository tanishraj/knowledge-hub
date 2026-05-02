import React from 'react';
import { Router } from '@reach/router'

import Routing from './routing'
console.log(Routing)
const Routes = () => {
    return (
        <>
            <Router>
                {
                    Routing.map((item, index) => (
                        <item.component key={index} path={item.path} />
                    ))
                }
            </Router>
        </>
    )
}

export default Routes;