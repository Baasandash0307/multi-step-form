export const UserInformation = () => {
    return (
    <>
        <div className="w-[416px] h-[68px]">
            <p className="text-[14px] font-bold text-black">First name <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your First Name"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold text-black">Last name <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your Last Name"></input>
          </div>

          <div className="mt-2">
            <p className="text-[14px] font-bold text-black">Username <span className="text-red-700">*</span></p>
            <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[5px] placeholder:pl-3" type="text" placeholder="Your Username"></input>
          </div>
    </>
    );
  };
  