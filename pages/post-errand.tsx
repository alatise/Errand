import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Category from '../components/PostErrands/Category'
import Details from '../components/PostErrands/Details'
import Finance from '../components/PostErrands/Finance'
import Location from '../components/PostErrands/Location'
import Review from '../components/PostErrands/Review'
import StepProgressBar from '../components/ProgressBar'

export default function postErrand() {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState<number>(1)
  const [selectedItem, setSelectedItem] = useState<string>('')
  const [stepName, setStepName] = useState<string>('')
  const steps = ['Category', 'Details', 'Location', 'Finance', 'Reviews']

  const showStep = () => {
    if (activeStep === 1) {
      return (
        <Category
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )
    }
    if (activeStep === 2) {
      return <Details />
    }
    if (activeStep === 3) {
      return <Location />
    }
    if (activeStep === 4) {
      return <Finance />
    } else {
      return <Review />
    }
  }

  return (
    <div className="bg-white h-full font-inter pt-10">
      <div className="w-full px-36 pb-14">
        <div className="flex text-2xl font-bold space-x-3 border-b pb-2">
          <span>Create an Errand </span>
          <span>{'>'}</span>
          <span className="text-[#3F60AC]">
            {steps[activeStep - 1] === 'Reviews' ? 'Submit Errand' : 'Select'} {" "}
            {steps[activeStep - 1] === 'Reviews' ? '' : steps[activeStep - 1]}
          </span>
        </div>

        <StepProgressBar activeStep={activeStep} detail={steps[activeStep - 1]} />

        {showStep()}

        <div className="flex justify-center items-center mt-20 space-x-8">
          {activeStep > 1 && (
            <Button
              child="Previous Page"
              className="bg-[#243763]  border border-blue-700 text-lg text-white p-2 rounded px-4 py-3"
              onClick={() => {
                setActiveStep(activeStep - 1)
              }}
            />
          )}
          <Button
            child={
              activeStep >= 5 ? 'Submit' : ` Proceed to Errand ${steps[activeStep]}`
            }
            icon2="/arrowproceed.svg"
            className={`bg-[#243763]  border text-lg text-white p-2 rounded px-4 py-3 ${
              !selectedItem ? 'bg-[#F0F3FA]' : 'border-blue-700 '
              }`}
            
            onClick={() => {
             activeStep < 5 ? setActiveStep(activeStep + 1) :  router.push('/errandMarket/errands')

            }}
            disabled={!selectedItem}
          />
        </div>
      </div>
    </div>
  )
}