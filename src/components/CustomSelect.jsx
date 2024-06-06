import { useField } from "formik";
import React from "react";
import "../App.css";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //console.log(field,meta);
  return (
    <>
      <label>{label}</label>
      <select {...field} {...props} className={meta.error ? "error" : ""} />
      {meta.error && <div className="error-message">{meta.error}</div>}
    </>
  );
};

export default CustomSelect;
