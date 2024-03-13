import MarketingAdvertising from "../_components/MarketingAdvertising";
import PropertySales from "../_components/PropertySales";
import RentalManagement from "../_components/RentalManagement";
import Services from "../_components/Services";
import Whatsapp from "../_components/Whatsapp";

export default function Service() {
    return (
        <>
            <Services />
            <RentalManagement />
            <PropertySales />
            <MarketingAdvertising />
            <Whatsapp />
        </>
    );
}
