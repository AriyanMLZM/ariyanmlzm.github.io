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
			<Tab props={{ text: 'About', ind: 1, handleClick }} />
		</>
	)
}

export default Nav
