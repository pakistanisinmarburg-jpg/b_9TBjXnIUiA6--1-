'use client'



import { useState } from 'react'

import { supabase } from '@/lib/supabase'



export default function LoginPage() {

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')



  const login = async () => {

    await supabase.auth.signInWithPassword({

      email,

      password,

    })

  }



  const signup = async () => {

    await supabase.auth.signUp({

      email,

      password,

    })

  }



  return (

    <div className="p-6 max-w-md mx-auto space-y-4">

      <input

        className="border p-3 w-full"

        placeholder="Email"

        onChange={(e) => setEmail(e.target.value)}

      />



      <input

        type="password"

        className="border p-3 w-full"

        placeholder="Password"

        onChange={(e) => setPassword(e.target.value)}

      />



      <button

        className="bg-green-700 text-white p-3 w-full rounded"

        onClick={login}

      >

        Login

      </button>



      <button

        className="border p-3 w-full rounded"

        onClick={signup}

      >

        Signup

      </button>

    </div>

  )

}