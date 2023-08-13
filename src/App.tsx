import "./style.css";

import AppLayout from "./components/AppLayout";
import UserProvider from "./contexts/UserContext";

const App = () => {
	return (
		<UserProvider>
			<AppLayout />
		</UserProvider>
	);
};

export default App;
