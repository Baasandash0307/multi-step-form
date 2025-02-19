export const Continue = ({ nextStep, previousStep, currentStep}) => {
    return (
        <div className="flex w-[416px] h-[44px] gap-2">
            {
                currentStep != 0 && <button className="bg-white text-black h-[44px] w-[128px] rounded-[8px] font-bold border-[2px]" onClick={previousStep} type="button">Back</button>
            }
            <button className="bg-black text-white h-[44px] w-[280px] rounded-[8px] font-bold" onClick={nextStep} type="button"> Continue <span>{currentStep}/3</span></button>
        </div>
    );
};
