import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const UserForm = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    // helper functions
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Thank you for signing up! ${user.email}`)

        // reset the values
        setUser({
            email: '',
            password: ''
        })
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={(event) => {setUser({...user, email: event.target.value})}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={user.password} onChange={(event) => {setUser({...user, password: event.target.value})}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default UserForm