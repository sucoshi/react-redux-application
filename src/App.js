import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 30 },
    { name: "Jiro", age: 28 },
    { }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>My name is {props.name} and {props.age} years old.</div>
}

User.defaultProps = {
  name : "Noname",
  age: 1
}

export default App;
