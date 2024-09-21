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
  <div>
    {formFields.map((field) => (
      <div key={field.id}>
        <label
          htmlFor={field.id}
          style={{
            display: "inline-block",
            width: "150px",
            padding: "8px",
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
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "12px",
            width: "200px",
            borderRadius: "0.7em",
            border: "0.5px solid black",
            fontFamily: "Fira Sans Condensed",
          }}
        />
      </div>
    ))}
  </div>
);

export default Form;
