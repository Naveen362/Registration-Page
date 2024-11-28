// import React from "react";
// import { useState } from "react";
// import axios from "axios";



// export default function Registration(){

//    var[userdata,setuserdata]=useState({
//       firstname:'',
//       lastname:'',
//       phonenum:'',
//       email:'',
//       password:'',
//       password1:'',
      
//    })
//    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//    const lettersOnlyRegex = /^[A-Za-z]+$/;



//    const sprfunction=(e)=>{
// setuserdata({...userdata,[e.target.name]:e.target.value})
//    }
//    const clientvalidation=()=>{
//       if (phoneRegex.test(userdata.phonenum)){
//          alert("phone number wrong")
//          return false;
//       }
//       else if(passwordRegex.test(userdata.password)){
//          alert("password wrongs")
//          return false;
//       }
//       else if(lettersOnlyRegex.test(userdata.firstname)){
//          alert("contains wrong for first name")
//          return false;
//       }
//       else if(userdata.password !=userdata.password1){
//          alert("enter the Password correctly")
//       }
//       else {
//          return true;
         
//       }
      
//    }
//    let formSubmit=(e)=>{
//      e.preventDefault()
//      if (clientvalidation()){
//       //   axios.post("",userdata)
//         alert("values entered successfully")
//         console.log(userdata)
//      }
//      console.log(userdata)
//    //   setuserdata({
//    //    firstname:'',
//    //    lastname:'',
//    //    phonenum:'',
//    //    email:'',
//    //    password:'',
//    //    password1:'',
//    //    conformpassword:''
//    // })
//    }
// return(
//     <div className="container p-2 mt-5 w-25 shadow-lg rounded bg-light">
//         <h1 className="text-center text-secondary">Documentation</h1>
//         <form onSubmit={(e)=>formSubmit(e)}>
//      <div className="mb-3">
//         <label for="first_name" className="form-label">First_Name</label>
//         <input type="text" className="form-control" id="first_name" placeholder="Enter Your First Name" name="firstname"  required value={userdata.firstname} onChange={(e)=>sprfunction(e)}/>
//         <div className="">{userdata.firstname.length >0 && (!lettersOnlyRegex.test(userdata.firstname))&& <p className="text-danger">Numbers and spaces are not allowed</p>}</div>
//      </div>
//      <div className="mb-3">
//         <label for="last_name" className="form-label">
//             Last_Nam
//         </label>
//         <input type="text" className="form-control" id="last_name" name="lastname" placeholder="Enter your Last Name" required value={userdata.lastname} onChange={(e)=>sprfunction(e)}/>
//         <div className="">{userdata.lastname.length >0 && (!lettersOnlyRegex.test(userdata.lastname))&& <p className="text-danger">Numbers and spaces are not allowed</p>}</div>

//      </div>
//      <div className="mb-3">
//         <label for="email" className="form-label">Email</label>
//         <input type="email" 
//         id="email" className="form-control" name="email" placeholder="xyz@email.com" required value={userdata.email} onChange={(e)=>sprfunction(e)}/>
        
//      </div>
//      <div className="mb-3">
//       <label for="phonenumber" className="form-label">Phone Number</label>
//       <input type="tel" className="form-control" id="phonenumber" name="phonenum" placeholder="Enter your mobile number...+91-" maxLength={10} value={userdata.phonenum} onChange={(e)=>sprfunction(e)}/>
//       <div className="">{userdata.phonenum.length >0 && (lettersOnlyRegex.test(userdata.phonenum))&& <p className="text-danger"> and spaces are not allowed</p>}</div>

//      </div>
//      <div className="mb-3">
//         <label for="password" className="form-label">Password</label>
//         <input type="password" className="form-control" placeholder="Password must be 8" name="password" id="password" required value={userdata.password} onChange={(e)=>sprfunction(e)}/>
//         <div className="">{userdata.password.length >0 && (passwordRegex.test(userdata.password)) && <p className="text-danger">ENTER</p>}</div>

//      </div>
//      <div className="mb-3">
//         <label for="conform_password" className="form-label">
//             Conform-Password
//         </label>
//         <input type="password" className="form-control" id="conform-password" name="password1" placeholder="re-enter password" required value={userdata.password1} onChange={(e)=>sprfunction(e)}/>
//      </div>
//      <div className="d-flex justify-content-center">
//           <button type="submit" className="btn btn-primary">Register</button>
//         </div>        </form>
        
//     </div>
// )
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Registration() {
  const [userdata, setuserdata] = useState({
    firstname: '',
    lastname: '',
    phonenum: '',
    email: '',
    password: '',
    password1: ''
  });

  // Regular expressions for validation
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const lettersOnlyRegex = /^[A-Za-z]+$/;

  // Handle form data change
  const sprfunction = (e) => {
    setuserdata({ ...userdata,[e.target.name]: e.target.value });
  };
useEffect(()=>{})
  // Client-side validation function
  const clientvalidation = () => {
    if (!phoneRegex.test(userdata.phonenum)) {
      alert("Phone number is invalid.");
      return false;
    } else if (!passwordRegex.test(userdata.password)) {
      alert("Password is invalid.");
      return false;
    } else if (!lettersOnlyRegex.test(userdata.firstname))  {
      alert("First name contains invalid characters.");
      return false;
    } else if (!lettersOnlyRegex.test(userdata.lastname)) {
      alert("Last name contains invalid characters.");
      return false;
    } else if (userdata.password !== userdata.password1) {
      alert("Passwords do not match.");
      return false;
    } else {
      return true;
    }
  };

  // Form submission
  const formSubmit = (e) => {
    e.preventDefault();
    if (clientvalidation()) {
      // Submit form data here (e.g., axios.post) axios.post("NAVEEN GTA",8688856313)
      alert("Values entered successfully");
      console.log(userdata);
    }
  };

  return (
    <div className="container p-2 mt-5 w-25 shadow-lg rounded bg-light">
      <h1 className="text-center text-secondary">Registration</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            placeholder="Enter Your First Name"
            name="firstname"
            required
            value={userdata.firstname}
            onChange={sprfunction}
          />
          {userdata.firstname.length > 0 && !lettersOnlyRegex.test(userdata.firstname) &&
            <p className="text-danger">Only letters are allowed.</p>
          }
        </div>

        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="lastname"
            placeholder="Enter Your Last Name"
            required
            value={userdata.lastname}
            onChange={sprfunction}
          />
          {userdata.lastname.length > 0 && !lettersOnlyRegex.test(userdata.lastname) &&
            <p className="text-danger">Only letters are allowed.</p>
          }
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            placeholder="xyz@email.com"
            required
            value={userdata.email}
            onChange={sprfunction}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phonenumber" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phonenumber"
            name="phonenum"
            placeholder="Enter Your Mobile Number"
            maxLength={10}
            value={userdata.phonenum}
            onChange={sprfunction}
          />
          {userdata.phonenum.length > 0 && !phoneRegex.test(userdata.phonenum) &&
            <p className="text-danger">Enter a valid 10-digit phone number.</p>
          }
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password must be 8 characters with uppercase and lowercase letters"
            name="password"
            id="password"
            required
            value={userdata.password}
            onChange={sprfunction}
          />
          {userdata.password.length > 0 && !passwordRegex.test(userdata.password) &&
            <p className="text-danger">Password must be at least 8 characters with uppercase, lowercase, and numbers.</p>
          }
        </div>

        <div className="mb-3">
          <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            name="password1"
            placeholder="Re-enter password"
            required
            value={userdata.password1}
            onChange={sprfunction}
          />
          {userdata.password1.length > 0 && userdata.password !== userdata.password1 &&
            <p className="text-danger">Passwords do not match.</p>
          }
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}
