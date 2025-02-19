import { Continue } from "./Continue";

export const ContactInformation = ({
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
  currentStep,
  setCurrentStep,
  nextStep,
}) => {
  const onChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();
    console.log(formValues);

    if (!formValues.firstName) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Энэ талбар хоосон байж болохгүй!",
      }));
      return;
    }

    if (!formValues.lastName) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Энэ талбар хоосон байж болохгүй!",
      }));
      return;
    }

    if (!formValues.userName) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "Энэ талбар хоосон байж болохгүй!",
      }));
      return;
    }
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

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Password <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="password"
          placeholder="Your password"
          name="ConfirmPassword"
          onChange={onChange}
        ></input>
      </div>

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Confirm password <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="password"
          placeholder="Confirm your password"
          name="password"
          onChange={onChange}
        ></input>
      </div>

      <Continue currentStep={currentStep}></Continue>
    </form>
  );
};
