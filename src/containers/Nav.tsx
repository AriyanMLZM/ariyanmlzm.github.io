import { Tab } from '../components'

const Nav = ({
	changeScene,
}: {
	changeScene: (snum: number, gif: boolean) => void
}) => {
	const handleClick = (ind: number) => {
		changeScene(ind, false)
	}

	return (
		<>
			<Tab text="About" ind={1} handleClick={handleClick} />
		</>
	)
}

export default Nav
