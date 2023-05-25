import { useState, useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";

const Form = () => {
  const { state, dispatch } = useContext(EditorContext);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: ''
  });
  const [phoneValid, setPhoneValid] = useState(false);
  const [phoneDigits, setPhoneDigits] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Действия при отправке формы
    if (isValidPhone)
    console.log(formData);
  };

  const isValidPhone = (phone) => {
    setPhoneValid(/^0\d{9}$/.test(phone));
  };

  const hasOnlyDigits = (value) => {
    setPhoneDigits(/^\d+$/.test(value));
  };

  return (
    <form onSubmit={handleSubmit} className="m-2">
      <div className={'flex flex-col md:flex-row justify-around'}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Введите ваше имя"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Фамилия
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Введите вашу фамилию"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
          Телефон
        </label>
        <div className="flex">
          <div className="flex items-center bg-gray-200 rounded-l px-3">
            +38
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Введите ваш номер телефона"
            required
          />
        </div>
        {formData.phone.length === 10 && !isValidPhone(formData.phone) && (
          <p className="text-red-500 text-xs italic">Введите корректный номер</p>
        )}
        {formData.phone && !hasOnlyDigits(formData.phone) && (
          <p className="text-red-500 text-xs italic">Номер не должен содержать букв</p>
        )}
      </div>
      <div className={'flex flex-row justify-between my-2 p-2 bg-gray-300'}>
        <p className={'capitalize'}>сума замовлення:</p>
        <p className={'font-bold'}>{state.OrderModel.total}</p>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Зробити замовлення
        </button>
      </div>
    </form>
  );
};

export default Form;
