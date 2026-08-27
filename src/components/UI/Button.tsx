import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="bg-brand-gradient shadow-brand-glow hover:opacity-90 disabled:opacity-40 w-full cursor-pointer rounded-xl px-[10px] py-2 font-semibold text-white transition-opacity duration-300">
      {text}
    </button>
  )
}

export default Button
