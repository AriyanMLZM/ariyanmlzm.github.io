import { Icon } from '@iconify/react'

const CloseIcon = ({ className = '' }: { className?: string }) => {
	return (
		<Icon
			icon="ic:round-close"
			className={'text-white hover:text-primary text-[50px] ' + className}
		/>
	)
}

export default CloseIcon
