import React, { useState } from 'react';

const FormTwo = ({ currentForm, setCurrentForm, formValues, setFormValues }) => {
  // const [ ] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const newValues = Object.assign(data, formValues)
    console.log(newValues);
    setFormValues(newValues);
    setCurrentForm(3);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Address Line 1:<input name='addressOne'/></label>
      <hr />
      <label>Address Line 2:<input name='addressTwo'/></label>
      <hr />
      <label>City:<input name='city'/></label>
      <hr />
      <label>State:<input name='state'/></label>
      <hr />
      <label>Zip Code:<input name='zipCode'/></label>
      <hr />
      <button type='submit'>Next</button>
    </form>
  )
}

export default FormTwo;