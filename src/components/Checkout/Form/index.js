import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";
import InputField from "./InputField";
import { useForm } from "react-hook-form";

const Form = () => {
  const { state } = useContext(EditorContext);
  const { OrderModel } = state;
  const { register, handleSubmit, formState: { errors } } = useForm();

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

    console.log(OrderModel.getName());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-2">
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Зробити замовлення
      </button>
      <p>0961133221</p>
    </form>
  );
};

export default Form;
