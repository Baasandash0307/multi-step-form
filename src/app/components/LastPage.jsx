
export const LastPage = () => {
    return (
        <div>
            <div className="w-[416px] h-[68px]">
                <p className="text-[14px] font-bold text-black">Date of birth <span className="text-red-700">*</span></p>
                <input className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" type="date" ></input>
            </div>

            <div className="mt-2">
                <p className="text-[14px] font-bold text-black">Profile image <span className="text-red-700">*</span></p>
                <input className="h-[180px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" type="image"></input>
            </div>
        </div>
    );
};
