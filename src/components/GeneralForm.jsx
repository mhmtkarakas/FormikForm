import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import '../App.css'; 


const GeneralForm = () => {
    const {values,errors,touched,isSubmitting,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:"",
          password:'',
          confirmPassword:""
        },
        validationSchema:basicSchema,
        onSubmit: (values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }
      });
  return (
    <form onSubmit={handleSubmit}>
        <div className='inputDiv'>
            <label>Email</label>
            <input type="email"
            id='email'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Lutfen Gecerli bir email adresi girin...' 
            value={values.email}
            className={errors.age && touched.age ? 'error' : ''}
            />
            {errors.email && touched.email && <div className='error-message'>{errors.email}</div>}
        </div>
        <div className='inputDiv'>
            <label>Yasiniz</label>
            <input type="number"
            id='age'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Lutfen Yasinizi Giriniz' 
            value={values.age}
            className={errors.age && touched.age ? 'error' : ''}
            />
            {errors.age && touched.age && <div className='error-message'>{errors.age}</div>}
        </div>
        <div className='inputDiv'>
            <label>Sifre</label>
            <input type="password"
            id='password'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Lutfen Sifre Giriniz' 
            value={values.password}
            className={errors.password && touched.password ? 'error' : ''}
            />
            {errors.password && touched.password && <div className='error-message'>{errors.password}</div>}
        </div>
        <div className='inputDiv'>
            <label>Sifre Tekrar</label>
            <input type="password"
            id='confirmPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Lutfen Sifre Giriniz' 
            value={values.confirmPassword}
            className={errors.confirmPassword && touched.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && touched.confirmPassword && <div className='error-message'>{errors.confirmPassword}</div>}
        </div>
        <button disabled={isSubmitting} type='submit'>
          Kaydet
        </button>
    </form>
  )
}

export default GeneralForm