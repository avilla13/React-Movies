import { useState } from "react"
import './LoginPage.css';

export default function LoginPage({loginUser}) {
  const [newUser, setNewUser] = useState({
		username: ''
	})

  function handleAddUser(evt) {
    evt.preventDefault();
    loginUser(newUser);    
  }
	
	function handleChange(evt){
		setNewUser({...newUser, [evt.target.name]: evt.target.value})
		console.log(evt.target);
	}
  return (
    <div className="login">
      <form onSubmit={handleAddUser} className="login-form">
        <h2>Please enter your desired username below</h2>
        <label >
          <h4>Username: </h4>
          <input
            name="username"
            onChange={handleChange}
            value={newUser.username}						
            type="text"						
          />
        </label>
        <button >Sign In</button>
      </form>
    </div>
  )
}
