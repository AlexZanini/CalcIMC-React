// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const DisplayBMI = ({ bmi, classification }) => (
  <div>
    <h1>Seu IMC: {bmi}</h1>
    <h2>Classificação: {classification}</h2>
  </div>
);

export default DisplayBMI;
