import { links } from '../constants'
import { Icon } from '@iconify/react'

const Footer = () => {
	return (
		<>
			<div className="w-[25%] flex flex-col text-orange-600 text-[20px] md:text-[25px] items-end justify-between pt-4 pb-4">
				<h2 className="text-right">{'<footer>'}</h2>
				<h2 className="text-right">{'</footer>'}</h2>
			</div>
			<div className="w-[50%] flex md:gap-20 gap-10 items-center justify-center pl-4">
				<a href={links.github} target="_blank" rel="noopener noreferrer">
					<Icon
						icon="mdi:github"
						className="md:text-[90px] text-[70px] text-white hover:text-primary"
					/>
				</a>
				<a href={links.tel} target="_blank" rel="noopener noreferrer">
					<Icon
						icon="ic:baseline-telegram"
						className="md:text-[90px] text-[70px] text-white hover:text-primary"
					/>
				</a>
				<a href={links.wat} target="_blank" rel="noopener noreferrer">
					<Icon
						icon="ic:baseline-whatsapp"
						className="md:text-[90px] text-[70px] text-white hover:text-primary"
					/>
				</a>
				<a
					href={`mailto:${links.gmail}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon
						icon="streamline:gmail-solid"
						className="md:text-[90px] text-[70px] text-white hover:text-primary"
					/>
				</a>
				<a
					href={`tel:${links.phone}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon
						icon="ic:round-phone"
						className="md:text-[90px] text-[70px] text-white hover:text-primary"
					/>
				</a>
			</div>
		</>
	)
}

export default Footer
