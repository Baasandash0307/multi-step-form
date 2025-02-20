import { useRef, useState } from "react";
import { Continue } from "./Continue";
import next from "next";

export const LastPage = ({
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep
}) => {

    const imageRef = useRef();

    const [url, setUrl] = useState('')

    const onChange = (event) => {
        setFormValues((prev) => ({...prev, [event.target.name]: event.target.value}))
    }

    const imageHandler = (event) => {
        setFormValues((prev) => ({...prev, [event.target.name]: event.target.files[0]}))
        setUrl(window.URL.createObjectURL(event.target.files[0]))
    }

    const uploadImage = () => {
        imageRef.current.click()
    }

    const handleNext = (event) => {
        event.preventDefault();

        if (!formValues.date) {
            setFormErrors((prev) => ({
                ...prev,
                date: "Энэ талбар хоосон байж болохгүй!",
            }));
            return;
        }

        if (!formValues.image) {
            setFormErrors((prev) => ({
                ...prev,
                image: "Энэ талбар хоосон байж болохгүй!",
            }));
            return;
        }
    };

    return (
        <form onSubmit={handleNext}>
            <div className="w-[416px] h-[68px]">
                <p className="text-[14px] font-bold text-black">Date of birth <span className="text-red-700">*</span></p>
                <input onChange={onChange} className="h-[44px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" type="date" ></input>
            </div>
            {/* {formErrors.date && <p className="text-red-600">{formErrors.date}</p>} */}

            <div className="mt-2">
                <p className="text-[14px] font-bold text-black">Profile image <span className="text-red-700">*</span></p>
                <div className="w-[416px] h-[180px] bg-gray-100 flex justify-center items-center text-black cursor-pointer" onClick={uploadImage}>
                    {url ? <img className="h-[180px] w-[416px] border-[2px] border-solid rounded-[10px] placeholder: pl-3" src={url}></img> : "Add image" }
                </div>
                <input className="hidden" onChange={imageHandler} ref={imageRef} value={formValues.image} type="file"></input>
            </div>
            {formErrors.image && <p className="text-red-600">{formErrors.image}</p>}
            <Continue prevStep={prevStep} nextStep={nextStep} currentStep={currentStep + 1}></Continue>
        </form>

    );
};
