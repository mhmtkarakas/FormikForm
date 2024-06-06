import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import "../App.css";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const PortalForm = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", univercity: "", isAccepted: false }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanici adi"
              name="username"
              type="text"
              placholder="Kullanici Adinizi Giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="univercity"
              placholder="Universitenizi Seciniz"
            >
              <option value="">Lutfen Universitenizi Giriniz</option>
              <option value="bogazici">Bogazici Universitesi</option>
              <option value="gsu">Galatasaray Universitesi</option>
              <option value="dicle">Dicle Universitesi</option>
              <option value="itu">ITU</option>
              <option value="diger">Diger</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="formLink" to="/">Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PortalForm;
