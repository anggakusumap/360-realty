import { OurServicesList } from '@/constant';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function OurServices() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between gap-4">
                <h1 className="text-2xl font-bold flex items-end w-8/12">Our Services</h1>
                <div className="flex flex-col items-center w-2/12 gap-2">
                    <div className="w-14 h-14 md:w-28 md:h-28 rounded-full border-4 border-white shadow-md shadow-sky-400 bg-primary text-white flex items-center justify-center">
                        <div className="text-lg md:text-3xl">20%</div>
                    </div>
                    <p className="text-[10px] text-center md:text-lg text-neutral-500">360 Management</p>
                </div>
                <div className="flex flex-col items-center w-2/12 gap-2">
                    <div className="w-14 h-14 md:w-28 md:h-28 rounded-full border-4 border-white shadow-md shadow-sky-400 bg-primary text-white flex items-center justify-center">
                        <div className="text-lg md:text-3xl">15%</div>
                    </div>
                    <p className="text-[10px] text-center md:text-lg text-neutral-500">Digital Marketing </p>
                </div>
            </div>

            <div className="flex flex-col pt-10">
                { OurServicesList.map((service) => <div key={ service.name } className="flex border-b-2 text-[#797979] py-4">
                    <h1 className="w-8/12">{ service.name }</h1>
                    { service.option1 &&
                        <FaCheckCircle className="w-2/12 text-xl md:text-3xl text-primary" />
                    }
                    { service.option2 &&
                        <FaCheckCircle className="w-2/12 text-xl md:text-3xl text-primary" />
                    }
                </div>) }
            </div>
        </div>
    );
}

export default OurServices;