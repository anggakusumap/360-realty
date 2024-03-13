import { WhatsappPic } from '@/constant';
import Image from 'next/image';
import React from 'react';

const Whatsapp = () => {
    return (
        <div className="fixed bottom-3 right-3">
            <Image src={ WhatsappPic } alt='whatsapp' width={ 100 } height={ 100 } />
        </div>
    );
};

export default Whatsapp;