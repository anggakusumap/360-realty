import React from 'react';

function Contact() {
    return (
        <div className="bg-cover p-4 md:p-8 min-h-screen text-neutral-400 flex flex-col gap-10 justify-evenly" style={ { backgroundImage: "url(/img/contact.png)" } }>
            <div className="pt-20 md:pt-44 flex flex-col md:gap-20 text-third">
                <h1 className="text-7xl md:text-[12rem] font-bold text-end">Contact</h1>
                <p className="text-sm md:text-3xl 2xl:text-4xl font-light text-center">Fill in the form and we will be in touch shortly </p>
            </div>
            <form className="flex flex-col md:flex-row justify-evenly max-w-full md:px-2 gap-10 text-xs md:text-lg">
                <div className="flex flex-col gap-10 w-full">
                    <input
                        type="text"
                        id="fullName"
                        className="appearance-none border-2 border-primary py-6 px-4 rounded-full leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your full name"
                    />
                    <input
                        type="email"
                        id="email"
                        className="appearance-none border-2 border-primary py-6 px-4 rounded-full leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your email address"
                    />
                    <input
                        type="tel"
                        id="phoneNumber"
                        className="appearance-none border-2 border-primary py-6 px-4 rounded-full leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your phone number"
                    />
                </div>
                <div className="flex flex-col gap-10 w-full">
                    <div className="border-primary py-6 px-4 w-full rounded-full bg-white border-2">
                        <p>Select the option which best suits your inquiry</p>
                    </div>
                    <div className="flex justify-evenly gap-2">
                        <div className="flex flex-col gap-5 w-full">
                            <div className="border-primary py-6 px-4 w-full rounded-full bg-white border-2">
                                <p>Villa Management</p>
                            </div>
                            <div className="border-primary py-6 px-4 w-full rounded-full bg-white border-2">
                                <p>Sell My Property</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <div className="border-primary py-6 px-4 w-full rounded-full bg-white border-2">
                                <p>Buying Property</p>
                            </div>
                            <div className="border-primary py-6 px-4 w-full rounded-full bg-white border-2">
                                <p>Rentals</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex felx-col items-end w-full">
                    <button
                        className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-10 shadow-xl w-full md:w-1/2 rounded-full"
                        type="submit"
                    >
                        next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;