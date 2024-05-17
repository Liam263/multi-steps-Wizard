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

const SeventhFormSchema = z.object({
  rate: z.string().min(0, {
    message: "Rate must be at least 0 characters.",
  }),
});

export function SeventhStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof SeventhFormSchema>>({
    resolver: zodResolver(SeventhFormSchema),
    defaultValues: {
      rate: "",
    },
  });

  function onSubmit(_data: z.infer<typeof SeventhFormSchema>) {
    nextStep();
    toast({
      title: "Seventh step submitted!",
    });
  }

  return (
    <div className="grid grid-cols-5 ">
      <Card className="w-[350px] col-span-2">
        <CardHeader>
          <CardTitle className="flex  gap-4">
            <FaRegSmileWink />
            Key tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          Your photo will be used for all your listings, a professional quality
          photo will help you build trust with your future students and maximise
          lesson requests.
          <ul className="flex flex-col gap-4 mt-2">
            <li>• Show yourself alone and smiling!</li>
            <li>• Face and gaze in front of the lens</li>
            <li>• Avoid sunglasses, logos, blurry, pixelated or poorly lit photos</li>
          </ul>
        </CardContent>
      </Card>
      <div className="ml-10 col-span-3">
        <Form {...form}>
        <CardTitle className="text-4xl mb-4">Profile picture</CardTitle>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="file" {...field} />
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
