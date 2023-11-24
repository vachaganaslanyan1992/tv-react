import React, {useState} from 'react';
import searchIcon from '../assets/icons/ICON - Search.png';
import homeIcon from '../assets/icons/Group 46.png';
import tvShow from '../assets/icons/Group 56.png';
import movies from '../assets/icons/Group 54.png';
import genres from '../assets/icons/Group 53.png';
import watchLater from '../assets/icons/Group 47.png';
import userSmile from '../assets/images/smile.png';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {icon: searchIcon, text: 'Search'},
        {icon: homeIcon, text: 'Home'},
        {icon: tvShow, text: 'TV Shows'},
        {icon: movies, text: 'Movies'},
        {icon: genres, text: 'Genres'},
        {icon: watchLater, text: 'Watch later'},
    ];

    return (
        <div
            className={`absolute w-20 h-screen duration-1000 
            bg-gradient-to-r from-black-80 to-black-0 flex 
            items-center flex-col justify-between h-screen text-white  
            ${isOpen ? 'w-72' : 'w-20 '}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className={`flex w-full p-4 ${!isOpen ? 'invisible' : ''}`}>
                <img src={userSmile} alt="smile" className="w-8 bg-amber-400 rounded-full "/>
                <span className={'pl-4 my-auto'}>Smile</span>
            </div>

            <div className="mb-auto flex flex-col w-full">
                {menuItems.map((item, index) => (
                    <a href="#" className="flex p-4 items-center ml-1 " key={index}>
                        <img src={item.icon} alt={item.text} className="w-6"/>
                        <span className={`${!isOpen && 'hidden'} text-sm ml-4 whitespace-nowrap`}>{item.text}</span>
                    </a>
                ))}
            </div>

            <div className={`flex flex-col w-full p-4 whitespace-nowrap ${!isOpen ? 'invisible' : ''}`}>
                <a href="#">LANGUAGE</a>
                <a href="#">GET HELP</a>
                <a href="#">EXIT</a>
            </div>
        </div>
    );
};

export default Menu;