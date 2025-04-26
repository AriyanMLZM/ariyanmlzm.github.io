import { v4 as uuid } from 'uuid'

const Item = ({
	item,
	index,
	handleClick,
}: {
	item: any
	index: number
	handleClick: (ind: number) => void
}) => {
	return (
		<button
			type="button"
			onClick={() => handleClick(index)}
			className="border-primary flex flex-col items-center pt-10 pb-10 bg-[#090d1c] hover:bg-gray-800 border-solid border-[3px] rounded-[20px] w-[350px] h-[78%]"
			key={uuid()}
		>
			<div className=" relative w-[150px] h-[260px] flex justify-center items-center">
				<div className=" absolute z-0 w-[148px] h-[247px] rounded-[20px] bg-gray-700 animate-pulse" />
				<img
					key={uuid()}
					src={item.img1}
					alt={item.info}
					draggable={false}
					className="absolute z-1 w-full select-none pointer-events-none rounded-[20px]"
				/>
			</div>
			<div className="flex flex-col min-h-[220px] w-full">
				<div className='min-h-[60px]'>
					<h1 key={uuid()} className="text-white text-[28px] mt-[40px]">
						{item.title}
					</h1>
					<h2 key={uuid()} className="text-primary text-[25px] mt-2">
						{item.info}
					</h2>
				</div>
				<h2 key={uuid()} className="text-orange-500 text-[22px] mt-6 line-clamp-2 p-[20px]">
					{item.techs}
				</h2>
			</div>
		</button>
	)
}

export default Item
