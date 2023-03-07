const steps = [
  { label: 'Step 1' },
  { label: 'Step 2' },
  { label: 'Step 3' },
  { label: 'Step 4' },
  { label: 'step 5' },
]

type ErrandByNumProp = {
  number?: number
  stepName?: string
}

type LowStepIndProp = {
  activeStep: number
}

const ErrandByNum = ({ number, stepName }: ErrandByNumProp) => (
  <div className="flex space-x-2 items-center">
    <p className="text-[64px] font-advent font-extralight">{`0${number}`}</p>
    <div>
      <p>Errand</p>
      <p>{stepName}</p>
    </div>
  </div>
)

export const HigherStepInd = () => (
  <div className="flex xl:space-x-40">
    <ErrandByNum number={1} stepName="Category" />
    <ErrandByNum number={2} stepName="Details" />
    <ErrandByNum number={3} stepName="Location" />
    <ErrandByNum number={4} stepName="Finances" />
    <ErrandByNum number={5} stepName="Review" />
  </div>
)

export const LowStepInd = ({ activeStep }: LowStepIndProp) => (
  <div className="flex pt-2 items-center">
    <div className="rounded-full w-12 h-12 relative bg-[#3F60AC]">
      {activeStep > 1 && (
        <img
          src="./checkicon.svg"
          alt=""
          className="absolute top-3 left-2 w-8"
        />
      )}
    </div>
    <div className="w-[240px] h-[0.5px]  bg-[#3F60AC]"></div>
    <div
      className={`rounded-full w-12 h-12 relative  ${
        activeStep >= 2 ? 'bg-[#3F60AC]' : 'bg-[#CBD5EC]'
      }`}
    >
      {activeStep > 2 && (
        <img
          src="./checkicon.svg"
          alt=""
          className="absolute top-3 left-2 w-8"
        />
      )}
    </div>
    <div
      className={`w-[240px] h-[0.5px] ${
        activeStep >= 2 ? 'bg-[#3F60AC]' : 'bg-[#CBD5EC]'
      }`}
    ></div>
    <div
      className={`rounded-full w-12 h-12 relative  ${
        activeStep >= 3 ? 'bg-[#3F60AC]' : 'bg-[#CBD5EC]'
      }`}
    >
      {activeStep > 3 && (
        <img
          src="./checkicon.svg"
          alt=""
          className="absolute top-3 left-2 w-8"
        />
      )}
    </div>
    <div
      className={`w-[240px] h-[0.5px] ${
        activeStep >= 4 ? 'bg-[#3F60AC]' : 'bg-[#CBD5EC]'
      }`}
    ></div>
    <div
      className={`rounded-full w-12 h-12 relative  ${
        activeStep >= 4 ? 'bg-[#3F60AC]' : 'bg-[#CBD5EC]'
      }`}
    >
      {activeStep > 4 && (
        <img
          src="./checkicon.svg"
          alt=""
          className="absolute top-3 left-2 w-8"
        />
      )}
    </div>
    <div
      className={`w-[240px] h-[0.5px] ${
        activeStep >= 5 ? 'bg-[#3F60AC]' : 'bg-[#CBD5EC]'
      }`}
    ></div>
    <div
      className={`rounded-full w-12 h-12 relative ${
        activeStep >= 5 ? 'bg-[#3F60AC]' : 'bg-[#CBD5EC]'
      }`}
    >
      {activeStep > 5 && (
        <img
          src="./checkicon.svg"
          alt=""
          className="absolute top-3 left-2 w-8"
        />
      )}
    </div>
  </div>
)

type StepProgressProps = {
  detail: string
  activeStep: number
}

export default function StepProgressBar({
  detail,
  activeStep,
}: StepProgressProps) {
  return (
    <div className="w-[100%]">
      <HigherStepInd />
      <LowStepInd activeStep={activeStep} />
      <p className="pt-20 pb-4 font-semibold text-[20px]">Errand {detail}</p>
    </div>
  )
}

export { StepProgressBar }
