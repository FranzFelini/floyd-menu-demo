import { useState } from "react";
import { TimeSelect } from "./time-select";
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

const Form = () => {
  const [time, setTime] = useState("17:30");
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <div
        id="reservations"
        className="bg-white justify-center items-center w-full lg:min-h-[70vh] max-w-full flex"
      >
        <div className="w-full lg:w-[70%] lg:py-4 flex justify-center items-center gap-4 relative overflow-hidden flex-col lg:px-4 rounded-lg">
          <div className="flex flex-col gap-2 items-center rounded-xl lg:p-6 w-full z-20 max-w-[90%] lg:max-w-[60%]">
            {formFields.map((field) => (
              <div key={field.id} className="w-full pr-4 flex flex-col gap-1">
                <label
                  htmlFor={field.id}
                  className="text-lg font-medium align-center relative"
                >
                  {field.label}
                </label>

                {field.type === "date" ? (
                  <DatePicker
                    className="w-full border border-gray-500 rounded-xl h-[50px]"
                    date={date ?? new Date()}
                    setDate={setDate}
                  />
                ) : field.type === "time" ? (
                  <TimeSelect time={time} setTime={setTime} />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-500 rounded-xl py-2 px-4 text-lg font-sans h-[50px]"
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
              width: "50%",
              marginTop: "1.5em",
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
};

export default Form;
