import { useState } from "react"

export default function LoginPage({loginUser}) {
  const [newUser, setNewUser] = useState({
		username: ''
	})

  function handleAddUser(evt) {
    evt.preventDefault();
    loginUser(newUser);
    // setNewUser('');
  }
	function handleChange(evt){
		setNewUser({...newUser, [evt.target.name]: evt.target.value})
		console.log(evt.target);
	}
  return (
    <div className="login">
			<h2>Please enter your desired username below</h2>
			<form onSubmit={handleAddUser}>
				<label >
					Username
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
