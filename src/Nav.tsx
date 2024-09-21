const LINKS = [
  {
    label: "Menu",
    href: "#menu",
  },
  {
    label: "Reservations",
    href: "#reservations",
  },
  {
    label: "About",
    href: "#about",
  },
];

export function Nav({
  MenuRef,
  ReservationRef,
  BlogRef,
}: {
  MenuRef: React.RefObject<HTMLDivElement>;
  ReservationRef: React.RefObject<HTMLDivElement>;
  BlogRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      id="navbar"
      style={{
        margin: "0px",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "10px",
        color: "white",
        textDecoration: "none",
        backgroundColor: "black",
        width: "100%",
        fontWeight: "medium",
      }}
    >
      {LINKS.map((link) => {
        return (
          <div
            onClick={() => {
              switch (link.label) {
                case "Menu":
                  MenuRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  });
                  break;
                case "Reservations":
                  ReservationRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  });
                  break;
                case "About":
                  BlogRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  });
                  break;
                default:
                  return null;
              }
            }}
            style={{
              cursor: "pointer",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderRadius: "5px",
              backgroundColor: "black",
              textDecoration: "none",
              color: "white",
            }}
          >
            {link.label}
          </div>
        );
      })}
    </div>
  );
}
