import React from 'react'
const Form = (props) => {
return (
    <form onSubmit={props.getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                    />
                <button type="submit">Get Forecast</button>
            </form>
)
}
export default Form