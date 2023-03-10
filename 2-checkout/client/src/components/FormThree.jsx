import React, { useEffect } from 'react';
import axios from 'axios';

const FormThree = ({ currentForm, setCurrentForm, formValues, setFormValues }) => {
  // useEffect(() => {
  //   axios.post('/shopping', formValues)
  //     .then(() => {
  //       setCurrentForm(0);
  //     })
  //     .catch((err) => console.log(err));
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const newValues = Object.assign(data, formValues)
    setFormValues(newValues, sendData);
  }

  const sendData = () => {
    axios.post('/shopping', formValues)
      .then(() => {
        setCurrentForm(0);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Card Number:<input maxLength='16' name='cardnumber'/></label>
      <hr />
      <label>Expiry Date:<input placeholder='Ex: MM/YY' maxLength='5' name='expiryDate'/></label>
      <hr />
      <label>CVV:<input maxLength='3' name='cvv'/></label>
      <hr />
      <label>Billing Zip Code<input maxLength='5' name='billingZip'/></label>
      <hr />
      <button className='purchase-button' type='submit'>Purchase!</button>
    </form>
  )
}

export default FormThree;