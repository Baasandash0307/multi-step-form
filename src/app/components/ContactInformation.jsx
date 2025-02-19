export const ContactInformation = () => {
    return (
      <>
      <div className="w-[416px] h-[68px]">
            <p className="text-[14px] font-bold text-[#334155]">Email <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" type="text" placeholder="Your email"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold text-[#334155]">Phone number <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" type="text" placeholder="Your phone number here"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold text-[#334155]">Password <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" type="password" placeholder="Your password"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold text-[#334155]">Confirm password <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" type="password" placeholder="Confirm your password"></input>
          </div>
      </>
    );
  };
  