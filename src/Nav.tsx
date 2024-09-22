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
      className="m-0 flex justify-center gap-8 p-3 text-white no-underline w-full font-medium bg-black"
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
            className="cursor-pointer px-2 py-1 bg-black no-underline text-white"
          >
            {link.label}
          </div>
        );
      })}
    </div>
  );
}
