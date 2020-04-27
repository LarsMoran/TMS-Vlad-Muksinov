import React, {useState} from 'react'
import Conditions from '../src/conditions'
import Form from '../src/form'
const Forecast = () => {
    let [city, setCity] = useState('')
    let [responseObj, setResponseObj] = useState({})
    function getForecast(e) {
        e.preventDefault()
        fetch(`http://api.weatherstack.com/current?access_key=f7fbc6b9c5d16a6419e5597c3d6f5030&query=${city}`)
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
            
        })
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <Form city={city} setCity={setCity} getForecast={getForecast}></Form>
            <Conditions responseObj={responseObj}></Conditions>
            
        </div>
    )
}
export default Forecast