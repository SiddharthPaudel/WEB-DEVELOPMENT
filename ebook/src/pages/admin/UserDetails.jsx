import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import bookService from "../../service/book.service";

const UserDetails = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    bookService
      .getAllUser()
      .then((res) => {
        setUserList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class="card paint-card cardx">
        <div class="card-body">
          <h4 class="form-signin-heading text-center">User Details</h4>

          <table class="table">
            <thead>
              <tr>
              
              </tr>
            </thead>
            <tbody>
              {userList.map((item, num) => (
                <tr key={item.id}>
                  <td>{num + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobNo}</td>
                  <td>
                    {item.address}, {item.city} <br />
                    {item.state} , {item.pincode} 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
