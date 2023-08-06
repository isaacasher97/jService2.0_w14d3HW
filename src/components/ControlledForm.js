import { useState } from "react";


function ControlledForm(props) {

    //state for form data
    const [formData, setFormData] = useState({})
    //
 


    //create a function to handle fetching from jService
    const fetchJservice = async () => {
     
    const url = `http://jservice.io/api/random`
    const response = await fetch(url);    
    const data = await response.json()
    props.setQuestion(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //create a copy of the current state
        fetchJservice(formData)
        setFormData({})
    }
 

    return <div className="form">
        <h2 className="letsPlay">Let's Play!</h2>
        <form onSubmit={handleSubmit}>
            <input type="submit" value={"Get Question"}/>
        </form>
    </div>
}

export default ControlledForm;