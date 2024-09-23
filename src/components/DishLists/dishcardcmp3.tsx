import React from "react";
import { Dish, DishCard } from "../DishCard";

const dishes: Dish[] = [
  {
    name: "Potato pie",
    description: "",
    imageUrl: "/kacamak4.jpg.webp",
  },
  {
    name: "Grilled vegetables",
    description: "",
    imageUrl: "/sarma2.jpeg",
  },
  {
    name: "Risotto with vegetables",
    description: "",
    imageUrl: "/chicken3.jpeg",
  },
  {
    name: "Fried homemade potato",
    description: "",
    imageUrl: "/chicken3.jpeg",
  },
  {
    name: "Salad from our Garden",
    description: "",
    imageUrl: "/chicken3.jpeg",
  },
];

const DishGallery3: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5em",
      justifyContent: "center",
    }}
  >
    {dishes.map((dish, index) => (
      <DishCard key={index} name={dish.name} description={dish.description} imageUrl={dish.imageUrl} />
    ))}
  </div>
);

export default DishGallery3;
