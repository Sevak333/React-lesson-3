import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './userList';

function App() {
  const [users, setUsers] = useState([
    {
      id: 101,
      name: "Tiko",
      salary: 300000
    }, {
      id: 102,
      name: "Ani",
      salary: 400000
    }, {
      id: 103,
      name: "Sevak",
      salary: 500000
    }, {
      id: 104,
      name: "Narek",
      salary: 500000
    }, {
      id: 105,
      name: "Armen",
      salary: 10000000
    }, {
      id: 106,
      name: "Anna",
      salary: 700000
    },
  ]);

  const salaryUp = id => setUsers(users.map(elm => 
    elm.id != id ? elm : { ...elm, salary: elm.salary + 50000 }))
  

  const salaryDown = id => {
    setUsers(users.map(elm => 
      elm.id != id ? elm : { ...elm, salary: elm.salary - 50000 < 50000 ? 50000: elm.salary - 50000}))
      
    // setUsers(users.map(elm => {
    //   if (elm.id != id) {
    //     return elm
    //   } else {
    //     const diff = elm.salary - 50000
    //     elm.salary = diff < 50000 ? 50000: diff
    //     return elm
    //   }
    // }
    // ));
  }

  const salaryRemove = id => setUsers(users => users.filter(elm => elm.id !== id))


  return (
    <>
      <UserList items={users} onSalaryUp={salaryUp} onSalaryDown={salaryDown} onSalaryRemove={salaryRemove}></UserList>
    </>
  )
}

export default App