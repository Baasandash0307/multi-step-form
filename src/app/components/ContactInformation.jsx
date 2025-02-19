export const ContactInformation = (props) => {
  const onEmailChange = (event) => {
    props.setFormValues((prev) => ({ ...prev, email: event.target.value }));
  };

  const onPhoneNumberChange = (event) => {
    props.setFormValues((prev) => ({ ...prev, phoneNumber: event.target.value }));
  };

  const onPasswordChange = (event) => {
    props.setFormValues((prev) => ({ ...prev, password: event.target.value }));
  };
  const onConfirmPasswordChange = (event) => {
    props.setFormValues((prev) => ({ ...prev, ConfirmPassword: event.target.value }));
  };
  return (
    <>
      <div className="w-[416px] h-[68px]">
        <p className="text-[14px] font-bold text-[#334155]">
          Email <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          placeholder="Your email"
          name="email"
          onChange={onEmailChange}
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
          onChange={onPhoneNumberChange}
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
          onChange={onPasswordChange}
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
          onChange={onConfirmPasswordChange}
        ></input>
      </div>
    </>
  );
};
