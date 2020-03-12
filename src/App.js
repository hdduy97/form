import React, { useState } from 'react'

import Form from './components/Form'
import Table from './components/Table'

import classes from './App.module.css'

const App = () => {
  const [data,setData] = useState([])

  return (
    <div className={classes.Container}>
      <Form setData={setData} data={data}/>
      <Table setData={setData} data={data} />
    </div>
  )
}

export default App
