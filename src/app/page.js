'use client'

import { useState } from "react"

const StepOne = ({props}) => {
  return <div className="h-screen bg-gray-100 flex justify-center items-center">
    <div className="w-[480px] h-[655] bg-white rounded-[10px]">
      <div className="w-[480px] h-[655] py-4 px-8">

        <div>
          <img className="w-[60px] h-[60px] bold" src="logo.png"></img>
          <p className="text-[26px] font-bold">Join us! 😎</p>
          <p className="text-gray-400 text-[18px]">Please provide all current information accurately.</p>
        </div>

        <div className="pt-10">
          <div className="w-[416px] h-[68px]">
            <p className="text-[14px] font-bold">First name</p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your First Name"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold">Last name</p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your Last Name"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold">Username</p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your Username"></input>
          </div>
        </div>

        <div className="flex justify-center mt-40 mb-5">
          <button className="bg-black text-white h-[44px] w-[416px] rounded-[8px] font-bold" onClick={props} type="button"> Continue</button>
        </div>
      </div>
    </div>
  </div>
}

const StepTwo = ({props1}) => {
  return <div className="h-screen bg-gray-100 flex justify-center items-center">
    <div className="w-[480px] h-[655] bg-white rounded-[10px]">
      <div className="w-[480px] h-[655] py-4 px-8">

        <div>
          <img className="w-[60px] h-[60px] bold" src="logo.png"></img>
          <p className="text-[26px] font-bold">Join us! 😎</p>
          <p className="text-gray-400 text-[18px]">Please provide all current information accurately.</p>
        </div>

        <div className="pt-10">
          <div className="w-[416px] h-[68px]">
            <p className="text-[14px] font-bold">Email</p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your email"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold">Phone number</p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your phone number here"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold">Password</p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="password" placeholder="Your password"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold">Confirm password</p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="password" placeholder="Confirm your password"></input>
          </div>
        </div>

        <div className="flex justify-between mt-40 mb-5 ">
          <button className="bg-white text-black h-[44px] w-[128px] rounded-[8px] font-bold border-[2px]" onClick={props1} type="button"> Back</button>
          <button className="bg-black text-white h-[44px] w-[280px] rounded-[8px] font-bold" type="button"> Continue</button>
        </div>
      </div>
    </div>
  </div>
}
export default function Home() {

  const [currentStep, setCurrentStep] = useState(0);

  const Component = [StepOne, StepTwo][currentStep]

  const nextStep = () => {
    if (1 > currentStep) {
      setCurrentStep(currentStep + 1);
    }
  }

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div>
      <form>
        <Component props = {nextStep} props1 = {previousStep} ></Component>
      </form>
    </div>
  )
}
