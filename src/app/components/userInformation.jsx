export const UserInformation = (props) => {
  return (
    <>
      <div className="w-[416px] h-[68px]">
        <p className="text-[14px] font-bold text-[#334155]">First name <span className="text-red-700">*</span></p>
        <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" onChange={props.handleInput} type="text" name="firstname" placeholder="Your First Name"></input>
      </div>

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">Last name <span className="text-red-700">*</span></p>
        <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" onChange={props.handleInput} type="text" name="lastname" placeholder="Your Last Name"></input>
      </div>

      <div className="mt-2">
        <p className="text-[14px] font-bold text-[#334155]">Username <span className="text-red-700">*</span></p>
        <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" onChange={props.handleInput} type="text" name="username" placeholder="Your Username"></input>
      </div>
    </>
  );
};
