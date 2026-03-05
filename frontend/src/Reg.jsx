import { useState } from "react"
import axios from "axios";
function Reg()
{
  const [data,setData]=useState(
    {
      username:"",
      email:"",
      password:""
    }
  )

  const changeName = (e)=>
  {
    setData({...data,[e.target.name]:e.target.value})
  }

  const submit = async () =>
  {
   try
   {
     ///const res= await axios.post("http://localhost:8080/register",data)
     const res= await axios.post("http://frontend.onrender.com/register",data)
    alert(res.data)
   }
   catch(xyz)
   {
         alert(xyz.response?.data|| "Error")
   }

  }


  return(
    <>
      <h1>iam App</h1>
      <input onChange={changeName} name="username" placeholder="enter username"/>
      <input onChange={changeName} name="email" placeholder="enter email"/>
      <input onChange={changeName} name="password" placeholder="enter password"/>
      <button onClick={submit}>Register</button>
    </>
  )
}
export default Reg;












// import { useState } from "react"
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// function Register()
// {
//   const nav=useNavigate()

//   const [data,setdata]=useState(
//     {
//        username:"",
//        email:"",
//        psw:""
//     }
//   )
//   const change = (e)=>
//   {
//     setdata({...data,[e.target.name]:e.target.value})
//   }

//   const submit = async ()=>
//   {
//     const res=await axios.post("http://localhost:8080/register",data)
//     console.log(res)
//     console.log(res.data)
//     alert(res.data)
//     nav("/log")
//   }


//   return(
//     <>
//     <h2>my name is {data.username}</h2>
//     <h2>my email is {data.email}</h2>
//     <h2>my password is {data.psw}</h2>
//      <input onChange={change} name="username" placeholder="create username"/><br/>
//      <input onChange={change} name="email" placeholder="enter email"/><br/>
//      <input onChange={change} name="psw" placeholder="create password"/><br/>
//      <button onClick={submit} >Register</button>
//     </>
//   )
// }
// export default Register