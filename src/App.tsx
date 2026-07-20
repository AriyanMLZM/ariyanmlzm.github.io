import { useLang } from './hooks'
import { Home } from './pages'

const App = () => {
	const lang = useLang()

	return (
		<main
			className="bg-[#000] flex justify-center items-center h-screen"
			style={{ fontFamily: lang === 'fa' ? 'Vazir' : 'Poppins' }}
		>
			<Home />
		</main>
	)
}

export default App
