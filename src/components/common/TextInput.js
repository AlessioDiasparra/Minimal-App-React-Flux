import React from "react";
import PropTypes from "prop-types";

export default function TextInput(props) {
  //classe css dinamica
  let wrapperClass = "form-group"; //DEFAULT CLASS BOOTSTRAP
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}
//per Componenti riutilizzabili dichiarare le propTypes per i dati che ci aspettiamo
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};
//PROPS DEFAULT ERROR
TextInput.defaultProps = {
  error: "",
};
