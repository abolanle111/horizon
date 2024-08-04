export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Booking",
      },
      {
        id: 52,
        path: "/team",
        text: "Our Team",
      },
      {
        id: 53,
        path: "/testimonial",
        text: "Testimonial",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fa-brands fa-facebook text-white"></i>,
  },
  {
    icon: <i className="fab fa-twitter text-white"></i>,
  },
  {
    icon: <i className="fab fa-instagram text-white"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in text-white"></i>,
  },
  {
    icon: <i className="fab fa-youtube text-white"></i>,
  },
];

export const carouselData = [
  {
    img: "./images/showcase3.jpg",
    title: "Your Home Away from Home.",
    subtitle: "luxury living",
    btn1: "Our Rooms",
    btn2: "Book Room",
  },
  {
    img: "./images/bg2.jpg",
    title: "Your Home Away from Home.",
    subtitle: "luxury living",
    btn1: "Our Rooms",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa-solid fa-hotel fa-2x  mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa-solid fa-users fa-2x  mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa-solid fa-users-gear fa-2x  mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-dark"></i>,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-dark"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-dark"></i>,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-dark"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-dark"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-dark"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const team = [
  {
    image: "./images/staff.jpg",
    name: "James Anderson",
    designation: "Executive Chef",
  },
  {
    image: "./images/team4 (1).jpg",
    name: "Sophia Collins",
    designation: "Guest Relations Manager",
  },
  {
    image: "./images/staff.jpg",
    name: "Michael Harris",
    designation: "Manager",
  },
  {
    image: "./images/team4 (1).jpg",
    name: "Emily Bennett",
    designation: "Supervisor",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Spa & Fitness",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "123 Street, New York, USA",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+012 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@example.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Alice Barker",
    profession: "Banker",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "./images/team4 (4).jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "William Dutch",
    profession: "Professor",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "./images/team4 (3).jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Jonh Doe",
    profession: "Lawyer",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "./images/team4 (2).jpg",
  },
];

export const roomItems = [
  {
    img: "./images/room3.jpg",
    price: "$170/night",
    name: "Premium Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "King-Sized Bed,Ultimate relaxation with premium linens. Stunning city views and gardens,Luxurious bathroom with designer toiletries.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "./images/room1.jpg",
    price: "$370/night",
    name: "Executive Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "King-Sized Bed, Restful sleep in style.Work Area,Longue Area, Cozy sofa and entertainment system.Indoor Pool",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "./images/room2.jpg",
    price: "$550/night",
    name: "Super Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Queen-Sized Bed: Comfort and quality.Ocean Views. Bright, spacious room with large windows. Rain shower, Outdoor Pool.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
