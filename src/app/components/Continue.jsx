export const Continue = ({ nextStep, currentStep}) => {
    return (
        <div className="flex w-[416px] h-[44px] gap-2 justify-center mt-[100px] mb-5">
            {
                currentStep != 1 && <button className="bg-white text-black h-[44px] w-[128px] rounded-[8px] font-bold border-[2px]">Back</button>
            }
            <button className="bg-black text-white h-[44px] w-[416px] rounded-[8px] font-bold" onClick={nextStep} type="submit"> Continue <span>{currentStep}/3</span></button>
        </div>
    );
};
