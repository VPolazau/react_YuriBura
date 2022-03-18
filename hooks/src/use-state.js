import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  )
}

const HookSwitcher = () => {
  const [color, setColor] = useState('white')
  const [fontSize, setFontSize] = useState(30)

  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: color,
      }}
    >
      <button onClick={() => setColor('gray')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize(s => s + 10)}>+</button>
      <button onClick={() => setFontSize(s => s - 10)}>-</button>
      <br></br>
      <div style={{ fontSize: fontSize }}>Hello World!</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
