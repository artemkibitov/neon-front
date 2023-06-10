import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import useOrder from "@/components/hooks/useOrder";
import usePostApi from "@/components/hooks/usePostApi";

const Form = () => {
  const { state } = useContext(EditorContext);
  const { OrderModel } = state;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const order = useOrder(EditorContext)
  const postApi = usePostApi();

  const textValidation = () => ({
    required: 'Обов\'язкове поле',
    pattern: {
      value: /^[A-Za-zА-Яа-яЁё\s]+$/i,
      message: 'Не повинен містити цифр або спеціальних символів'
    }
  });


  const onSubmit = (data) => {
    Object.keys(data).forEach(
      value => OrderModel['set' + value.slice(0, 1).toUpperCase() + value.slice(1)](data[value]),
    );
    if (!OrderModel.getHash().length) {
      postApi.postData('/users/hash', { data: null }).then(() => {
        console.log(postApi.response)
      })
    }
  };


  return (
    <div className='flex flex-col justify-center align-center w-11/12 items-center lg:w-4/6 mx-2'>
      <form onSubmit={handleSubmit(onSubmit)} className="my-2 mx-2 md:mx-auto w-full">
          <InputField
            label="Ім'я"
            placeholder="Введіть ваше ім'я"
            fieldName="name"
            type="text"
            register={register}
            validation={textValidation()}
            error={errors.name}
          />
          <InputField
            label="Прізвище"
            placeholder="Введіть ваше прізвище"
            fieldName="lastName"
            type="text"
            register={register}
            validation={textValidation()}
            error={errors.lastName}
          />
        <InputField
          label="Місто"
          placeholder="Введіть ваше місто"
          fieldName="city"
          type="text"
          register={register}
          validation={textValidation()}
          error={errors.city}
        />
        <InputField
          label="Телефон"
          placeholder="Введіть ваш номер телефону"
          fieldName="phone"
          type="tel"
          register={register}
          validation={{
            required: 'Введіть коректний номер',
            pattern: {
              value: /^0\d{9}$/,
              message: 'Некоректний номер'
            }
          }}
          error={errors.phone}
        />
        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Зробити замовлення
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;