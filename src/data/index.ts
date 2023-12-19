import { v4 as uuid } from "uuid";

import { IProduct, IFormInput } from "../interfaces";
export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title: "Volvo S60 Cross Country",
    description:
      "A simple, and common, definition of a crossover would be that it is a vehicle that combines the features of an SUV and a hatchback. Crossover vehicles offer soft-roading capabilities and are constructed like a car - they use unibody construction instead of the body-on-frame platform used in SUVs.",
    imageURL:
      "http://i.ndtvimg.com/i/2016-03/volvo-s60-cross-country-827_827x510_51456830614.jpg",
    price: "$500030",
    color: ["#e4b7ff", "#cb2c31", "#3457a7"],
    category: {
      name: "car",
      imageURL:
        "http://i.ndtvimg.com/i/2016-03/volvo-s60-cross-country-827_827x510_51456830614.jpg",
    },
  },
  {
    id: uuid(),
    title: "DODGE CHALLENGER RT COUPE 2022",
    description:
      "A simple, and common, definition of a crossover would be that it is a vehicle that combines the features of an SUV and a hatchback. Crossover vehicles offer soft-roading capabilities and are constructed like a car - they use unibody construction instead of the body-on-frame platform used in SUVs.",
    imageURL:
      "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "$500.0000",
    color: ["#e4b7ff", "#cb2c31", "#3457a7"],
    category: {
      name: "car",
      imageURL:
        "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },

  {
    id: uuid(),
    title: "Mercedes-Benz GLE Coupe",
    description:
      "A simple, and common, definition of a crossover would be that it is a vehicle that combines the features of an SUV and a hatchback. Crossover vehicles offer soft-roading capabilities and are constructed like a car - they use unibody construction instead of the body-on-frame platform used in SUVs.",
    imageURL:
      "http://i.ndtvimg.com/i/2015-12/mercedes-benz-gle-coupe_827x510_51449119963.jpg",
    price: "$500030",
    color: ["#cb2c31", "#e4b7ff", "#3457a7"],
    category: {
      name: "car",
      imageURL:
        "http://i.ndtvimg.com/i/2015-12/mercedes-benz-gle-coupe_827x510_51449119963.jpg",
    },
  },

  {
    id: uuid(),
    title: "2023 Ford Mustang Mach-E GT",
    description:
      "A simple, and common, definition of a crossover would be that it is a vehicle that combines the features of an SUV and a hatchback. Crossover vehicles offer soft-roading capabilities and are constructed like a car - they use unibody construction instead of the body-on-frame platform used in SUVs.",
    imageURL:
      "https://platform.cstatic-images.com/xlarge/in/v2/37aa0ac1-8e11-5cee-93ad-f661d1eac3ba/d3dd5f8d-93af-4635-b55f-0c44ac703ae1/rrrTSPLg3r_FOTaKN_9mFcBBv6g.jpg",
    price: "$646,95",
    color: ["#cb2c31", "#e4b7ff", "#3457a7"],
    category: {
      name: "car",
      imageURL:
        "https://platform.cstatic-images.com/xlarge/in/v2/37aa0ac1-8e11-5cee-93ad-f661d1eac3ba/d3dd5f8d-93af-4635-b55f-0c44ac703ae1/rrrTSPLg3r_FOTaKN_9mFcBBv6g.jpg",
    },
  },

  {
    id: uuid(),
    title: "2024 Nissan Leaf SV PLUS",
    description:
      "A simple, and common, definition of a crossover would be that it is a vehicle that combines the features of an SUV and a hatchback. Crossover vehicles offer soft-roading capabilities and are constructed like a car - they use unibody construction instead of the body-on-frame platform used in SUVs.",
    imageURL:
      "https://www.cars.com/i/large/in/v2/be1095d5-76f3-5a32-aac1-43391d55fb8b/3f40de4e-0f9b-4cb8-a5a1-97c9c786ef4d/Cyaoxbd_OE2SZ3twS6UdFvbA0Y8.jpg",
    price: "$35,241",
    color: ["#cb2c31", "#e4b7ff", "#3457a7"],
    category: {
      name: "car",
      imageURL:
        "https://platform.cstatic-images.com/xlarge/in/v2/de11bcd3-9e31-5f5a-86ed-85abd53327df/68e88639-2a1e-401f-b7e6-9f4c53ab3cae/GlSkvkuhxvV_JfOYuFTmAm0W1GY.jpg",
    },
  },

  {
    id: uuid(),
    title: "2024 BMW M8 Competition Gran Coupe",
    description:
      "A simple, and common, definition of a crossover would be that it is a vehicle that combines the features of an SUV and a hatchback. Crossover vehicles offer soft-roading capabilities and are constructed like a car - they use unibody construction instead of the body-on-frame platform used in SUVs.",
    imageURL:
      "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$146,345",
    color: ["#cb2c31", "#e4b7ff", "#3457a7"],
    category: {
      name: "car",
      imageURL:
        "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
];

export const FormInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
