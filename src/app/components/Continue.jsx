export const Continue = (props) => {
    return (
        <div className="flex w-[416px] h-[44px] gap-2">
            {
                props.previousStep != 1 && <button className="bg-white text-black h-[44px] w-[128px] rounded-[8px] font-bold border-[2px]" onClick={props.previousStep} type="button">Back</button>
            }
            <button className="bg-black text-white h-[44px] w-[280px] rounded-[8px] font-bold" onClick={props.nextStep} type="button"> Continue <span>{props.currentStep}/3</span></button>
        </div>
    );
};
