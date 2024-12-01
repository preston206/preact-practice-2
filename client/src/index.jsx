import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { AppProvider } from './components/Context.jsx';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { About } from './pages/_about.jsx';
import { AppPage } from './pages/App/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<AppProvider>
			<LocationProvider>
				<Header />
				<main>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/app" component={AppPage} />
						<Route default component={NotFound} />
					</Router>
				</main>
			</LocationProvider>
		</AppProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
