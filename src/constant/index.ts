import WhatsappPic from "../../public/img/wa.png";
import Service1 from "../../public/img/service1.png";
import Service2 from "../../public/img/service2.png";
import Service3 from "../../public/img/service3.png";
import Rental1 from "../../public/img/rental1.png";
import Rental2 from "../../public/img/rental2.png";
import Rental3 from "../../public/img/rental3.png";
import Rental4 from "../../public/img/rental4.png";

const ServiceList = [
  {
    name: "Rental Management",
    pic: Service1,
  },
  {
    name: "Property Sales",
    pic: Service2,
  },
  {
    name: "Marketing Advertising",
    pic: Service3,
  },
];

const RentalList = [
  {
    name: "Villa Management",
    pic: Rental1,
    description:
      "We take care of all the aspects of managing the day to day operations of your property, from welcoming guests, cleaning, maintenance services & processing all the bills and invoices on your behalf. ",
  },
  {
    name: "Staff Management",
    pic: Rental2,
    description:
      "We have developed  the most outstanding staff training program, 360’s focus is to ensure all team members  perform at the highest level to ensure the utmost highest standard of hospitality services in the market.",
  },
  {
    name: "Reservations",
    pic: Rental3,
    description:
      "We take care of all the booking and reservation process, our state of the art software ensures your villas bookings are consistent and profitable, we have partnerships with all major OTAS to ensure your property the best results.",
  },
  {
    name: "Property Reports ",
    pic: Rental4,
    description:
      "We have created an online dashboard for villa owners which displays and reports 360 degrees of your villas progress and results, view transactions, calendars, availability and pricing and insights and metrics for piece of mind.",
  },
];

export { WhatsappPic, ServiceList, RentalList };
