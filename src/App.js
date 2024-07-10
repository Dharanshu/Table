import React, { useEffect, useState } from "react";
import Table from "./components/Table";

function App() {
// set state
  const [users, setUsers] = useState([]);

// first data grab
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data)
      });
  }, []);

// update customers on page after edit
  function onUpdateUser(updatedCustomer) {
    const updatedCustomers = users.map(
      customer => {
        if (customer.id === updatedCustomer.id) {
          return updatedCustomer
        } else {return customer}
      }
    )
    setUsers(updatedCustomers)
  } 

  return (
    <div>
      <Table
        users={users}
        onUpdateUser={onUpdateUser}
      />
    </div>
  );
}
export default App;