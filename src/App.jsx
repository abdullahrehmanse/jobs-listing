import React from 'react'

const App = () => {
  const namesArray = ['Abdullah', 'Waqar', 'Ashar', 'MD'];
  const loggedIn = false;
  return (
    <>
      <div className='text-2xl'>App</div>
      <ul>
        {namesArray.map((name, index) => (
           <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h2>Logged In</h2> : <h2>Logged Out</h2>}
    </>
  )
}

export default App