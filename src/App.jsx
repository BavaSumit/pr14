
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setStudent({
      name: name,
      email: email,
      course: course
    });
  }

  return (
    <div>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {student && (
        <div>
          <h2>Registration Successful</h2>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  );
}
