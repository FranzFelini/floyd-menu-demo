import { DatePicker } from "./ui/date-picker";

interface FormField {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

const formFields: FormField[] = [
  {
    label: "First name",
    type: "text",
    id: "FirstName",
    placeholder: "First name",
  },
  {
    label: "Last name",
    type: "text",
    id: "LastName",
    placeholder: "Last name",
  },
  {
    label: "Reservation date",
    type: "date",
    id: "ReservationDate",
    placeholder: "Reservation date",
  },
  {
    label: "Reservation time",
    type: "time",
    id: "ReservationTime",
    placeholder: "Reservation time",
  },
  {
    label: "How many people?",
    type: "number",
    id: "NumberOfPeople",
    placeholder: "How many people?",
  },
];

const Form = () => (
  <>
    <div id="reservations" className="bg-white justify-center items-center w-full lg:min-h-[70vh] max-w-full flex">
      <div className="w-full lg:w-[70%] lg:py-4 flex justify-center items-center gap-4 relative overflow-hidden flex-col lg:px-4 rounded-lg">
        <div className="flex flex-col gap-2 items-center rounded-xl lg:p-6 w-full z-20 max-w-[90%] lg:max-w-[60%]">
          {formFields.map((field) => (
            <div key={field.id} className="w-full pr-4">
              <label
                htmlFor={field.id}
                style={{
                  color: "black",
                  fontFamily: "Fira Sans Condensed",
                  fontSize: "0.9em",
                  alignContent: "center",
                  position: "relative",
                }}
              >
                {field.label}
              </label>

              {field.type === "date" ? (
                <DatePicker className="w-full border-[0.5px] border-black" date={new Date()} setDate={console.log} />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  style={{
                    padding: "8px",
                    width: "100%",
                    borderRadius: "0.7em",
                    border: "0.5px solid black",
                    fontFamily: "Fira Sans Condensed",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <button
          style={{
            display: "flex",
            borderRadius: "13px",
            border: "1px solid black",
            padding: "1em",
            width: "30%",
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
      </div>
    </div>
  </>
);

export default Form;
