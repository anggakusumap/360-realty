import React from 'react';

function Pricing() {
    return (
        <div className="bg-cover p-8 min-h-fit flex flex-col gap-10 justify-between" style={ { backgroundImage: "url(/img/pricing.png)" } }>
            <div className="pt-20 md:pt-44 flex flex-col md:gap-20">
                <h1 className="text-2xl md:text-[12rem] font-bold text-end">Pricing</h1>
                <p className="text-sm md:text-3xl ml-0 md:ml-96 2xl:text-4xl font-light text-center">Commission only management services</p>
            </div>
            <div className="flex flex-col items-start shadow-md shadow-sky-400 justify-start w-full md:w-1/2 bg-white rounded-xl py-8 px-4 gap-3">
                <h1 className="text-3xl md:text-7xl font-extrabold">12 Months FREE</h1>
                <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-0">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl md:text-2xl">Villa Management Services</h2>
                        <p className="text-xs"><span className=" font-extrabold">LIMITED TIME ONLY - </span>TERMS & CONDITIONS APPLY </p>
                    </div>
                    <button className="py-2 px-8 bg-primary text-white rounded-full w-auto">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;