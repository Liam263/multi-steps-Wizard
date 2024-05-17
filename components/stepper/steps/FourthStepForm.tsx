import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
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
import { FaRegSmileWink } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";

const FourthFormSchema = z.object({
  skill: z.string().min(0, {
    message: "Skill must be at least 0 characters.",
  }),
});

export function FourthStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof FourthFormSchema>>({
    resolver: zodResolver(FourthFormSchema),
    defaultValues: {
      skill: "",
    },
  });

  function onSubmit(_data: z.infer<typeof FourthFormSchema>) {
    nextStep();
    toast({
      title: "Fourth step submitted!",
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
        </CardHeader>
        <CardContent>
          Use precise and revelant skills required to complete your challenge
        </CardContent>
      </Card>
      <div className="ml-10 col-span-3">
        <Form {...form}>
        <CardTitle className="text-4xl mb-4">Skills requirement</CardTitle>
            
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="skill"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Skills" {...field} />
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
