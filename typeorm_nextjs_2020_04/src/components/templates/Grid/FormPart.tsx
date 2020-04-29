/* eslint-disable react/destructuring-assignment *//* eslint-disable @typescript-eslint/explicit-function-return-type */import { useField } from 'formik';import * as React from 'react';import * as Yup from 'yup';import Typos from '../../atoms/Typos';import { WithFormPrefix } from '../../organisms';
// TBD  Tagged Union化の検討type FormInputType = 'text' | 'textArea' | 'select';
export interface FormDef {  required: boolean;  formName: string;  label: string;  note?: string;  inputType: FormInputType;  placeHolder: string;  // TODO 型のジェネリクス化  yupValidationRule?: Yup.Schema<string>;}
export function newInputForm<PROPS extends WithFormPrefix>(  formDef: FormDef): React.FC<PROPS> {  return props => {    const formName = props.formPrefix      ? `${props.formPrefix}.${formDef.formName}`      : formDef.formName;
    const mergedProps = { ...props, name: formName };
    const [field, meta] = useField<PROPS>(mergedProps);
    return (      <>        {/* {console.log('FormPart#newInputForm : props=', props)} */}        {meta.touched && meta.error && (          <div data-testid={`${formName}.error`}>            <Typos.BodyAlert>{meta.error}</Typos.BodyAlert>          </div>        )}
        {/* TBD roleに label をつける是非の検討 */}        <input          role={formDef.label}          type={formDef.inputType}          name={field.name}          placeholder={formDef.placeHolder}          onChange={field.onChange}          value={field.value?.toString()}          required={formDef.required}        />
        {formDef.note && <div className="notes">{formDef.note}</div>}      </>    );  };}
export default newInputForm;
