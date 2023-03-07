import PhoneInput from 'react-phone-input-2'
import { classNames } from '../../helpers/classNames'
import { IHookInputProps } from '../../types'

export function InputField({
  label,
  rest,
  placeholder,
  required,
  className = '',
  select,
  errors,
  name,
  show,
  type,
  selectBorder,
  textArea,
  textAreaClass,
  disabled,
  register,
  value,
  message,
  onClick,
  validate,
  minLength,
  maxLength,
  pattern,
  onChange,
  optional,
}: IHookInputProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor="" className="text-base capitalize text-[#243763]">
          {label}
        </label>
      )}

      <div
        className={classNames(
          !errors && 'focus:border-green-600',
          errors && 'border-red-500',
          'flex justify-between items-center w-full bg-white py-2 border-2 border-inputBorder rounded-lg mt-1',
        )}
      >
        {textArea ? (
          <textarea
            name=""
            className="rounded-lg outline-none flex-1 px-3 py-2"
            rows={9}
          />
        ) : (
          <input
            {...register(name, { required })}
            placeholder={placeholder}
            className="rounded-lg outline-none flex-1 px-3 py-2"
            name={name}
            type={type}
            disabled={disabled}
            value={value}
            {...rest}
          />
        )}

        {show && (
          <p onClick={onClick} className="cursor-pointer text-xs px-1">
            {show === 'show' ? 'show' : 'hide'}
          </p>
        )}
      </div>
      {errors && <span className="text-red-500 text-sm">{message}</span>}
    </div>
  )
}

export const PhoneField = ({ label, placeholder }: IHookInputProps) => {
  return (
    <div className="mb-6">
      {label && (
        <label htmlFor="" className="text-xs font-semibold pb-1">
          {label}
        </label>
      )}

      <PhoneInput
        country={'us'}
        value={''}
        onChange={() => {}}
        containerClass=" w-full"
        searchClass=""
        inputStyle={{ width: '100%', height: '50px', marginTop: '10px' }}
        placeholder={placeholder}
      />
    </div>
  )
}

export const SelectField = ({
  label,
  className,
  selectArray,
  selectBorder,
  selectLabel,
  labelClass,
}: IHookInputProps) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor="" className={labelClass}>
          {label}
        </label>
      )}
      <div>
        <select
          className={classNames(
            selectBorder && selectBorder,
            'w-full p-3 rounded-lg outline-none bg-white border-inputBorder border-1 mt-1 text-tintedAsh',
          )}
          name=""
          id=""
        >
          {selectArray?.map((_item: any, index: any) => {
            return (
              // <div key={}>
              <option key={index} value={_item.value}>
                {_item.text}
              </option>
              // </div>
            )
          })}
        </select>
      </div>
    </div>
  )
}
