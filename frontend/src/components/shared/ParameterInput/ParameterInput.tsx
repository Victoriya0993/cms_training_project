import React from "react";
import styles from './ParameterInput.module.css';

export interface ParameterInputComponentProps {
  value: string;
  editFlag?: boolean;
  onChange: (newValue: string) => void;
  color?: string;
  height?: string;
  textareaFlag?: boolean;
  width?: string;
}


export const ParameterInput: React.FC<ParameterInputComponentProps> = (
  props
) => {
  const { value, onChange, editFlag = false, color, height, width } = props;

  const changeHandler = (event) => {
    onChange(event.currentTarget.value);
  };

  return (
    <>
      {editFlag &&
        <input
          style={{ backgroundColor: `${color ? color : 'transparent'}`, height: height, width: width }}
          value={value}
          onChange={changeHandler}
          className={styles.input_question}

        />
      }
      {!editFlag && <div
        style={{ backgroundColor: `${color ? color : 'transparent'}`, height: height, width: width }}
        className={styles.input_question}
      > {value}</div>
      }
    </>
  );
};
