import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useStepper } from "../use-stepper";
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
import { toast } from "@/components/ui/use-toast";
import { StepperFormActions } from "../FormActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Smile } from "lucide-react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";

const SecondFormSchema = z.object({
  title: z.string().min(0, {
    message: "Title must be at least 0 characters.",
  }),
});

export function SecondStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof SecondFormSchema>>({
    resolver: zodResolver(SecondFormSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(_data: z.infer<typeof SecondFormSchema>) {
    nextStep();
    toast({
      title: "Second step submitted!",
    });
  }

  return (
    <div className="grid grid-cols-5 ">
      <Card className="w-[350px] col-span-2">
        <CardHeader>
          <CardTitle className="flex text-4xl gap-4">
            <FaRegSmileWink />
            Key tips
          </CardTitle>
          <CardDescription>
            Your title is the key to your listing! Take care of it! It must be
            unique, eye-catching and contain at least 12 words
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>- The subject you teach</li>
            <li>- The level you teach</li>
            <li>- Location of the lessons</li>
            <li>- Qualifications, experience etc...</li>
          </ul>
        </CardContent>
        <CardContent>
          <CardTitle className="flex gap-4">
            <AiFillLike />
            What works
          </CardTitle>
          <ul className="flex flex-col gap-4 mt-2">
            <li>-  Engineering Graduate teaches maths and physics for HSC level in Sydney</li>
            <li>- Concert pianist with 15 years of experience gives piano and music theory lessons at home</li>
            
          </ul>
        </CardContent>
        <CardContent>
          <CardTitle className="flex gap-4">
            <AiFillDislike />
            What doesnt works
          </CardTitle>
          <ul className="flex flex-col gap-4 mt-2">
          - Singing and guitar lessons for $40.
          </ul>
        </CardContent>
      </Card>
      <div className="ml-10 col-span-3">
        <Form {...form}>
        <CardTitle className="text-4xl mb-4">Title of listing</CardTitle>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Title of listing</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Title of listing" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <StepperFormActions />
          </form>
        </Form>
      </div>
    </div>
  );
}
