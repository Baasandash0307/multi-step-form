"use client";
import { useState } from "react";
import { Header } from "./components/header";
import { UserInformation } from "./components/userInformation";
import { Continue } from "./components/Continue";
import { ContactInformation } from "./components/ContactInformation";
import { LastPage } from "./components/LastPage";
import { Footer } from "./components/footer";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  }
  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  }

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[480px] h-[655] bg-white rounded-[10px]">
        <div className="w-[480px] h-[655] py-4 px-8">
          <div className="pt-10" >
            <div>
              <Header></Header>
            </div>
            {currentStep === 0 && <UserInformation></UserInformation>}
            {currentStep === 1 && <ContactInformation></ContactInformation>}
            {currentStep === 2 && <LastPage></LastPage>}
          </div>


          <div className="flex justify-center mt-[100px] mb-5">
            <Continue currentStep={currentStep + 1} nextStep={nextStep} previousStep={previousStep} ></Continue>
          </div>
          <div>
            {currentStep === 3 && <Footer></Footer>}
          </div>
        </div>
      </div>
    </div>
  );
}
