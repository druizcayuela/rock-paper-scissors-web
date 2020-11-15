import { BrowserRouter, Route } from 'react-router-dom';
import Presentation from './presentation/Presentation';

function App() {
  return (
	<BrowserRouter>
		<div>
			<Presentation></Presentation>
		</div>
	</BrowserRouter>
  );
}

export default App;
