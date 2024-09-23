export interface Dish {
  name: string;
  description: string;
  imageUrl: string;
}

export const DishCard: React.FC<Dish> = ({ name, description, imageUrl }) => (
  <div className="bg-white w-1/4 rounded-lg overflow-hidden mb-6 flex flex-col shadow-md p-2 m-0 font-[Fira Sans Condensed] min-w-[300px]">
    <div
      className="w-full h-[15em] rounded-lg bg-black my-8"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
    <div className="p-4">
      <h2 className="font-bold text-4xl font-[Copperplate] m-0 leading-8">
        {name}
      </h2>
      <p style={{ marginTop: "0.5em", fontSize: "1em", color: "#555" }}>
        {description}
      </p>
    </div>
  </div>
);
