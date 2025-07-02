import React from 'react'

export const Estudiantes = ( {img, name, role, description} ) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <strong>{role}</strong>
      <p>{description}</p>
    </div>
  )
}
