import React from "react";
import styles from './ParameterTextarea.module.css';

export interface ParameterTextareaComponentProps {
  value: string;
  editFlag?: boolean;
  onChange: (newValue: string) => void;
  color?: string;
  height?: string;
  textareaFlag?: boolean;
}


export const ParameterTextarea: React.FC<ParameterTextareaComponentProps> = (
  props
) => {
  const { value, onChange, editFlag = false, color, height } = props;

  const changeHandler = (event) => {
    onChange(event.currentTarget.value);
  };

  return (
    <>
      {editFlag &&
        <textarea
          style={{ backgroundColor: `${color ? color : 'transparent'}`, height: `${height}` }}
          value={value}
          onChange={changeHandler}
          className={styles.input_question}

        />
      }
      {!editFlag && <div
        style={{ backgroundColor: `${color ? color : 'transparent'}`, height: `${height}` }}
        className={styles.input_question}
      > {value}</div>
      }
    </>
  );
};
