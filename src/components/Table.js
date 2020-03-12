import React from 'react'

import classes from './Table.module.css'

const Table = props => {
  const renderData = () => {
    return props.data.map(el => {
      return (
        <tr key={el.name}>
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>
              <button
                className={classes.ButtonDelete}
                onClick={() => onDeleteOne(el.name)}
              >Delete</button>
            </td>
        </tr>
      )
    })
  }

  const onDeleteOne = name => {
    props.setData(prev => prev.filter(el => el.name !== name))
  }

  const onDeleteAll = () => {
    props.setData([])
  }

  return (
    <div className={classes.Container}>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>
              <button 
                className={classes.ButtonDelete}
                onClick={onDeleteAll}
              >Delete All</button>
            </th>
          </tr>
        </thead>
        <tbody>
          { renderData() }
        </tbody>
      </table>
    </div>
  )
}

export default Table
