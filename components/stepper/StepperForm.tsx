"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// import { Step, Stepper, useStepper } from "@/components/stepper";
import { Step } from "./step";
import { Stepper } from "./index";
import { useStepper } from "./use-stepper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";

const steps = [
  { label: "Step 1", description: "Login/Signup" },
  { label: "Step 2", description: "Title of listing" },
  { label: "Step 3", description: "Short description" },
  { label: "Step 4", description: "Skills required" },
  { label: "Step 5", description: "Hourly rate" },
  { label: "Step 6", description: "Screening questions" },
  { label: "Step 7", description: "Upload image" },

];

export default function StepperForm() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper
        variant="circle-alt"
        initialStep={0}
        steps={steps}
        onClickStep={(step, setStep) => {
          setStep(step);
        }}
      >
        {steps.map((stepProps, index) => {
          switch (index) {
            case 0:
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <FirstStepForm />
                </Step>
              );
            case 1:
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <SecondStepForm />
                </Step>
              );
            case 2:
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <ThirdStepForm />
                </Step>
              );
            case 3:
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <FourthStepForm />
                </Step>
              );
            case 4:
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <FifthStepForm />
                </Step>
              );
            case 5:
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <SixthStepForm />
                </Step>
              );
            case 6:
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <SeventhStepForm />
                </Step>
              );

            default:
              break;
          }
        })}
        <MyStepperFooter />
      </Stepper>
    </div>
  );
}

const FirstFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
});

function FirstStepForm() {
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
    <Form {...form}>
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
  );
}

const SecondFormSchema = z.object({
  title: z.string().min(0, {
    message: "Title must be at least 0 characters.",
  }),
});

function SecondStepForm() {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title of listing</FormLabel>
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
  );
}

const ThirdFormSchema = z.object({
  description: z.string().min(0, {
    message: "Description must be at least 0 characters.",
  }),
});

function ThirdStepForm() {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short description</FormLabel>
              <FormControl>
                {/* <Input placeholder="I need help with abcxyz" {...field} /> */}
                <Textarea placeholder="I need help with abcxyz" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <StepperFormActions />
      </form>
    </Form>
  );
}

const ForthFormSchema = z.object({
  skill: z.string().min(0, {
    message: "skill must be at least 0 characters.",
  }),
});

function FourthStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof ForthFormSchema>>({
    resolver: zodResolver(ForthFormSchema),
    defaultValues: {
      skill: "",
    },
  });

  function onSubmit(_data: z.infer<typeof ForthFormSchema>) {
    nextStep();
    toast({
      title: "Fourth step submitted!",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="skill"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skill required</FormLabel>
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
  );
}

const FifthFormShema = z.object({
  rate: z.string().min(0, {
    message: "rate must be at least 0 characters.",
  }),
});

function FifthStepForm() {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof FifthFormShema>>({
    resolver: zodResolver(FifthFormShema),
    defaultValues: {
      rate: "",
    },
  });

  function onSubmit(_data: z.infer<typeof FifthFormShema>) {
    nextStep();
    toast({
      title: "Fifth step submitted!",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hourly rate</FormLabel>
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
  );
}

const SixthFormSchema = z.object({
  rate: z.string().min(0, {
    message: "rate must be at least 0 characters.",
  }),
});

function SixthStepForm() {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Screening questions</FormLabel>
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
  );
}
const SeventhFormSchema = z.object({
  rate: z.string().min(0, {
    message: "rate must be at least 0 characters.",
  }),
});

function SeventhStepForm() {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
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
  );
}
function StepperFormActions() {
  const {
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  return (
    <div className="w-full flex justify-end gap-2">
      {hasCompletedAllSteps ? (
        <Button size="sm" onClick={resetSteps}>
          Reset
        </Button>
      ) : (
        <>
          <Button
            disabled={isDisabledStep}
            onClick={prevStep}
            size="sm"
            variant="secondary"
          >
            Prev
          </Button>
          <Button size="sm">
            {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
}

function MyStepperFooter() {
  const { activeStep, resetSteps, steps } = useStepper();

  if (activeStep !== steps.length) {
    return null;
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <Button onClick={resetSteps}>Reset Stepper with Form</Button>
    </div>
  );
}
