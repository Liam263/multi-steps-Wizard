import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useStepper } from "../use-stepper";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { StepperFormActions } from "../FormActions";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegSmileWink } from "react-icons/fa";
const FirstFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export function FirstStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof FirstFormSchema>>({
    resolver: zodResolver(FirstFormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(_data: z.infer<typeof FirstFormSchema>) {
    nextStep();
    toast({
      title: "First step submitted!",
    });
  }

  return (
    <div className="grid grid-cols-6 ">
      <Card className=" w-3/4 col-start-2 col-span-2">
        <CardHeader>
          <CardTitle className="flex text-4xl gap-4">
            <FaRegSmileWink />
            Key tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>Tutor Finder gives you the opportunity to teach and share your knowledge in more than 1000 subjects.</div>
        </CardContent>
      </Card>
      <div className=" col-span-2">
        <Form {...form}>
            <CardTitle className="text-4xl mb-4">LOGIN / SIGN UP</CardTitle>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
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
