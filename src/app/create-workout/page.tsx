'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table"

const CreateWorkout = () => {
  
  const [exerciseList, setExerciseList] = useState<Object[]>([{ exercise: '' }])

  // const handleAddExercise = () => {
  //   setExerciseList([...exerciseList, { exercise: '' }])
  // }

  // const handleRemoveExercise = (index: number) => {
  //   const list = [...exerciseList]
  //   list.splice(index, 1)
  //   setExerciseList(list)
  // }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Lifting Journal</h1>
      </div>
      <div className="overflow-auto rounded-sm">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead className="px-4 py-2 text-left">Exercise</TableHead>
              <TableHead className="px-4 py-2 text-right">Sets</TableHead>
              <TableHead className="px-4 py-2 text-right">Reps</TableHead>
              <TableHead className="px-4 py-2 text-right">Weight</TableHead>
              <TableHead className="px-4 py-2 text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {exercises.map((exercise, index) => (
              <TableRow key={index}>
                <TableCell className="px-4 py-2">
                  <Input
                    type="text"
                  />
                </TableCell>
                <TableCell className="px-4 py-2 text-right">
                  <Input
                    type="number"
                  />
                </TableCell>
                <TableCell className="px-4 py-2 text-right">
                  <Input
                    type="number"
                  />
                </TableCell>
                <TableCell className="px-4 py-2 text-right">
                  <Input
                    type="number"
                  />
                </TableCell>
                <TableCell>
                  <Button variant="secondary" onClick={() => handleRemoveExercise(index)}>X</Button>
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-end">
        <Button>Add Exercise</Button>
      </div>
    </div>
  );
};

export default CreateWorkout;

