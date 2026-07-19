import { twMerge as tg } from 'tailwind-merge'

const Button2 = ({
	func,
	active = false,
	children,
	className = '',
}: {
	func: any
	active?: boolean
	children: React.ReactNode
	className?: string
}) => {
	return (
		<button
			type="button"
			className={tg(
				'hover:text-primary px-[8px] py-[4px] flex items-center justify-center',
				active && 'text-primary',
				className,
			)}
			onClick={() => func()}
		>
			{children}
		</button>
	)
}

export default Button2
