

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const createTask = async (formData) => {
  'use server'
  const username = formData.get('username')
}

const AddPost = () => {
  return (
    <form action={createTask}>
      <div className="space-y-8 flex justify-center items-center">
        <input type="text" name="username" placeholder="Username" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default AddPost