import React from "react";

interface Dish {
  name: string;
  description: string;
  imageUrl: string;
}

const dishes: Dish[] = [
  {
    name: "Breakfast Floyd",
    description:
      "A hearty Montenegrin dish featuring creamy mashed potatoes and cheese. /350g/",
    imageUrl: "/kacamak4.jpg.webp",
  },
  {
    name: "Omellette",
    description:
      "A traditional Montenegrin omelette served with tomatos. /300g/",
    imageUrl: "/sarma2.jpeg",
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
    imageUrl: "/salad8.jpeg",
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
    imageUrl: "/pancake9.jpeg",
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
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Veal Soup with Vegetables",
    description:
      "A hearty soup made with tender veal and seasonal vegetables. /150g/",
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Dish of the Day with Homemade Bread",
    description: "A daily special served with warm, homemade bread. /300g/",
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Traditional Montenegrin Porridge with Sour Milk",
    description: "Creamy porridge complemented by tangy sour milk. /350g/",
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Minced Meat with Potatoes and Garlic",
    description:
      "Flavorful minced meat served with tender potatoes and garlic, perfect for sharing. /300g/",
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Traditional Mixed Meat on the Grill",
    description:
      "A variety of grilled meats showcasing traditional flavors. /400g/",
    imageUrl: "/pancake9.jpeg",
  },
  {
    name: "Trout Served with Potato Salad",
    description:
      "Fresh trout paired with a light potato salad for a refreshing meal. /350g/",
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
