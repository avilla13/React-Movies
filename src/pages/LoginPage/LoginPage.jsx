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
    <>
			<h1>LoginPage</h1>
			<form onSubmit={handleAddUser}>
				<label >
					<input
						name="username"
						onChange={handleChange}
						value={newUser.username}						
						type="text"						
					/>
				</label>
				<button >Login</button>
			</form>
    </>
  )
}
