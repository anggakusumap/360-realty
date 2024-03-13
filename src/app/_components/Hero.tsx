import React from 'react';

const Hero = () => {
    return (
        <div className="bg-cover min-h-screen px-8 py-24 flex flex-col justify-between" style={ { backgroundImage: "url(/img/hero.png)" } }>
            <div className="text-center text-third flex flex-col gap-10">
                <div className="max-w-6xl 2xl:max-w-7xl pt-20">
                    <h1 className="text-5xl md:text-[10rem] 2xl:text-[12rem] font-bold text-end">360<sup>o</sup> REALTY</h1>
                    <p className="text-md md:text-3xl text-end">Property sales and management solutions</p>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4">
                <div className="rounded-lg text-center w-96 bg-base-100 shadow-xl shadow-sky-400 p-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-bold">12 Months FREE</h2>
                        <p className="text-xl">Villa Management Services</p>
                        <button className="btn bg-primary text-white rounded-full w-auto mx-auto">Learn More</button>
                        <p className="uppercase text-xs"><span className="font-bold">Limited time only - </span>TERMS & CONDITIONS APPLY</p>
                    </div>
                </div>
                <p className="font-semibold">WWW.360REALTY.CO</p>
            </div>
        </div>
    );
};

export default Hero;