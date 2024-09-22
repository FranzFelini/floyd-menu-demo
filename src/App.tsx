import { useRef } from "react";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";
import Prikaz from "./Img1CMP";
import { Nav } from "./Nav";
import { Divider } from "./components/Divider";
import { Section } from "./components/SectionTitle";
import DishGallery from "./dishcardcmp";
import DishGallery2 from "./dishcardcmp2";
import DishGallery3 from "./dishcardcmp3";
import Form from "./form";

const SOCIAL_ICONS = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaTripadvisor />,
    link: "https://www.tripadvisor.com/",
  },
];

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

      <Divider />

      <div
        ref={ReservationRef}
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
          minHeight: "70vh",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          maxWidth: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            minHeight: "60vh",
            width: "70%",
            paddingTop: "1rem",
            paddingBottom: "1rem",
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
              borderRadius: "30px",
              zIndex: 1,
              position: "absolute",
              top: -20,
              left: -20,
              right: -20,
              bottom: -20,
            }}
          />
        </div>
      </div>
      <Section text="MENU">
        <DishGallery />
      </Section>

      <Section text="CHILDREN'S SURPRISE">
        <DishGallery2 />
      </Section>

      <Section text="VEGAN DISHES">
        <DishGallery3 />
      </Section>

      <Divider />

      <div
        ref={BlogRef}
        className="bg-white height-[70vh] flex justify-center items-center relative xl:flex-row flex-col p-4 text-center gap-8 max-w-7xl mx-auto"
      >
        <div>
          <h1
            style={{
              padding: "1rem",
            }}
          >
            About us
          </h1>
          <p className="w-full max-w-xl">
            Floyd Food Factory is a restaurant established in 2018. Our goal is
            to provide our customers with the best dining experience. We offer a
            wide range of dishes, from traditional to modern cuisine. We use
            only the freshest homegrown ingredients to create delicious and
            healthy meals. Whether you are looking for a romantic dinner for two
            or a fun night out with friends, Floyd Food Factory is the perfect
            place to be. Come and visit us today and enjoy a memorable dining
            experience!
          </p>

          <div className="flex justify-center items-center gap-6 text-4xl">
            {SOCIAL_ICONS.map((icon) => (
              <a
                className="no-underline text-black/80 cursor-pointer hover:text-black transition"
                href={icon.link}
                target="_blank"
                key={icon.link}
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.016931009403!2d18.91332287617827!3d42.851375671151395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d07857f4772b7%3A0x5a1ae8bd6a8bb6ba!2sFloyd%20Food%20Factory!5e0!3m2!1sbs!2sba!4v1726958397330!5m2!1sbs!2sba"
            loading="lazy"
            style={{
              border: "none",
            }}
            className="max-w-none w-full h-full min-h-[550px] min-w-[850px] hidden lg:block"
          />

          <a
            href="https://maps.app.goo.gl/HVAxXeAMq5EdfPmc8"
            target="_blank"
            className="lg:hidden px-4 py-2 bg-blue-300 cursor-pointer no-underline text-black"
          >
            View in Google Maps
          </a>
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
