import React from "react";
import { Dish, DishCard } from "../DishCard";

const dishes: Dish[] = [
  {
    name: "Breakfast Floyd",
    description:
      "A hearty Montenegrin dish featuring creamy mashed potatoes and cheese. /350g/",
    imageUrl: "/meat.jpg",
  },
  {
    name: "Omellette",
    description:
      "A traditional Montenegrin omelette served with tomatos. /300g/",
    imageUrl: "/sarma.jpg",
  },
  {
    name: "Scrambled Eggs",
    description:
      "Scrambled eggs paired with tomatos and organic cheese. /300g/",
    imageUrl: "/chicken3.jpeg",
  },
  {
    name: "Traditional Montenegrin Breakfast",
    description:
      "Traditional breakfast paired with eggs, tomatos, fresh cheese and meat. /300g/",
    imageUrl: "/fish4.jpeg",
  },
  {
    name: "Cheese Pie",
    description:
      "A flavorful Balkan dish made with cheese wrapped in flaky pastry. /250g/",
    imageUrl: "/cevapcici5.jpeg",
  },
  {
    name: "Apple or Cherry Pie",
    description: "A savory pie made with wild apples or cherries. /250g/",
    imageUrl: "/sandwich6.jpeg",
  },
  {
    name: "Montenegrin Fried Dough",
    description: "A delightful dish made from locally produced dough. /300g/",
    imageUrl: "/mixedmeat7.jpeg",
  },
  {
    name: "Fried Bread with Eggs",
    description:
      "Bread made out of organic dough paired with scrambled eggs. /300g/",
    imageUrl: "/przenice.jpg",
  },
  {
    name: "Floyd Sandwich",
    description: "A delicious sandwich made with fresh ingredients. /300g/",
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Charcuterie Plate",
    description:
      "A selection of cured meats and cheeses, perfect for sharing. /300g/ 500g/",
    imageUrl: "/meat.jpg",
  },
  {
    name: "Roast",
    description: "A succulent roasted dish, ideal for meat lovers. /300g/",
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Veal Broth with Vegetables",
    description:
      "A comforting bowl of veal broth enriched with fresh vegetables. /150g/",
    imageUrl: "/broth.jpg",
  },
  {
    name: "Veal Soup with Vegetables",
    description:
      "A hearty soup made with tender veal and seasonal vegetables. /150g/",
    imageUrl: "/supapiletina.jpg",
  },
  {
    name: "Dish of the Day with Homemade Bread",
    description: "A daily special served with warm, homemade bread. /300g/",
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Traditional Montenegrin Porridge with Sour Milk",
    description: "Creamy porridge complemented by tangy sour milk. /350g/",
    imageUrl: "/salad8.jpeg",
  },
  {
    name: "Minced Meat with Potatoes and Garlic",
    description:
      "Flavorful minced meat served with tender potatoes and garlic, perfect for sharing. /300g/",
    imageUrl: "/meat.jpg",
  },
  {
    name: "Traditional Mixed Meat on the Grill",
    description:
      "A variety of grilled meats showcasing traditional flavors. /400g/",
    imageUrl: "/mixedmeat.jpg",
  },
  {
    name: "Trout Served with Potato Salad",
    description:
      "Fresh trout paired with a light potato salad for a refreshing meal. /350g/",
    imageUrl: "/sarma.jpg",
  },
];

const DishGallery: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5em",
      justifyContent: "center",
      margin: "0 auto",
    }}
  >
    {dishes.map((dish, index) => (
      <DishCard
        key={index}
        name={dish.name}
        description={dish.description}
        imageUrl={dish.imageUrl}
      />
    ))}
  </div>
);

export default DishGallery;
