import React, { useState } from 'react';

const FormOne = ({ currentForm, setCurrentForm, formValues, setFormValues }) => {
  // const [ ] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setFormValues(data);
    setCurrentForm(2);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:<input name='name'/></label>
      <hr />
      <label>Email:<input name='email'/></label>
      <hr />
      <label>Password:<input name='password'/></label>
      <hr />
      <button type='submit'>Next</button>
    </form>
  )
}

export default FormOne;