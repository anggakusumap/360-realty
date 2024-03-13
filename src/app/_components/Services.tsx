import { ServiceList } from '@/constant';
import Image from 'next/image';
import React from 'react';

const Services = () => {
    return (
        <div className="bg-cover p-8 min-h-screen flex flex-col justify-between" style={ { backgroundImage: "url(/img/service.png)" } }>
            <div className="pt-20 md:pt-44 flex flex-col md:gap-20">
                <h1 className="text-4xl md:text-[12rem] font-bold">Services</h1>
                <p className="text-sm md:text-4xl text-center">360<sup>o</sup> Property Sales and Management Solutions</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 justify-center py-10">
                { ServiceList.map((service) => <div key={ service.name } className="bg-white p-10 w-full md:w-1/4 text-center rounded-3xl shadow-md shadow-sky-400">
                    <Image src={ service.pic } alt={ service.name } width={ 100 } height={ 100 } className="mx-auto" />
                    <p className="text-neutral-500 text-xl">{ service.name }</p>
                </div>) }
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-20 items-center">
                <h1 className="text-xl md:text-3xl font-bold">Book your free consultation today </h1>
                <button className="py-3 px-4 bg-primary text-white rounded-full w-auto">Free consultation</button>
            </div>
        </div>
    );
};

export default Services;