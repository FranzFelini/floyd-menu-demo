// AboutCmp.tsx
import React from "react";

const AboutCmp: React.FC = () => {
  const styles = {
    container: {
      display: "flex",
      height: "100vh",
    },
    contactSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "20px",
      width: "300px", // Fixed width for the contact section
    },
    icon: {
      marginBottom: "15px",
      textDecoration: "none",
    },
    iconImage: {
      width: "30px",
      height: "auto",
      opacity: 0.8,
      transition: "opacity 0.3s",
    },
    iframeContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    mapContainer: {
      width: "900px",
      height: "600px",
      backgroundColor: "green",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    iframe: {
      width: "100%", // Adjusted to fill the container
      height: "100%", // Adjusted to fill the container
      border: "0.5px solid black",
      borderRadius: "10px",
    },
  };

  // Example list of icons
  const icons = [
    { id: 1, src: "icon1.png", alt: "Contact Icon 1" },
    { id: 2, src: "icon2.png", alt: "Contact Icon 2", link: "#" },
    // Add more icons as needed
  ];

  return (
    <div style={styles.container}>
      <div style={styles.contactSection}>
        <h2>Contact Us</h2>
        <div>
          {icons.map((icon) => (
            <a key={icon.id} href={icon.link} style={styles.icon}>
              <img src={icon.src} alt={icon.alt} style={styles.iconImage} />
            </a>
          ))}
        </div>
      </div>
      <div style={styles.iframeContainer}>
        <div style={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.4775274117924!2d18.91326448796486!3d42.85137914184853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d07857f4772b7%3A0x5a1ae8bd6a8bb6ba!2sFloyd%20Food%20Factory!5e0!3m2!1sen!2sba!4v1726951140228!5m2!1sen!2sba"
            loading="lazy"
            style={styles.iframe} // Make sure the style reference is correct
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCmp;
