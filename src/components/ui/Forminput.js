const FormInput = ({ type, placeholder, required }) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;