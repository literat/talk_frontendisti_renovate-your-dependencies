import React from 'react'

export default ({children, to, style}) => (
  <a
    href={to}
    target="_blank"
    rel="noreferrer"
    style={{ color: '#0fbdcd', fontSize: '26px', ...style}}
  >
    {children ? children : to}
  </a>
)
