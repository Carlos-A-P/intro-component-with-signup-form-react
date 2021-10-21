import React, {useState} from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo'

const FormSignup = ({submitForm}) => {
    // destructure the values from useForm
    const {handleChange, values, handleSubmit, errors} = useForm(
        submitForm,
        validateInfo
        );
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true)
        setTimeout(function(){ window.location.reload(); }, 1000);
    }
    return (
        <div className="form-content-right">
            {/* ${(!isSubmitted)? '': console.log('success')} */}
            <form className={`form ${(!isSubmitted)? '': 'success'}`} onSubmit={handleSubmit}>
                {/* ${errors.firstname && 'error'} */}
                <div className={`form-control  ${(errors.firstname)? 'error': ''}`}>
                    <input 
                    type="text" 
                    name="firstname" 
                    className="form-input"
                    placeholder="First Name"
                    value={values.firstname}
                    onChange={handleChange}/>
                <i className="fas fa-check-circle fa-lg"></i>
                <i className="fas fa-exclamation-circle fa-lg"></i>       
                {errors.firstname && <small>{errors.firstname}</small>}
                </div>
                <div className={`form-control  ${(errors.lastname)? 'error': ''}`}>
                    <input 
                    type="text" 
                    name="lastname" 
                    className="form-input"
                    placeholder="Last Name"
                    value={values.lastname}
                    onChange={handleChange}/>
                <i className="fas fa-check-circle fa-lg"></i>
                <i className="fas fa-exclamation-circle fa-lg"></i>   
                {errors.lastname && <small>{errors.lastname}</small>}
                </div>
                <div className={`form-control  ${(errors.email)? 'error': ''}`}>
                    <input 
                    type="text" 
                    name="email" 
                    className="form-input"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}/>   
                <i className="fas fa-check-circle fa-lg"></i>
                <i className="fas fa-exclamation-circle fa-lg"></i>   
                {errors.email && <small>{errors.email}</small>}
                </div>
                <div className={`form-control  ${(errors.password)? 'error': ''}`}>
                    <input 
                    type="password" 
                    name="password" 
                    className="form-input"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}/>   
                <i className="fas fa-check-circle fa-lg"></i>
                <i className="fas fa-exclamation-circle fa-lg"></i> 
                {errors.password && <small>{errors.password}</small>}
                </div>
                <button className="btn" type="submit">Claim your free trial</button>
                <p className="disclosure">By clicking the button, you are agreeing to our <a href="https://carlospwd.netlify.app/" className="disText">Terms and Services</a> </p>
            </form>
        </div>
    )
}

export default FormSignup;