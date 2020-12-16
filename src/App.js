import React from 'react';
import Routes from './routes.jsx';
import { AuthProvider } from './contexts/auth'

function App() {
  	return (
		<AuthProvider>
			<Routes/>
		</AuthProvider>
  	);
}

export default App;
