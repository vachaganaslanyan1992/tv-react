import React from 'react';
import coverImage from '../assets/images/FeaturedCoverImage.png';
import titleImage from '../assets/images/FeaturedTitleImage.png';
import Button from "../UI/Button";

function Home() {
    return (
        <div className={'w-full h-screen'}>
            <div className={' w-full bg-[image:var(--image-url)] text-white h-5/6 overflow-hidden bg-cover bg-no-repeat'}
                 style={{'--image-url': `url(${coverImage})`}}
            >
                <div className={'pl-20 pt-20 w-1/2'}>
                    <h2 className={'text-gray-700'}>MOVIE</h2>
                    <img src={titleImage} alt="title"/>
                    <p className={'mt-5'}>2021 18+ 1H 48m</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores cum cumque cupiditate
                        eligendi repudiandae rerum suscipit ullam! Ab debitis et nemo non unde! Delectus. </p>
                    <div className={'mt-5'}>
                        <Button type={"button"}>
                            Play
                        </Button>
                        <Button buttonType={'blue'} type={'button'}>
                            More Info
                        </Button>
                    </div>
                </div>
            </div>
            <div>trending</div>
        </div>
    );
}

export default Home;