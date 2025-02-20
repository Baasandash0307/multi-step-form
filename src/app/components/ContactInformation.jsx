import { Continue } from "./Continue";

export const ContactInformation = ({
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
  currentStep,
  setCurrentStep,
  nextStep,
  prevStep
}) => {
  const onChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();

    if (!formValues.email) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Энэ талбар хоосон байж болохгүй!",
      }));
      return;
    }

    if (!formValues.phoneNumber) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Энэ талбар хоосон байж болохгүй!",
      }));
      return;
    }

    if (!formValues.password) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Энэ талбар хоосон байж болохгүй!",
      }));
      return;
    }

    if (!formValues.ConfirmPassword) {
      setFormErrors((prev) => ({
        ...prev,
        ConfirmPassword: "Энэ талбар хоосон байж болохгүй!",
      }));
      return;
    }
    nextStep();
  };

  return (
    <form onSubmit={handleNext}>
      <div className="w-[416px] h-[68px]">
        <p className="text-[14px] font-bold text-[#334155]">
          Email <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          placeholder="Your email"
          name="email"
          onChange={onChange}
        ></input>
      </div>
      {formErrors.email && <p className="text-red-600">{formErrors.email}</p>}

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Phone number <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          placeholder="Your phone number here"
          name="phoneNumber"
          onChange={onChange}
        ></input>
      </div>
      {formErrors.phoneNumber && <p className="text-red-600">{formErrors.phoneNumber}</p>}

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Password <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="password"
          placeholder="Your password"
          name="password"
          onChange={onChange}
        ></input>
      </div>
      {formErrors.password && <p className="text-red-600">{formErrors.password}</p>}

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Confirm password <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="password"
          placeholder="Confirm your password"
          name="ConfirmPassword"
          onChange={onChange}
        ></input>
      </div>
      {formErrors.ConfirmPassword && <p className="text-red-600">{formErrors.ConfirmPassword}</p>}

      <Continue prevStep={prevStep} nextStep={handleNext} currentStep={currentStep + 1}></Continue>
    </form>
  );
};
