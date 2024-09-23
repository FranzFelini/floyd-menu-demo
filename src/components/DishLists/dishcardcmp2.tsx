import React from "react";
import { Dish, DishCard } from "../DishCard";

const dishes: Dish[] = [
  {
    name: "Fried chicken sticks with sesame seeds and potato",
    description: "",
    imageUrl: "/kacamak4.jpg.webp",
  },
  {
    name: "Minced meat with potatos and garlic",
    description: "",
    imageUrl: "/sarma2.jpeg",
  },
  {
    name: "Spaghetti Bolognese",
    description: "",
    imageUrl: "/chicken3.jpeg",
  },
];

const DishGallery2: React.FC = () => (
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

export default DishGallery2;
