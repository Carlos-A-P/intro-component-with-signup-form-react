# React-intro-component-with-signup-form

- Live website -(https://intro-component-with-signup-form-react.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/126002233-1ca03e52-19a3-4ae2-a50a-4f2081fb736e.JPG)

### Active image

![active](https://user-images.githubusercontent.com/85038929/126002262-2736b782-427b-41f2-badd-d582eaa1fb35.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript
- React.JS
- React hooks

### What I learned

This is my first React project. I learned a lot about hooks and components; I still need to work/learn more about structure but I'm excited to learn more about ES6 and react features!

- This is my form component where I used react hooks and components to pass on if my form has any errors or not. Once submitted, the page refreshes. I used array destructuring to pass variables to other components.

```JavaScript
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
```

### Questions

- What are some ways that I can make my code look cleaner?
- How can I improve my layout?

### Useful resources

- [React Form Validation Using Custom Hooks Tutorial - Beginner React JS Project](https://www.youtube.com/watch?v=KGFG-yQD7Dw) - this tutorial helped my understand how to format forms in my project and how to implement jsx so that the users can receive a message back

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://carlospwd.netlify.app/)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/Carlos-A-P)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
