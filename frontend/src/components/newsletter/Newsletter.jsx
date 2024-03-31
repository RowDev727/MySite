import { useState } from 'react'
import { object, string } from 'yup'
import styles from './Newsletter.module.css'

const Newsletter = ({theme}) => {

  const [formData, setFormData] = useState({
    email: ""
  })

  const [errors, setErrors] = useState({})
  const [formValid, setFormValid] = useState(false)

  const validationSchema = object({
    email: string().email().required('Please enter an e-mail'),
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await validationSchema.validate(formData, {abortEarly:false})
      console.log('Form Submitted', formData)
      console.log(`Email: ${formData.email}`)

      const data = {email: formData.email}

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }

      const response = await fetch('/api/create_newsletter_contact', options)
      setFormData({
        email: ''
      })

      setFormValid(true)

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
      [name]: value
    })

    
  }

  const handleFocusChange = (e) => {
    setErrors({})

    setFormValid(false)
  }

  return (
    <div className={`${styles.newsletterContainer} ${theme === 'light' ? `${styles.newsletterContainerLight}` : `${styles.newsletterContainerDark}`}`}>
      <div className={`${styles.newsletter} container`}>
        <div className={`${styles.newsletterLeft}`}>
          <h1 className={`${styles.title}`}>Want us to keep in touch?</h1>
          <p className={`${theme === 'light' ? `${styles.textLight}` : `${styles.textDark}`}`}>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className={`${styles.newsletterRight}`}>
          <div className={`${styles.newsletterTop} ${theme === 'light' && `${styles.newsletterTopLight}`}`}>
            <form onSubmit={handleSubmit}>
              <input 
                type='text' 
                name='email'
                value={formData.email} 
                placeholder='E-Mail Address'
                autoComplete='off'
                onFocus={handleFocusChange}
                onChange={handleChange}/>
              <button type='submit' className={`${theme === 'light' && `${styles.btnDark}`}`}>Notify Me</button>
            </form>
            <div className={`${styles.newsletterFormInfo}`}>
              {errors.email && <div className={`${styles.newsletterFormError}`}>{errors.email}</div>}
              {formValid && <div className={`${styles.newsletterFormStatus}`}>Message Sent!</div>}
            </div>
            
          </div>
          <div className={`${styles.newsletterBottom}`}>
            <p className={`${theme === 'light' && `${styles.textDark}`}`}>We care about the privacy of your data, read our</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        </div>
    </div>
  )
}



export default Newsletter