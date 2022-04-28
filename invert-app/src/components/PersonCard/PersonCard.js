import React, { useState } from 'react';


const PersonCard = ({ nombre, apellido, edad, colorCabello }) => {

    return (

        <div className='card'>
            <h1>{nombre} {apellido}</h1>
            <p>Edad: {edad}</p>
            <p>Color de cabello: {colorCabello}</p>
        </div>

    );
}

export default PersonCard;