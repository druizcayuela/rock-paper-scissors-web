import { BrowserRouter, Route } from 'react-router-dom';
import Counter from './counter/Counter';
import Presentation from './presentation/Presentation';
import Round from './round/Round';
import RoundFooter from './roundFooter/RoundFooter';

function App() {
  return (
	<BrowserRouter>
		<div>
			<Presentation>
			<Route exact path='/' render={props =>
				<div>
					<Counter />
					<Round />
					<RoundFooter />
				</div>}
			/>
			<Route exact path='/total' render={props =>
				<div>
					Nuflo
				</div>}
			/>
			</Presentation>
		</div>
	</BrowserRouter>
  );
}

export default App;
