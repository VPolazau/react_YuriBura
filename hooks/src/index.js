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
        fontSize: fontSize,
      }}
    >
      <button onClick={() => setColor('gray')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize(s => s + 2)}>+</button>
      <br></br>
      Hello World!
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
