'use client'



import { useState } from 'react'

import { supabase } from '@/lib/supabase'



export default function CreateCommunity() {

  const [name, setName] = useState('')

  const [category, setCategory] = useState('')



  const createCommunity = async () => {

    const {

      data: { user },

    } = await supabase.auth.getUser()



    await supabase.from('communities').insert({

      name,

      category,

      created_by: user?.id,

    })

  }



  return (

    <div className="p-6 space-y-4">

      <input

        className="border p-3 w-full"

        placeholder="Community Name"

        onChange={(e) => setName(e.target.value)}

      />



      <input

        className="border p-3 w-full"

        placeholder="Category"

        onChange={(e) => setCategory(e.target.value)}

      />



      <button

        className="bg-green-700 text-white p-3 rounded"

        onClick={createCommunity}

      >

        Create Community

      </button>

    </div>

  )

}