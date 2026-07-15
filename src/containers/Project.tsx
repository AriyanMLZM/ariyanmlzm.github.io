import { projects } from '../constants'
import { Icon } from '@iconify/react'

const Project = ({ index, func }: any) => {
	return (
		<>
			<section className="w-full h-[10%] flex items-center py-6 md:px-0 px-[20%] justify-between">
				<button type="button" onClick={() => func(-1)}>
					<Icon
						icon="mingcute:left-fill"
						className="md:text-[60px] text-[50px] text-white hover:text-primary mr-[10px]"
					/>
				</button>
				<a
					href={projects[index].github}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon
						icon="mdi:github"
						className="md:text-[60px] text-[50px] text-white hover:text-primary mr-[10px]"
					/>
				</a>
			</section>
			<section className="flex flex-col w-full h-full overflow-auto md:px-0 px-[20%] pb-8">
				<section className="w-full flex flex-col justify-between items-center px-8">
					<div className=" relative w-full md:h-[440px] h-[250px] flex justify-center items-center">
						<div className=" absolute z-0 w-[99%] md:h-[438px] h-[248px] rounded-[40px] bg-gray-700 animate-pulse" />
						<img
							src={projects[index].img2}
							alt={projects[index].title}
							draggable={false}
							className=" absolute z-1 w-full select-none pointer-events-none rounded-[40px]"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col items-center mt-6 gap-2 text-[22px]">
						<h1 className="text-primary text-[30px]">
							{projects[index].title}
						</h1>
						<h2 className="text-orange-500 text-[25px]">
							{projects[index].techs}
						</h2>
					</div>
				</section>
				<section className="flex justify-center items-center mt-6 px-8">
					<p className="text-white text-[22px] text-justify">
						{projects[index].text}
					</p>
				</section>
			</section>
		</>
	)
}

export default Project
