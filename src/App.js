import './App.css';
import React, {useState, useEffect} from 'react'
import TeamMember from './components/TeamMember'
import TeamMemberForm from './components/TeamMemberForm'
import axios from './axios';

const initialValues = {
  name:'',
  email:'',
  role:''
}

function App() {

  const [teamMember, setTeamMember] = useState([])

  const [formValues, setFormValues] = useState(initialValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]:inputValue})
  }

  const submitForm = () => {
    const newTeamMember ={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    axios.post('fakeapi.com', newTeamMember)
      .then(res => {
        setTeamMember([res.data, ...teamMember])
        setFormValues(initialValues)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('fakeapi.com')
      .then(res => {
        console.log(res.data)
        setTeamMember(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='container'>
      <h1>Team Member Form</h1>
      <TeamMemberForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        teamMember.map(member => {
          return (
            <TeamMember key={member.id} details={member} />
          )
        })
      }
    </div>
  )
}

export default App;
