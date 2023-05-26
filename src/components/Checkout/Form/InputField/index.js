import { useContext,  } from "react";

const InputField = (
  {
    label,
    placeholder,
    fieldName,
    type,
    validationFunc,
    additionalElement,
    inputWrapStyle = 'flex'
  }
) => {
  const { state, dispatch } = useContext(EditorContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    state.OrderModel[`set${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`](value);

    if (validationFunc) {
      const { isValid, message } = validationFunc(value);
      if (!isValid) {
        setErrorMessage(message);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className={inputWrapStyle}>
        {additionalElement}
        <input
          type={type}
          id={fieldName}
          name={fieldName}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
          required
        />
      </div>
      {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};
