import { useContext, useState } from "react";
import EditorContext from "@/components/Editor/editorContext";

export const InputField = ({ label, placeholder, fieldName, type, register, validation, error }) => (
  <div className="mb-4">
    <label htmlFor={fieldName} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={fieldName}
      {...register(fieldName, validation)}
      className={`appearance-none border w-full rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error && 'border-red-500'}`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
  </div>
);

export const PhoneField = ({ label, placeholder, fieldName, type, register, validation, error }) => (
  <div className="mb-4">
    <label htmlFor={fieldName} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    {/* <div className='flex align-center items-center'> */}
      {/* <div className='bg-stone-300 py-1.5 px-2 rounded-l-lg'>
        <span>+38</span>
      </div> */}
      <input
        type={type}
        id={fieldName}
        {...register(fieldName, validation)}
        className={`appearance-none border w-full rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error && 'border-red-500'}`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
    </div>
  // </div>
);

