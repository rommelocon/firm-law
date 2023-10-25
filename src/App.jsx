import './App.css';
import Products from './Pages/Products';
import Collections from './Pages/Collections';
import Contacts from './Pages/Contacts';
import Navbar from './components/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path='/' Component={Home} />
					<Route path='/products' Component={Products} />
					<Route path='/collections' Component={Collections} />
					<Route path='/contacts' Component={Contacts} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
