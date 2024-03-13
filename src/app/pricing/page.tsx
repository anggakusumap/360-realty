import OurServices from "../_components/OurServices";
import Pricing from "../_components/Pricing";
import Whatsapp from "../_components/Whatsapp";

export default function PricingPage() {
    return (
        <>
            <Pricing />
            <OurServices />
            <div className="px-8 pb-10 max-w-7xl mx-auto">
                <h1 className="text-xl font-extralight">
                    Your property is in good hands with 360 Realty <br />
                    Contact our team today and BOOST your rental profits <br />
                    with Bali’s best villa marketing and management company
                </h1>
            </div>
            <div className="px-8 pb-10 mx-auto max-w-7xl flex flex-col md:flex-row gap-5 md:gap-10 justify-between">
                <h1 className="text-2xl font-extrabold">Book your free consultation today </h1>
                <button className="py-2 px-8 bg-primary text-white rounded-full w-auto">Free consultation</button>
            </div>
            <Whatsapp />
        </>
    );
}
