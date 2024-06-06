import { useField } from "formik";
import React from "react";
import "../App.css";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //console.log(field,meta);
  return (
    <>
   <div  className="checkbox">
   <input {...field} {...props} className={meta.error ? "error" : ""} />
      {meta.error && <div className="error-message">{meta.error}</div>}
      <span>Kullanim Kosullarini Kabul Ediyorum</span>
   </div>
  
    
    </>
  );
};

export default CustomCheckbox;