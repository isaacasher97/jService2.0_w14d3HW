import { useState } from "react";


function ControlledForm(props) {

    //state for form data
    const [formData, setFormData] = useState({})

    return <div className="form">
        <h2>Let's Play!</h2>
        <form>
            <input type="submit" value={"Get Question"}/>
        </form>
    </div>
}

export default ControlledForm;