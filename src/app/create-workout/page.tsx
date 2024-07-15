'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import {getAllExercises} from '@/lib/actions'

const formatDate = (date: Date) => {
  if (!date) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const CreateWorkout = () => {
  const exercises = getAllExercises()
  console.log(exercises)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isPopoverOpen, setIsPopoverOpen] = useState<Boolean>(false)
  const [exerciseList, setExerciseList] = useState<Object[]>([{ exercise: '' }])

  const handleAddExercise = () => {
    setExerciseList([...exerciseList, { exercise: '' }])
  }

  const handleRemoveExercise = (index: number) => {
    const list = [...exerciseList]
    list.splice(index, 1)
    setExerciseList(list)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Lifting Journal</h1>
        <div className="mt-2 flex items-center gap-2">
          <Label htmlFor="date">Date:</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="pl-3 font-normal text-muted-foreground">
                {date ? formatDate(date) : 'Select a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={(value) => setDate(value as Date | undefined)} disabled={false} />
            </PopoverContent>
          </Popover>
        </div>
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
        <Button onClick={handleAddExercise}>Add Exercise</Button>
      </div>
    </div>
  );
};

export default CreateWorkout;

