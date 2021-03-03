import React from "react";

import { InputGroup, Input, InputLabel } from "./form-input.styles";

const FormInput = ({ handleChange, ...props }) => (
  <InputGroup>
    <Input onChange={handleChange} {...props} required />
    {props.label ? (
      <InputLabel
        className={`${props.value.length > 0 ? "shrink" : ""} form-input-label`}
      >
        {props.label}
      </InputLabel>
    ) : null}
  </InputGroup>
);

export default FormInput;
