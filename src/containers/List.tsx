import { v4 as uuid } from 'uuid'

import { projects } from '../constants'
import { Item } from '../components'
import { close } from '../assets/icons'

const List = ({
	handleClick,
	handleClose,
}: {
	handleClick: (ind: number) => void
	handleClose: () => void
}) => {
	return (
		<>
			<section className="flex justify-end items-center w-full h-[8%] py-6 md:px-6 px-[23%]">
				<button type="button" onClick={handleClose}>
					<img width={'30px'} src={close} alt="close" />
				</button>
			</section>
			<section className="flex flex-row flex-wrap pb-10 h-full w-full gap-x-10 gap-y-10 justify-center scroll-smooth items-center overflow-auto md:px-0 px-[20%]">
				{projects.map((item, index) => (
					<Item
						item={item}
						index={index}
						handleClick={handleClick}
						key={uuid()}
					/>
				))}
			</section>
		</>
	)
}

export default List
