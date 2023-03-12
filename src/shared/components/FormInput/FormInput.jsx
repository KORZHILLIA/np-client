import { useMemo, memo } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const FormInput = ({
  label,
  type,
  name,
  value,
  minLength,
  maxLength,
  pattern,
  required,
  autocomplete,
  onChange,
  placeholder,
  generalStyle,
  labelStyle,
  inputStyle,
}) => {
  const inputId = useMemo(() => nanoid(2), []);

  return (
    <div className={generalStyle} style={{ position: "relative" }}>
      {label ? (
        <label className={labelStyle} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        className={inputStyle}
        id={inputId}
        type={type}
        name={name}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required={required}
        autoComplete={autocomplete}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

FormInput.defaultProps = {
  label: "",
  type: "text",
  minLength: 14,
  maxLength: 14,
  required: true,
  autocomplete: "on",
  onChange: () => {},
  placeholder: "",
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  autocomplete: PropTypes.oneOf(["on", "off"]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  generalStyle: PropTypes.string,
  labelStyle: PropTypes.string,
  inputStyle: PropTypes.string,
};
export default memo(FormInput);
