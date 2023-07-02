import React from "react"

export default function Forms() {
    const [user, setUser] = React.useState(
        {
            firstName: "", 
            lastName:"", 
            email:"", 
            comments:"", 
            isFriendly: true, 
            employment: "",
            favColor: ""
        }
    )
    console.log(user.favColor)

    function handleChange(event) {
        // console.log(event.target.value)
        const {name, value, type, checked} = event.target
        setUser((prevUser => {
            return {
                ...prevUser,
                [name]: type === "checkbox" ? checked : value
            }
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(user)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={user.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={user.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={user.email}
            />
            <textarea 
                placeholder="comments"
                name="comments"
                onChange={handleChange}
                value={user.comments}
            />
            <input 
                type="checkbox"
                id="isFriendly"
                name="isFriendly"
                checked={user.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={user.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={user.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={user.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={user.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button>submit</button>
        </form>
    )
}