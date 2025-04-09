import React, { useRef } from "react";


import { getAstrixClassNames, getErrorClassNames, getInputClassNames, getInputClassNames1, getLabelClassNames, getSpanClassNames, InputMainDiv } from "./CommonStyle.jsx";
import { InputDOBIcon } from "./IconsSVG.jsx";
import { onkeyDownforSpecialCharcter } from "../utils/Validation.js";

const InputField = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  astrix,
  required,
  remove,
  span,
  disabled,
  onkeyDown,
  error,
  DobInput,
  SearchIcon,
  maxLength,
  pattern,
  searchClick,
  allDate,
  shouldAllowPastDates = true,
  accept,
  UplaodIcon,
  setSalarySlip,
  dataSetFile,
  setDataSet,
  CopyIconValue,
  onClickCopy,
  onClick,
  isHireDocument = false,
  mindates,
  MaxDate,
  placeholder,
  className,
  UploadClass

}) => {

  const maxdate =MaxDate ? MaxDate : allDate ? new Date().toISOString().split("T")[0] : allDate;
  const mindate =mindates || shouldAllowPastDates ? "1900-01-01" : new Date().toISOString().split("T")[0];
  const fileInputRef = useRef(null);
  const token=JSON.parse(sessionStorage.getItem("userToken")) || "";
  const handleKeyDown = (e) => {
    e.preventDefault(); // Keyboard typing ko roknay ke liye
  };

  return (
    <div className={InputMainDiv}>
      {span && <span className={getSpanClassNames(disabled)}>{span}</span>}
      {DobInput && <span className="absolute right-4 top-3">
        <InputDOBIcon />
        

      </span>}
   
      

     
      
      {type === "date" ? (<input
        disabled={disabled}
        type={type}
        accept={accept}
        name={name}
        id={id}
        required={false}
        maxLength={maxLength}
        max={maxdate}
        min={mindates || mindate}
        pattern={pattern}
        onKeyDown={handleKeyDown}
      onPaste={(e) => e.preventDefault()}
        onClick={onClick}
        value={value}
        onChange={onChange}
        className={ UploadClass ? getInputClassNames1(span, error, disabled) :getInputClassNames(span, error, disabled)}
        placeholder={placeholder?placeholder:" "}
      />) :type === "file" ? (
      <div  className={`${getInputClassNames(span, error, disabled)} p-6 !pt-[30px]`}>
      <input
        ref={fileInputRef}
        disabled={disabled}
        type={type}
        name={name}
        id={id}
        style={{display:"none"}}
      
        required={false}
        maxLength={maxLength}
        max={maxdate}
        pattern={pattern}
        onKeyDown={onkeyDown}
        accept={accept}
        value={value}
        onChange={onChange}
        className={UploadClass ? getInputClassNames1(span, error, disabled) :getInputClassNames(span, error, disabled)}
        placeholder={placeholder?placeholder:" "}
      /></div>
      ) :type=="number" ? (<input
      
        disabled={disabled}
        type="text"
        name={name}
        accept={accept}
        id={id}
        required={false}
        maxLength={maxLength}
        pattern={pattern}
       onKeyDown={(evt) => {
    if (onkeyDown(evt)) {
      onkeyDown(evt);
    } else {
      onkeyDownforSpecialCharcter(evt);
    }
  }}
        value={value}
        onChange={onChange}
        className={UploadClass ? getInputClassNames1(span, error, disabled) :getInputClassNames(span, error, disabled)}
        placeholder={placeholder?placeholder:" "}
      />):(<input
      
        disabled={disabled}
        type={type}
        name={name}
        accept={accept}
        id={id}
        required={false}
        maxLength={maxLength}
        pattern={pattern}
        onKeyDown={onkeyDown}
        value={value}
        onChange={onChange}
        className={UploadClass ? getInputClassNames1(span, error, disabled) :getInputClassNames(span, error, disabled)}
        placeholder={placeholder?placeholder:" "}
      />)}
      <label htmlFor={id} className={getLabelClassNames(span, error, disabled)}>
      {!disabled &&label}
        { !disabled && astrix && <span className={getAstrixClassNames}>*</span>}

      </label>


      {error && <p className={getErrorClassNames}>{error}</p>}
    </div>
  );
};

export default InputField;
