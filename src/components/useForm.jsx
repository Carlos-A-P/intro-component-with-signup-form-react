import {useState, useEffect} from 'react'

// custom hook
const useForm = (callback, validateInfo) => {
    // first is values and second is function to update our state
    const[values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // when ever i change something, update the value
    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            // target the [name] of each input
            // [e.target.name]: e.target.value
            [name]: value
        });
    };
    // stops page from refreshing on submit
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
    }
    
    // check when errors updates and if there are any left
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;