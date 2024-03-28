import styles from './AdminLogin.module.css'
import { useState, useEffect } from 'react'
import { object, string } from 'yup'
import Newsletter from '../../components/newsletter/Newsletter'

const AdminLogin = () => {

    const [formData, setFormData] = useState({
      username: "",
      password: ""
    })

    const [errors, setErrors] = useState({})
    const [formValid, setFormValid] = useState(false)
    const [accessToken, setAccessToken] = useState('')

    const validationSchema = object({
      username: string().required('Please enter a username'),
      password: string().required('Please enter a password')
    })

    const handleChange = (e) => {
      const {name, value} = e.target 

      setFormData({
        ...formData, 
        [name]: value,
      })
    }

    return (
    <>
      <div className={`${styles.adminLoginPageComponent}`}>
        <div className={`${styles.adminLoginContainer} container`}>
          <h1 className={`${styles.adminLoginTitle}`}>Admin Login</h1>
          <div className={`${styles.adminLoginFormContainer}`}>
            <form className={`${styles.adminLoginForm}`} onSubmit={handleSubmit}>
              <div className={`${styles.adminLoginFormGroup}`}>
                <label className={`${styles.adminLoginFormLabel}`}>Username</label>
                <input 
                    className={`${styles.adminLoginFormInput}`} 
                    type='text'
                    name='username'
                    value={formData.username}
                    placeholder='Enter your username'
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete='off' />
                    {errors.username && <div className={`${styles.adminLoginFormError}`}>{errors.username}</div>}              
              </div>
              <div className={`${styles.adminLoginFormGroup}`}>
                <label className={`${styles.adminLoginFormLabel}`}>Password</label>
                <input 
                    className={`${styles.adminLoginFormInput}`} 
                    type='password'
                    name='password'
                    value={formData.password}
                    placeholder='Enter your password'
                    onChange={handleChange}
                    autoComplete='off' />
                    {errors.name && <div className={`${styles.adminLoginFormError}`}>{errors.password}</div>}              
              </div>
              <button className={`${styles.adminLoginFormSubmitBtn}`} type='submit'>Log in</button>
            </form>
          </div>
        </div>
      </div>
      <div className={`${styles.newsletterSection}`}><Newsletter theme={'light'} /></div>
    </>
  )
}

export default AdminLogin