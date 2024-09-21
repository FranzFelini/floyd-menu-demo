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
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            padding: "2rem",
            width: "100%",
            textAlign: "center",
            marginBottom: "10rem",
          }}
        >
          <h1
            style={{
              padding: "1rem",
            }}
          >
            About us
          </h1>
          <p
            style={{
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            Floyd Food Factory is a restaurant established in 2018. Our goal is
            to provide our customers with the best dining experience. We offer a
            wide range of dishes, from traditional to modern cuisine. We use
            only the freshest homegrown ingredients to create delicious and
            healthy meals. Whether you are looking for a romantic dinner for two
            or a fun night out with friends, Floyd Food Factory is the perfect
            place to be. Come and visit us today and enjoy a memorable dining
            experience!
          </p>

          <div
            style={{
              backgroundColor: "pink",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10rem",
            }}
          >
            <p>icons</p>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "850px",
              height: "550px",
              backgroundColor: "pink",
              zIndex: -1,
              margin: "0 auto",
              marginRight: "2rem",
            }}
          >
            <iframe
              width={850}
              height={550}
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.016931009403!2d18.91332287617827!3d42.851375671151395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d07857f4772b7%3A0x5a1ae8bd6a8bb6ba!2sFloyd%20Food%20Factory!5e0!3m2!1sbs!2sba!4v1726958397330!5m2!1sbs!2sba"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          position: "relative",
          height: "10em",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: "5rem",
        }}
      >
        Visit us
      </footer>
    </div>
  );
}

export default App;
