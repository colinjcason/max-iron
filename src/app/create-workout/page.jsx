import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

const createExercise = async (formData) => {
  "use server"
  const exercise = formData.get("exercise")
  await prisma.exercise.create({
    data: { 
      name:exercise,
      reps: 0,
      sets: 0,
      weight: 0,
    }
  })
  revalidatePath('/create-workout')
}

const CreateWorkout = () => {
  return (
    <div className="flex justify-center mt-10">
      <form action={createExercise} className="flex space-x-2 mt-10">
        <Input placeholder="Exercise Name" type="text" name="exercise" />
        <Button type="submit">Create Exercise</Button>
      </form>
    </div>
  );
};

export default CreateWorkout;

