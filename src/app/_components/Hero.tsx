import React from 'react';

const Hero = () => {
    return (
        <div className="bg-cover px-8 py-8 min-h-screen flex flex-col justify-between" style={ { backgroundImage: "url(/img/hero.png)" } }>
            <div className="text-center text-third flex flex-col gap-10 md:pt-20">
                <div className="max-w-6xl 2xl:max-w-7xl pt-20 2xl:pt-40 text-center md:text-end">
                    <h1 className="text-5xl md:text-[10rem] 2xl:text-[12rem] font-bold">360<sup>o</sup> REALTY</h1>
                    <p className="text-md md:text-3xl">Property sales and management solutions</p>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4">
                <div className="rounded-lg text-center w-96 max-w-full bg-base-100 bg-white shadow-md shadow-sky-400 p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-bold">12 Months FREE</h2>
                            <p className="text-xl">Villa Management Services</p>
                        </div>
                        <button className="p-2 bg-primary text-white rounded-full w-auto mx-auto">Learn More</button>
                        <p className="uppercase text-xs"><span className="font-bold">Limited time only - </span>TERMS & CONDITIONS APPLY</p>
                    </div>
                </div>
                <p className="font-semibold">WWW.360REALTY.CO</p>
            </div>
        </div>
    );
};

export default Hero;