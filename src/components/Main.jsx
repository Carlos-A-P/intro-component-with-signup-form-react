import React from 'react'

export default function Main() {
    return (
<div>
    <main>
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
            <form className="form" id="form">

                <div className="form-control">
                <input type="text" placeholder="First Name" id="firstname"/>
                <i className="fas fa-check-circle fa-lg"></i>
                <i className="fas fa-exclamation-circle fa-lg"></i>
                <small>Error message</small>
                </div>
                
                <div className="form-control">
                <input type="text" placeholder="Last Name" id="lastname"/>
                <i className="fas fa-check-circle fa-lg"></i>
                <i className="fas fa-exclamation-circle fa-lg"></i>
                <small>Error message</small>
                </div>

                <div className="form-control">
                <input type="text" placeholder="Email Address" id="email"/>
                <i className="fas fa-check-circle fa-lg"></i>
                <i className="fas fa-exclamation-circle fa-lg"></i>
                <small>Error message</small>
                </div>

                <div className="form-control">
                <input type="password" placeholder="Password" id="password"/>
                <i className="fas fa-check-circle fa-lg"></i>
                <i className="fas fa-exclamation-circle fa-lg"></i>
                <small>Error message</small>
                </div>


                <button className="btn">Claim your free trial</button>
                <p className="disclosure">By clicking the button, you are agreeing to our <a href="https://carlospwd.netlify.app/" className="disText">Terms and Services</a> </p>
            </form>
            </div>
        </div>
    </main>
</div>
    )
}
