import React from 'react'
import FormSignup from './FormSignup'

export default function Form() {
    // const [isSubmitted, setIsSubmitted] = useState(false);
    // function submitForm() {
    //     setIsSubmitted(true)
    // }
    return (
        <div className="main">
            <div className="wrap">
                <div className="text">
                    <h1>Learn to code by watching others</h1>
                    <p className="text">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                    but understanding how developers think is invaluable. </p>
                </div>
                <div className="signUp">
                    <div className="top">
                        <p className="info"><span className="topInfo">Try it free 7 days</span> then $20/mo. thereafter</p>
                    </div>
                    <FormSignup/> 
                </div>
            </div>
        </div> 
    )  
}
