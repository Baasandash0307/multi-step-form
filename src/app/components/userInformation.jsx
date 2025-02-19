export const UserInformation = (props) => {
  const onFirstNameChange = (event) => {
    props.setFormValues((prev) => ({ ...prev, firstName: event.target.value }));
  };

  const onLastNameChange = (event) => {
    props.setFormValues((prev) => ({ ...prev, lastName: event.target.value }));
  };

  const onUserNameChange = (event) => {
    props.setFormValues((prev) => ({ ...prev, userName: event.target.value }));
  };

  return (
    <>
      <div className="w-[416px] h-[68px]">
        <p className="text-[14px] font-bold text-[#334155]">
          First name <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          name="firstName"
          placeholder="Your First Name"
          onChange={onFirstNameChange}
        ></input>
      </div>
      {
        props.formErrors.firstName && <p className="text-red-600">{props.formErrors.firstName}</p>
      }

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Last name <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          name="lastName"
          placeholder="Your Last Name"
          onChange={onLastNameChange}
        ></input>
      </div>
      {
        props.formErrors.lastName && <p className="text-red-600">{props.formErrors.lastName}</p>
      }

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">
          Username <span className="text-red-700">*</span>
        </p>
        <input
          className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3"
          type="text"
          name="userName"
          placeholder="Your Username"
          onChange={onUserNameChange}
        ></input>
      </div>
      {
        props.formErrors.userName && <p className="text-red-600">{props.formErrors.userName}</p>
      }
    </>
  );
};
