import React from 'react';


export default function TeamMemberForm (props) {

    const {values, update, submit} = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='inputs'>
            <label> Name
                <input 
                    name='name'
                    type='text'
                    placeholder='Type Name Here'
                    value={values.name}
                    onChange={onChange}
                />
            </label>

            <label> Email
                <input 
                    name='email'
                    type='email'
                    placeholder='Type email here'
                    value={values.email}
                    onChange={onChange}
                /> 
            </label>

            <label> Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>--Select a Role--</option>
                    <option value='Accountant'>Accountant</option>
                    <option value='HR'>HR</option>
                    <option value='Sales'>Sales</option>
                    <option value='Manager'>Manager</option>
                    <option value='AssistantManager'>Assistant to the Manager</option>
                </select>
            </label>

            <div className='submit'>
                <button>submit</button>
            </div>
        </div>
    </form>


)





}