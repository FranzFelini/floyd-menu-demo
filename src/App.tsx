import { useRef } from "react";
import Prikaz from "./Img1CMP";
import { Nav } from "./Nav";
import DishGallery from "./dishcardcmp";
import DishGallery2 from "./dishcardcmp2";
import DishGallery3 from "./dishcardcmp3";
import Form from "./form";

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
              width: "30%",
              height: "10%",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
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
          fontFamily: "Copperplate",
          fontWeight: "lighter",
          fontSize: "1.5em",
          lineHeight: "0",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          height: "15px",
        }}
      >
        <h1>MENU</h1>
      </div>

      <hr
        style={{
          width: "82%",
          border: "1px solid black",
          marginBottom: "3rem",
        }}
      ></hr>
      <div
        ref={MenuRef}
        style={{
          backgroundColor: "transparent",
          height: "360vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingBottom: "2rem",
        }}
      >
        <DishGallery />
      </div>
      <div
        style={{
          top: "-200px",
          position: "relative",
        }}
      >
        <hr
          style={{
            width: "100%",
            border: "1px solid black",
            marginBottom: "-1rem",
            top: "20px",
          }}
        ></hr>
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "Copperplate",
            fontWeight: "lighter",
            fontSize: "1.5em",
            lineHeight: "0",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            height: "15px",
          }}
        >
          <h1>CHILDREN'S SURPRISE</h1>
        </div>

        <hr
          style={{
            width: "82%",
            border: "1px solid black",
            marginBottom: "3rem",
            top: "-400px",
          }}
        ></hr>

        <DishGallery2 />
      </div>

      <div
        style={{
          top: "-200px",
          position: "relative",
        }}
      >
        <hr
          style={{
            width: "100%",
            border: "1px solid black",
            marginBottom: "-1rem",
            top: "20px",
          }}
        ></hr>
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "Copperplate",
            fontWeight: "lighter",
            fontSize: "1.5em",
            lineHeight: "0",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            height: "15px",
          }}
        >
          <h1>VEGAN DISHES</h1>
        </div>

        <hr
          style={{
            width: "82%",
            border: "1px solid black",
            marginBottom: "3rem",
          }}
        ></hr>

        <DishGallery3 />
      </div>

      <hr
        style={{
          width: "100%",
          border: "1px solid black",
          position: "relative",
          top: "-140px",
        }}
      ></hr>

      <div
        ref={BlogRef}
        style={{
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>nesto</div>
      </div>

      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          position: "relative",
          height: "3em",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Visit us
      </footer>
    </div>
  );
}

export default App;
