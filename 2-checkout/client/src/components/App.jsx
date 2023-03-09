import React, { useState } from 'react';
import FormOne from './FormOne.jsx'
import FormTwo from './FormTwo.jsx'
import FormThree from './FormThree.jsx'

const App = () => {
  const [ currentForm, setCurrentForm ] = useState(0);
  const [ formValues, setFormValues ] = useState({});

  const currentRender = () => {
    if (currentForm === 0) {
      return (<button onClick={() => setCurrentForm(1)}>Checkout</button>)
    } else if (currentForm === 1) {
      return (<FormOne currentForm={currentForm} setCurrentForm={setCurrentForm} formValues={formValues} setFormValues= {setFormValues} />)
    } else if (currentForm === 2) {
      return (<FormTwo currentForm={currentForm} setCurrentForm={setCurrentForm} formValues={formValues} setFormValues= {setFormValues} />)
    } else if (currentForm === 3) {
      return (<FormThree currentForm={currentForm} setCurrentForm={setCurrentForm} formValues={formValues} setFormValues= {setFormValues} />)
    }
  }

  return (
    <div>
      <h1>Multistep Checkout</h1>
      {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
      {currentRender()}
    </div>
  )
}

export default App;