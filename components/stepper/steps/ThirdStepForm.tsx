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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { StepperFormActions } from "../FormActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegSmileWink } from "react-icons/fa";

import { GiCoffeeCup } from "react-icons/gi";

const ThirdFormSchema = z.object({
  description: z.string().min(0, {
    message: "Description must be at least 0 characters.",
  }),
});

export function ThirdStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof ThirdFormSchema>>({
    resolver: zodResolver(ThirdFormSchema),
    defaultValues: {
      description: "",
    },
  });

  function onSubmit(_data: z.infer<typeof ThirdFormSchema>) {
    nextStep();
    toast({
      title: "Third step submitted!",
    });
  }

  return (
    <div className="grid grid-cols-6 ">
      <Card className="w-3/4 col-start-2 col-span-2">
        <CardHeader>
          <CardTitle className="flex text-4xl gap-4">
            <FaRegSmileWink />
            Key tips
          </CardTitle>
          <CardDescription>
            Explain your approach to tutoring and how you teach your classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            <li>- Your techniques and teaching methodology</li>
            <li>- Typical length of a lesson</li>
            <li>- Your qualifications/experience as a tutor</li>
            <li>- Who are your lessons for (level, age, etc.)</li>
          </ul>
        </CardContent>
        <CardContent>
          <CardTitle className="flex gap-4">
            <GiCoffeeCup />
            Note
          </CardTitle>
          <ul className="flex flex-col gap-4 mt-2">
            - Contact details and URLs must not appear in your listing.
          </ul>
        </CardContent>
      </Card>
      <div className=" col-span-2">
        <Form {...form}>
        <CardTitle className="text-4xl mb-4">Description</CardTitle>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="I need help with abcxyz"
                      {...field}
                    />
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
