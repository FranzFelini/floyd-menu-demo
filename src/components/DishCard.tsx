export interface Dish {
  name: string;
  description: string;
  imageUrl: string;
}

export const DishCard: React.FC<Dish> = ({ name, description, imageUrl }) => (
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
      minWidth: "300px",
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
