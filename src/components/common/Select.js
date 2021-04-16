import React from "react";
import PropTypes from "prop-types";

export default function Select(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          //set authorId stringa vuota se il val passato è null
          value={props.value || ""}
        >
          <option value="" />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option>
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

//per Componenti riutilizzabili dichiarare le propTypes per i dati che ci aspettiamo
Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

//PROPS DEFAULT ERROR
Select.defaultProps = {
  error: "",
};
