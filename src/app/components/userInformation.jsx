import { Continue } from "./Continue";

export const UserInformation = ({
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

    nextStep();
  };

  return (
    <form onSubmit={handleNext}>
      <div className="w-[416px] h-[68px]">
        <p className="text-[14px] font-bold text-[#334155]">
          First name <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          name="firstName"
          placeholder="Your First Name"
          onChange={onChange}
          value={formValues.firstName}
        ></input>
      </div>
      {formErrors.firstName && <p className="text-red-600">{formErrors.firstName}</p>}

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Last name <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          name="lastName"
          placeholder="Your Last Name"
          onChange={onChange}
          value={formValues.lastName}
        ></input>
      </div>
      {formErrors.lastName && (
        <p className="text-red-600">{formErrors.lastName}</p>
      )}

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Username <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          name="userName"
          placeholder="Your Username"
          onChange={onChange}
          value={formValues.userName}
        ></input>
      </div>
      {formErrors.userName && (
        <p className="text-red-600">{formErrors.userName}</p>
      )}

      <Continue prevStep={prevStep} nextStep={handleNext} currentStep={currentStep + 1}></Continue>
    </form>
  );
};
