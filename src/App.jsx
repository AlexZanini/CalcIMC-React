import React from 'react';
import Calculadora from './componentes/calculadora';
import DisplayBMI from './componentes/display';
import './style.css'

function App() {
  const [bmi, setBmi] = React.useState(null);
  const [classification, setClassification] = React.useState("");

  const calculateBmi = (height, weight) => {
    const calculatedBmi = (weight / ((height / 100) ** 2)).toFixed(2);
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) {
      setClassification('Abaixo do peso');
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      setClassification('Peso normal');
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      setClassification('Sobrepeso');
    } else {
      setClassification('Obesidade');
    }
  };

  return (
    <div className="App">
      <Calculadora onCalculate={calculateBmi} />
      {bmi && <DisplayBMI bmi={bmi} classification={classification} />}
    </div>
  );
}

export default App;
