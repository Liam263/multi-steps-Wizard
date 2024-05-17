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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile } from "lucide-react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";

const SixthFormSchema = z.object({
  rate: z.string().min(0, {
    message: "Rate must be at least 0 characters.",
  }),
});

export function SixthStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof SixthFormSchema>>({
    resolver: zodResolver(SixthFormSchema),
    defaultValues: {
      rate: "",
    },
  });

  function onSubmit(_data: z.infer<typeof SixthFormSchema>) {
    nextStep();
    toast({
      title: "Sixth step submitted!",
    });
  }

  return (
    <div className="grid grid-cols-6 ">
      <Card className="w-3/4 col-start-2 col-span-2">
        <CardHeader>
          <CardTitle className="flex  gap-4">
            <FaRegSmileWink />
            Key tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          Use precise and relevant questions to your challenge.
          Highlight the core competencies and industry-specific abilities requirement.
        </CardContent>
        <CardContent>
          <CardTitle className="flex gap-4">
            <AiFillLike />
            What works
          </CardTitle>
          <ul className="flex flex-col gap-4 mt-2">
            <li>- How many year of experience do you have ?</li>
            <li>- Have you face similar problems before ?</li>

          </ul>
        </CardContent>
        <CardContent>
          <CardTitle className="flex gap-4">
            <AiFillDislike />
            What doesnt works
          </CardTitle>
          <ul className="flex flex-col gap-4 mt-2">
          - How many kids do you have ?
          </ul>
        </CardContent>
      </Card>
      <div className=" col-span-2">
        <Form {...form}>
        <CardTitle className="text-4xl mb-4">Screening questions</CardTitle>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="How many year of experience you have ?" {...field} />
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
