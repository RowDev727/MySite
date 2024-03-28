import styles from './AdminLogin.module.css'
import { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { object, string } from 'yup'
import Newsletter from '../../components/newsletter/Newsletter'
import Admin from '../admin/Admin'

const AdminLogin = () => {

    const [formData, setFormData] = useState({
      username: "",
      password: ""
    })

    const [errors, setErrors] = useState({})
    const [formValid, setFormValid] = useState(false)
    const [token, setToken] = useState('')

    const navigate = useNavigate()

    const validationSchema = object({
      username: string().required('Please enter a username'),
      password: string().required('Please enter a password')
    })   
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await validationSchema.validate(formData, {abortEarly:false})
        const data = {
          username: formData.username,
          password: formData.password
        }

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }

        fetch('/api/token', options)
        .then(res => {
          if (res.status === 200) return res.json()
          else alert("Error!")
        })
        .then(data => {
          setToken(data.access_token)
          console.log(token)
          sessionStorage.setItem('token', token)
          
          setFormData({
            username: '',
            password: ''
          })

          navigate('/admin')
        })
        .catch(error => {
          console.error('There was an error', error)
        })
        
      } catch (error) {
        const newErrors = {}
        error.inner.forEach(err => {
          newErrors[err.path] = err.message
        })
        setErrors(newErrors)
      }
    }

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
              {token && <span>Your logged in!</span>}
            </form>
          </div>
        </div>
      </div>
      <div className={`${styles.newsletterSection}`}><Newsletter theme={'light'} /></div>
    </>
  )
}

export default AdminLogin