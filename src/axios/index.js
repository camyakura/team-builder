/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuid } from 'uuid'

const initialTeamMemberList = [
  {
    id: uuid(),
    name: 'Michael',
    email: 'michael@michael.com',
    role: 'Manager',
  },
]


export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamMemberList })
  },
  post(url, { name, email, role }) {
    const newTeamMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}