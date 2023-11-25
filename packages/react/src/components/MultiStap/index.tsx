import { ComponentProps } from "react";
import { Label, MultiStepContainer, StepContainer, Step } from "./styles";


export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {




  return (
    <MultiStepContainer>
      <Label>Passo {currentStep} de {size}</Label>

      <StepContainer css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          if (step <= currentStep) {
            return <Step key={step} status={step === currentStep ? 'active' : 'done'} />
          }

          return <Step key={step} />
        })}
      </StepContainer>
    </MultiStepContainer>
  );
}

MultiStep.displayName = 'MultiStep'