import styles from './Contact.module.css'
import Newsletter from '../../components/newsletter/Newsletter'
import { useState } from 'react'
import { object, string } from 'yup'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })

  const [errors, setErrors] = useState({})
  const [formValid, setFormValid ] = useState(false)

  const validationSchema = object({
    name: string().required('Please enter a name'),
    email: string().email().required('Please enter an e-mail'),
  })


  const handleSubmit = async (e) => {
    // Prevent Refresh
    e.preventDefault()
    // Validate Form and catch errors
    try {
      await validationSchema.validate(formData, {abortEarly:false})
      console.log('Form Submitted', formData)
      console.log(`Name: ${formData.name}`)
      // Send data to backend
      const data = {
        name: formData.name,
        email: formData.email
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      const response = await fetch('/api/create_contact', options)
      setFormData({
        name: '',
        email: ''
      })
      setFormValid(true)

    } catch (error) {
      // Push any errors to newErrors object
      const newErrors = {}
      error.inner.forEach(err => {
        newErrors[err.path] = err.message
      })
      // Show errors in dom
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
      <div className={`${styles.contactPageContainer}`}>
        <div className={`${styles.contactFormContainer} container`}>
          <form className={`${styles.contactForm}`} onSubmit={handleSubmit}>
            <div className={`${styles.contactFormGroup}`}>
              <label className={`${styles.contactFormLabel}`}>Name:</label>
              <input 
                className={`${styles.contactFormInput}`} 
                type='text'
                name='name'
                value={formData.name}
                placeholder='Enter your name'
                onChange={handleChange} />
                {errors.name && <div className={`${styles.contactFormError}`}>{errors.name}</div>}
            </div>
            <div className={`${styles.contactFormGroup}`}>
              <label className={`${styles.contactFormLabel}`}>Email:</label>
              <input
                className={`${styles.contactFormInput}`} 
                type='text'
                name='email'
                value={formData.email}
                placeholder='Enter your e-mail'
                onChange={handleChange} />
                {errors.email && <div className={`${styles.contactFormError}`}>{errors.email}</div>}
            </div>
            {/* <div className={`${styles.contactFormGroup}`}>
              <label className={`${styles.contactFormLabel}`}>Message:</label>
              <textarea 
                className={`${styles.contactFormTextarea}`}
                name='message'
                rows='6'
                placeholder='Enter your message'
                onChange={handleChange}>
              </textarea>
              {errors.message && <div className={`${styles.contactFormError}`}>{errors.message}</div>}
            </div> */}
            <button className={`${styles.contactFormSubmitBtn}`} type='submit'>Submit</button>
            {formValid && <div className={`${styles.contactFormStatus}`}>Form Submitted!</div>}
          </form>
        </div>
      </div>
      <div><Newsletter /></div>
    </>
  )
}

export default Contact