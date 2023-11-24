import React from 'react';
import Menu from "./Menu";
import Home from "./Home";

const Main = () => {
    return (
        <div className="flex">
            <Menu></Menu>
            <Home></Home>
        </div>
    );
};

export default Main;