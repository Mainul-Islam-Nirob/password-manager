import React, { useState, useEffect } from "react";
import { useRef } from "react";
import PasswordLIst from "./PasswordList";

const Manager = () => {

    const imgRef = useRef()
    const passwordRef = useRef()

    const [form, setForm] = useState({
        site: "",
        username: "",
        password: ""
    })
    const [passwordArray, setPasswordArray] = useState([])


    useEffect(() => {
      let passwords = localStorage.getItem("passwords");
      if (passwords) {
        setPasswordArray(JSON.parse(passwords))
      }
    }, [])
    
    const showPassword = () => {
        passwordRef.current.type = "text"
        if (imgRef.current.src.includes("icons/eyecross.png")) {
            imgRef.current.src = "icons/eye.png"
            passwordRef.current.type = "text"

        }else {
            imgRef.current.src = "icons/eyecross.png"
        passwordRef.current.type = "password"

        }

    }

    const savePassword = () => { 
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        setForm({
            site: "",
            username: "",
            password: ""
        })
     }

    const handleFormChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"> <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

      <div className=" p-3 md:mycontainer min-h-[88.2vh] ">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
            <input onChange={handleFormChange} value={form.site} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="site" />
            <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                <input onChange={handleFormChange} value={form.username} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="username" />
                <div className="relative">
                    <input onChange={handleFormChange} ref={passwordRef} value={form.password} placeholder='Enter Password' className='rounded-full border border-green-500 w-full pl-4 py-1 pr-7' type="password" name="password" id="password" />
                    <span onClick={showPassword} className='absolute right-[3px] top-[4px] cursor-pointer' >
                        <img ref={imgRef}  className='p-1' width={26} src="icons/eye.png" alt="eye" />
                    </span>
                </div>

            </div>
            <button onClick={savePassword}  className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                <lord-icon
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover" >
                </lord-icon>
                Save</button>
        </div>
        <PasswordLIst passwords={passwordArray}/>
      </div>
    </>
  );
}


export default Manager;

