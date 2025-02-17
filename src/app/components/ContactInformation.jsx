export const ContactInformation = () => {
    return (
      <>
      <div className="w-[416px] h-[68px]">
            <p className="text-[14px] font-bold text-black">Email <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your email"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold text-black">Phone number <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your phone number here"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold text-black">Password <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="password" placeholder="Your password"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold text-black">Confirm password <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="password" placeholder="Confirm your password"></input>
          </div>
      </>
    );
  };
  