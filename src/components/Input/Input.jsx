import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './Input.css';

const Input = ({ getWeather }) => {
    const [city, setCity] = useState('');
    return (
        <div className="InputBlock">
            <input onChange={(e) => setCity((e.target.value))} placeholder='введите город' />
            <BiSearchAlt onClick={() => { if (city) { getWeather(city) } }} className="BiSearchAlt" />

        </div>
    )
}

export default Input;