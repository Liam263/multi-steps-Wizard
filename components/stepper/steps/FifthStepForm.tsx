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
import { FaRegSmileWink } from "react-icons/fa";

const FifthFormSchema = z.object({
  rate: z.string().min(0, {
    message: "Rate must be at least 0 characters.",
  }),
});

export function FifthStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof FifthFormSchema>>({
    resolver: zodResolver(FifthFormSchema),
    defaultValues: {
      rate: "",
    },
  });

  function onSubmit(_data: z.infer<typeof FifthFormSchema>) {
    nextStep();
    toast({
      title: "Fifth step submitted!",
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
        <CardContent className="flex flex-col gap-4">
          <p>
            You are free to choose your hourly rate and change it at any time.
          </p>
          <p>
            If you are just starting out, and do not have any reviews or
            recommendations be aware that a very high price might put people
            off. You can always use a lower rate to attract students initially
            and adjust it as you gain a reputation on Tutor Finder.
          </p>
        </CardContent>
      </Card>
      <div className=" col-span-2">
        <Form {...form}>
        <CardTitle className="text-4xl mb-4">Hourly Rate</CardTitle>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="rates" {...field} />
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
