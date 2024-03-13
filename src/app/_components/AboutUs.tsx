import React from 'react';

function AboutUs() {
    return (
        <div className="bg-cover p-8 min-h-fit flex flex-col gap-10 justify-between" style={ { backgroundImage: "url(/img/about-us.png)" } }>
            <div className="pt-20 md:pt-44 pb-10 md:pb-20 flex flex-col md:gap-20">
                <h1 className="text-2xl md:text-[12rem] font-bold">About us</h1>
                <p className="text-sm md:text-3xl ml-0 md:ml-44 2xl:text-4xl font-light text-center">360<sup>o</sup> Realty Sales and Management Solutions</p>
            </div>
        </div>
    );
}

export default AboutUs;