import React from 'react'
import { useFormik } from 'formik';

const GeneralForm = () => {
    const {values,error,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
        },
      });
  return (
    <form>
        <div>
            <label>Email</label>
            <input type="email"
            id='email'
            onChange={handleChange}
            placeholder='Lutfen Gecerli bir email adresi girin...' 
            value={values.email}
            />
        </div>
    </form>
  )
}

export default GeneralForm