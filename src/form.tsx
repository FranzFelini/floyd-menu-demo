import React from "react";

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

const Form: React.FC = () => (
  <>
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
        <input
          type={field.type}
          id={field.id}
          placeholder={field.placeholder}
          style={{
            padding: "8px",
            marginBottom: "12px",
            width: "100%",
            borderRadius: "0.7em",
            border: "0.5px solid black",
            fontFamily: "Fira Sans Condensed",
          }}
        />
      </div>
    ))}
  </>
);

export default Form;
