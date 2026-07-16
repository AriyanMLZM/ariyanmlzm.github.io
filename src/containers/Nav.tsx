const Nav = ({
	toggleRain,
}: {
	toggleRain: (config: { stat?: boolean; withEffect?: boolean }) => void
}) => {
	return (
		<div
			onClick={() => toggleRain({ withEffect: true })}
			className="fixed top-[5px] left-[5px] text-[20px] text-white z-20"
		>
			hello
		</div>
	)
}

export default Nav
