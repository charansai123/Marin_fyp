import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import testFunction from './runtests';
function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [num5, setNum5] = useState('');
  const [num6, setNum6] = useState('');
  const [result, setResult] = useState(null);

  const handleTest = () => {
    const testValue = testFunction({ num1, num2, num3, num4, num5, num6 });
    setResult(testValue)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult(null);
    const response = await axios.post('http://localhost:5000/runmodelapi', { num1, num2, num3, num4, num5, num6 });
    console.log(response)
    setResult(response.data.result);
    handleTest();
  };

  let dialysisType = null;
  if (result === "0") {
    dialysisType = "CAPD";
  } else if (result === "1") {
    dialysisType = "APD";
  }

  return (
    <div className={"container"}>
      <h1 className={"header"}>Dialysis Type Prediction App</h1>
      <form onSubmit={handleSubmit} className={"form"}>
        {[
          { label: 'Systolic Pressure', state: num1, setState: setNum1, minVal: 100, maxVal: 160 },
          { label: 'Diastolic Pressure', state: num2, setState: setNum2, minVal: 60, maxVal: 90 },
          { label: 'Heart Rate', state: num3, setState: setNum3, minVal: 60, maxVal: 120 },
          { label: 'Random Blood Sugar', state: num4, setState: setNum4, minVal: 60, maxVal: 450 },
          { label: 'Temperature', state: num5, setState: setNum5, minVal: 90, maxVal: 107 },
          { label: 'Ultra Filtrate', state: num6, setState: setNum6, minVal: 700, maxVal: 2000 },
        ].map(({ label, state, setState, minVal, maxVal }) => (
          <React.Fragment key={label}>
            <label className={"label"}>
              {label}:
              <span className={"range"}>
                [{minVal} - {maxVal}]
              </span>
              <input
                type="number"
                value={state}
                onChange={(event) => setState(event.target.value)}
                className={"input"}
              />

            </label>

            {state !== '' && (Number(state) < minVal || Number(state) > maxVal) && (
              <div className={"error"}>Value is out of range</div>
            )}
            <br />
          </React.Fragment>
        ))}
        <button type="submit" className={"button"}>
          Predict
        </button>
        <center>
          <h5 className={'header2'}>APD : Automated Peritoneal Dialysis</h5>
        </center>
        <center>
          <h5 className={'header2'}>CAPD : Continuous Ambulatory Peritoneal Dialysis</h5>
        </center>

      </form>
      {result !== null && (
        <h4 className={"result"}>
          Dialysis type is {dialysisType}.
        </h4>
      )}
    </div>
  );
}

export default App;
