import React from 'react'
import {  Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import '../App.css';


const PortalForm = () => {
  return (
    <>
    <Formik
       initialValues={{ username: '', univercity: '', isAccepted:false }}
       validationSchema={advancedSchema}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       
       }}
      
     >
       {() => (
         <Form>
          <CustomInput
          label="Kullanici adi"
          name="username" 
          type="text"
          placholder="Kullanici Adinizi Giriniz"/>
         </Form>
       )}
     </Formik>
    </>
  )
}

export default PortalForm