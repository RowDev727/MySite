import styles from './Contact.module.css'
import Newsletter from '../../components/newsletter/Newsletter'
import { useState } from 'react'
import { object, string } from 'yup'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaEnvelopeOpenText } from 'react-icons/fa6'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [errors, setErrors] = useState({})
  const [formValid, setFormValid ] = useState(false)

  const validationSchema = object({
    name: string().required('Please enter a name'),
    email: string().email().required('Please enter an e-mail'),
    message: string().required('Please enter a message')
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
        email: formData.email,
        message: formData.message
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      const response = await fetch('/api/create_message', options)
      setFormData({
        name: '',
        email: '',
        message: ''
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
      <div className={`${styles.contactPageComponent}`}>
        <div className={`${styles.contactContainer} container`}>
          <div className={`${styles.contactHeading}`}>
            <h3 className={`${styles.contactHeadingTitle}`}>Contact Us</h3>
            <h1>Get in Touch</h1>
          </div>
          <div className={`${styles.contactBody}`}>
            <div className={`${styles.contactLeft}`}>
              <h2 className={`${styles.contactLeftTitle}`}>Send us a message<FaEnvelopeOpenText/></h2>
              <p className={`${styles.contactLeftText}`}>Feel free to reach out through contact form or find our contact information below.  Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our community and customers.</p>
              <ul>
                <li className={`${styles.contactLeftInfo}`}><FaEnvelope/><p className={`${styles.contactLeftInfoText}`}>Rowdie@RowdieDevs.com</p></li>
                <li className={`${styles.contactLeftInfo}`}><FaPhoneVolume/><p className={`${styles.contactLeftInfoText}`}>Coming Soon!</p></li>
                <li className={`${styles.contactLeftInfo}`}><FaLocationDot/><p className={`${styles.contactLeftInfoText}`}>Pinellas County FL, United States</p></li>
              </ul>
            </div>
            <div className={`${styles.contactRight}`}>
              <form className={`${styles.contactForm}`} onSubmit={handleSubmit}>
                <div className={`${styles.contactFormGroup}`}>
                  <label className={`${styles.contactFormLabel}`}>Your Name</label>
                  <input 
                    className={`${styles.contactFormInput}`} 
                    type='text'
                    name='name'
                    value={formData.name}
                    placeholder='Enter your name'
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete='off' />
                    {errors.name && <div className={`${styles.contactFormError}`}>{errors.name}</div>}
                </div>
                <div className={`${styles.contactFormGroup}`}>
                  <label className={`${styles.contactFormLabel}`}>E-mail Address</label>
                  <input
                    className={`${styles.contactFormInput}`} 
                    type='text'
                    name='email'
                    value={formData.email}
                    placeholder='Enter your e-mail'
                    onChange={handleChange}
                    autoComplete='off' />
                    {errors.email && <div className={`${styles.contactFormError}`}>{errors.email}</div>}
                </div>
                <div className={`${styles.contactFormGroup}`}>
                  <label className={`${styles.contactFormLabel}`}>Message</label>
                  <textarea 
                    className={`${styles.contactFormInput} ${styles.contactFormInputTextarea}`}
                    name='message'
                    value={formData.message}
                    rows='6'
                    placeholder='Enter your message'
                    onChange={handleChange}
                    autoComplete='off'>
                    {errors.message && <div className={`${styles.contactFormError}`}>{errors.message}</div>}
                  </textarea>
                  {errors.message && <div className={`${styles.contactFormError}`}>{errors.message}</div>}
                </div>
                <button className={`${styles.contactFormSubmitBtn}`} type='submit'>Submit</button>
                {formValid && <div className={`${styles.contactFormStatus}`}>Message Sent!</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div><Newsletter theme={'light'}/></div>
    </>
  )
}

export default Contact