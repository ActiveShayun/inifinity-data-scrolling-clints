import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <NavLink to={'/infiniteScroll'}>InfiniteScroll</NavLink>
            </ul>
        </div>
    );
};

export default Navbar;