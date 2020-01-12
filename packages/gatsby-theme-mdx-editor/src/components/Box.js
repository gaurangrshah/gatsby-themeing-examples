import React from 'react'

export default function Box({ title }) {
  return (
    <div style={{
      background: 'blue',
      width: '100px',
      height: '100px',
      position: 'relative'
    }}>
      <h1>{title || "test"}</h1>
    </div>
  )
}
