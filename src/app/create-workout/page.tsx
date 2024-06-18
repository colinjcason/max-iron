"use server";
import { createTask } from "@/app/utils/actions";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Exercise must be at least 2 characters.",
  }),
  description: z.string()
})

const CreateWorkout = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submit")
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex flex-col items-center h-full w-full mt-10">
      <Form {...form}>
        <form action={onSubmit} className="flex flex-col space-y-2 justify-center w-1/3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h1 className="text-2xl font-semibold">Routine Name</h1>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Ironman Routine" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Textarea placeholder="Routine description or progression" className="h-28" name="description" />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateWorkout;
function toast(arg0: { title: string; description: import("react").JSX.Element; }) {
  throw new Error("Function not implemented.");
}

