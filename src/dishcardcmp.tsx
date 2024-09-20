import React from "react";

interface Dish {
  name: string;
  description: string;
  imageUrl: string;
}

const dishes: Dish[] = [
  {
    name: "Kačamak",
    description:
      "Kačamak is a traditional Montenegrin dish made with mashed potatoes and cheese.",
    imageUrl: "/kacamak4.jpg.webp",
  },
  {
    name: "Sarma",
    description: "Traditional Bosnian dish server with potatos and fresh salad",
    imageUrl: "/sarma2.jpeg",
  },
  {
    name: "Chicken with potatos and salad",
    description:
      "Alfredo chicken served with handful of mashed potatos and spinach",
    imageUrl: "/chicken3.jpeg",
  },
  {
    name: "Fish with spinach",
    description:
      "Fish chached in river Zeta in the village Gornje Polje, served with spinach and mashed potatos",
    imageUrl: "/fish4.jpeg",
  },
  {
    name: "Ćevapčići",
    description: "Traditional Balkan dish made with minced meat and spices.",
    imageUrl: "/cevapcici5.jpeg",
  },
  {
    name: "Sandwich",
    description: "Sandwich with ham, cheese, lettuce, and tomato.",
    imageUrl: "/sandwich6.jpeg",
  },
  {
    name: "Mixed meat",
    description:
      "Combination of local grown meat collected from Gornje polje village ",
    imageUrl: "/mixedmeat7.jpeg",
  },
  {
    name: "Salad",
    description:
      "Salad with mayonesse, cheese, lettuce, tomato and cutcumbers.",
    imageUrl: "/salad8.jpeg",
  },
  {
    name: "Pancakes with chocolate",
    description: "Pancakes with nutella and chocholate dressing.",
    imageUrl: "/pancake9.jpeg",
  },
];

const DishCard: React.FC<Dish> = ({ name, description, imageUrl }) => (
  <div
    style={{
      backgroundColor: "white",
      width: "25%",
      borderRadius: "15px",
      overflow: "hidden",
      marginBottom: "1.5em",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      padding: "1em",
      margin: "0",
      fontFamily: "Fira Sans Condensed",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "15em",
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
    <div style={{ padding: "1em" }}>
      <h2
        style={{
          fontFamily: "Copperplate",
          fontSize: "2em",
          margin: "0",
          lineHeight: "2rem",
        }}
      >
        {name}
      </h2>
      <p style={{ marginTop: "0.5em", fontSize: "1em", color: "#555" }}>
        {description}
      </p>
    </div>
  </div>
);

const DishGallery: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5em",
      justifyContent: "center",
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
