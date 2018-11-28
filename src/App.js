import React from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    { name: "Taro", age: 30 },
    { name: "Jiro", age: 28 },
    { name: "NoName", age:47 }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
