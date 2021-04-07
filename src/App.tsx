// Library imports
import React from 'react';
import { Provider } from 'react-redux';

// File imports
import 'styles/index.scss';
import { Router } from 'views/components';
import { store } from 'store';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
};

export default App;
