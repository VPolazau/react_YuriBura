import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [value, setValue] = useState(1)
  const [visible, setVisible] = useState(true)

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setValue(v => v - 1)}>-</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <PlanetInfo id={value} />
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
}

const usePlanetName = (id) => {
  const [name, setName] = useState(null)

  useEffect(() => {
    let cencelled = false
    fetch(`https://swapi.py4e.com/api/planets/${id}/`)
      .then(res => res.json())
      .then(data => !cencelled && setName(data.name))
    
    return () => cencelled = true
  }, [id])

  return name;
}

const PlanetInfo = ({ id }) => {
  const name = usePlanetName(id)

  return <div>{id} - {name}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
