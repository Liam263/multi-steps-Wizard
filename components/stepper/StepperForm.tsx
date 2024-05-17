"use client";

// import { Step, Stepper, useStepper } from "@/components/stepper";
import { Step } from "./step";
import { Stepper } from "./index";
import { useStepper } from "./use-stepper";
import { Button } from "@/components/ui/button";

import { FirstStepForm } from "./steps/FirstStepForm";
import { SecondStepForm } from "./steps/SecondStepForm";
import { ThirdStepForm } from "./steps/ThirdStepForm";
import { FourthStepForm } from "./steps/FourthStepForm";
import { SixthStepForm } from "./steps/SixthStepForm";
import { SeventhStepForm } from "./steps/SeventhStepForm";
import { FifthStepForm } from "./steps/FifthStepForm";
import { Card } from "../ui/card";

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
	{/* <Card>
		
	</Card> */}
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
