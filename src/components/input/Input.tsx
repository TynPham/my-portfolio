import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Input({ label, id, type = 'text', ...rest }: InputProps) {
  return (
    <div className='relative z-0'>
      <input
        type={type}
        id={id}
        className='block py-2.5 pt-5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main_green peer'
        placeholder=' '
        {...rest}
      />
      <label
        htmlFor={id}
        className='absolute text-base xl:text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-main_green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
      >
        {label}
      </label>
    </div>
  )
}
