import React, { useState } from 'react'

import classes from './Form.module.css'

const Form = props => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [isNameValid,setIsNameValid] = useState(false)
  const [isEmailValid,setIsEmailValid] = useState({
    isValid: false,
    isUsed: false
  })

  const onNameChange = e => {
    let inputValue = e.target.value
    setName(inputValue)
    setIsNameValid(!props.data.some(el => el.name === inputValue))
  }

  const onEmailChange = e => {
    let inputValue = e.target.value
    setEmail(inputValue)
    let isValid = /[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]/.test(inputValue)
    let isUsed = props.data.some(el => el.email === inputValue)
    setIsEmailValid(prev => ({
      isValid,
      isUsed
    }))

  }

  const onSubmit = () => {
    if (isEmailValid.isValid & !isEmailValid.isUsed & isNameValid) {
      props.setData(prev => [...prev, {
        name,
        email
      }])
      onReset()
    } else alert('Please check the form!')
  }

  const onReset = () => {
    setName('')
    setEmail('')
    setIsEmailValid(true)
    setIsNameValid(true)
  }

  const messageEmailError = () => {
    if (!isEmailValid.isValid & email !== '') {
      return <p className={classes.Error}>Email is invalid!</p>
    }
    if (isEmailValid.isUsed) {
      return <p className={classes.Error}>Email has been used!</p>
    }
  }

  const messageNameError = () => {
    if (!isNameValid & name !== '') {
      return <p className={classes.Error}>Name has been used!</p>
    }
  }

  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input 
            onChange={onNameChange}
            value={name}
            className="input" 
            type="text" 
            placeholder="Name"
            />
          { messageNameError() }
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            onChange={onEmailChange} 
            value={email}
            className="input" 
            type="text" 
            placeholder="Email"
          />
          { messageEmailError() }
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button 
            className="button is-link"
            onClick={onSubmit}
            >Submit
          </button>
        </div>
        <div className="control">
          <button 
            className="button is-link is-light"
            onClick={onReset}
            >Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
