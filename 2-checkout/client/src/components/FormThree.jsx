import React, { useState } from 'react';
import axios from 'axios';

const FormThree = ({ currentForm, setCurrentForm, formValues, setFormValues }) => {
  // const [ ] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/shopping', formValues)
      .then(() => {
        setCurrentForm(0);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Card Number:<input name='cardNumber'/></label>
      <hr />
      <label>Expiry Date:<input name='expirtyDate'/></label>
      <hr />
      <label>CVV:<input name='cvv'/></label>
      <hr />
      <label>Billing Zip Code<input name='state'/></label>
      <hr />
      <label>Zip Code:<input name='billingZipCode'/></label>
      <hr />
      <button className='purchase-button' type='submit'>Purchase!</button>
    </form>
  )
}

export default FormThree;