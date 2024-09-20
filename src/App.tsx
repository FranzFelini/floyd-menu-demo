import { useRef } from "react";
import Prikaz from "./Img1CMP";
import { Nav } from "./Nav";
import DishGallery from "./dishcardcmp";
import Form from "./form";

interface FormField {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

function App() {
  const MenuRef = useRef<HTMLDivElement>(null);
  const ReservationRef = useRef<HTMLDivElement>(null);
  const BlogRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        width: "100%",
        padding: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Prikaz />
      </div>

      <div id="navbar">
        <Nav
          BlogRef={BlogRef}
          MenuRef={MenuRef}
          ReservationRef={ReservationRef}
        />
      </div>

      <hr
        style={{
          width: "101.1%",
          border: "1px solid black",
        }}
      ></hr>

      <div
        ref={ReservationRef}
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
          height: "70vh",
          maxWidth: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "60vh",
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            border: "1px solid black",
            flexDirection: "column",
            gap: "1rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              borderRadius: "30px",
              padding: "20px",
              width: "60%",
              zIndex: 2,
              border: "1px solid black",
            }}
          >
            <Form />
          </div>
          <button
            style={{
              display: "flex",
              borderRadius: "13px",
              border: "1px solid black",
              position: "relative",
              padding: "1em",
              width: "25%",
              color: "white",
              justifyContent: "center",
              fontWeight: "bold",
              fontFamily: "Fira Sans Condensed",
              zIndex: 2,
              backgroundColor: "#8D7BD6",
              letterSpacing: "1.2px",
            }}
          >
            Reserve now
          </button>
          <div
            style={{
              backgroundImage: "url(/sto.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(10px)",
              position: "absolute",
              top: "-20px",
              left: "-20px",
              right: "-20px",
              bottom: "-20px",
              borderRadius: "30px",
              zIndex: 1,
            }}
          />
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          border: "1px solid black",
          marginBottom: "-1rem",
        }}
      ></hr>
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "lato",
          fontWeight: "normal",
          fontSize: "1.5em",
          lineHeight: "0",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <h1>MENU</h1>
      </div>

      <hr
        style={{
          width: "100%",
          border: "1px solid black",
          marginBottom: "3rem",
        }}
      ></hr>
      <div
        ref={MenuRef}
        style={{
          backgroundColor: "transparent",
          height: "200vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingBottom: "2rem",
        }}
      >
        <DishGallery />
      </div>

      <div
        ref={BlogRef}
        style={{
          backgroundColor: "green",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> Blog </h1>
      </div>

      <div
        style={{
          backgroundColor: "red",
          height: "60vh",
          marginTop: "0",
        }}
      >
        <p>Location</p>
      </div>

      <footer>Visit us</footer>
    </div>
  );
}

export default App;
