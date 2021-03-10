import React from 'react'

export default ({children}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
    }}
  >
    {children}
  </div>
)
