import AboutUs from "../_components/AboutUs";
import AboutUsContent from "../_components/AboutUsContent";
import Footer from "../_components/Footer";
import Whatsapp from "../_components/Whatsapp";

export default function AboutUsPage() {
    return (
        <>
            <AboutUs />
            <AboutUsContent />
            <Footer />
            <div className="px-5 md:px-0 max-w-7xl mx-auto">
                <div className="flex justify-end pb-10">
                    <div className="flex flex-col items-start shadow-md shadow-sky-400 justify-end w-full md:w-1/2 bg-white rounded-xl py-8 px-4 gap-3">
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
            </div>
            <Whatsapp />
        </>
    );
}
