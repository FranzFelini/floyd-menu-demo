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
    <div
      id="reservations"
      className="bg-white justify-center items-center w-full lg:min-h-[70vh] max-w-full flex"
    >
      <div className="w-full lg:w-[70%] lg:py-4 flex justify-center items-center relative overflow-hidden flex-col lg:px-4 rounded-lg">
        <div className="flex flex-col items-center rounded-xl w-full z-20 max-w-[90%] lg:max-w-[60%] pr-4">
          {formFields.map((field) => (
            <div key={field.id} className="w-full pr-4">
              {field.id}
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
            </div>
          ))}
          <div className="pr-4">
            <button className="flex rounded-xl bg-[#8D7BD6] tracking-wide font-bold font-[Fira Sans Condensed] text-white py-2 px-4 mt-4">
              Reserve now
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  </>
);

export default Form;
