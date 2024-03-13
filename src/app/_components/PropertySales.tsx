import { PropertyList } from '@/constant';
import Image from 'next/image';
import React from 'react';

function PropertySales() {
    return (
        <div className="px-8 py-10 md:py-20 max-w-full md:max-w-6xl mx-auto">
            <h1 className='text-4xl pb-10'>Property Sales</h1>

            <div className="flex flex-col gap-10">
                { PropertyList.map(property => <div key={ property.name }>
                    <div className='text-neutral-500 text-justify flex flex-col md:flex-row gap-4 md:gap-0 items-center border shadow-md shadow-sky-400 rounded-2xl py-14 px-8'>
                        <div className="flex flex-col w-full md:w-1/4 items-center gap-0 md:gap-2">
                            <Image src={ property.pic } alt={ property.name } width={ 100 } height={ 100 } />
                            <p className="text-lg">{ property.name }</p>
                        </div>
                        <div className="w-full md:w-3/4">
                            <p className="text-lg">{ property.description }</p>
                        </div>
                    </div>
                </div>) }
            </div>
        </div>
    );
}

export default PropertySales;