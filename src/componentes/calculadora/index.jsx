import React from 'react';

// eslint-disable-next-line react/prop-types
const Calculadora = ({ onCalculate }) => {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCalculate(height, weight);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Altura (cm):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
      </label>
      <label>
        Peso (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
      </label>
      <input type="submit" value="Calcular IMC" />
    </form>
  );
};

export default Calculadora;
