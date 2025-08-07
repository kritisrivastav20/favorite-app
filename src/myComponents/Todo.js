import React from 'react'

export default function Todo({ todo, onDelete }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{todo.name}</h5>
          <p className="card-text">{todo.desc}</p>
          <a href="#" className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</a>
        </div>
      </div>
    </div>
  )
}
