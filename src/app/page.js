'use client'
import { useState } from "react";
import { Header } from "./components/header";
import { UserInformation } from "./components/userInformation";
import { ContactInformation } from "./components/ContactInformation";
import { LastPage } from "./components/LastPage";
import { Footer } from "./components/footer";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    ConfirmPassword: "",
    date: "",
    image: ""
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    ConfirmPassword: "",
    date: "",
    image: ""
  });

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const getSlideClass = () => {
    return currentStep === 0 ? "" : "slide-in";
    return currentStep === 1 ? "" : "slide-in";
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className={"w-[480px] h-[655] bg-white rounded-[10px] " + getSlideClass()}>
        <div className="w-[480px] h-[655] py-4 px-8">
          <div className="pt-10">
            <div>
              {currentStep !== 3 && <Header />}
            </div>
            <div>
              {currentStep === 0 && (
                <UserInformation
                  formValues={formValues}
                  setFormValues={setFormValues}
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
                  currentStep={currentStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {currentStep === 1 && (
                <ContactInformation
                  formValues={formValues}
                  setFormValues={setFormValues}
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
                  currentStep={currentStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {currentStep === 2 && (
                <LastPage
                  formValues={formValues}
                  setFormValues={setFormValues}
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
                  currentStep={currentStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
            </div>
          </div>

          <div>
            {currentStep === 3 && <Footer />}
          </div>
        </div>
      </div>
    </div>
  );
}
