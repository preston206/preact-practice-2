import { createContext } from 'preact';

export const Context = createContext();

export const AppProvider = ({ children }) => {

	const test1 = "test-1";
	const test2 = "test-2";

	return (
		<Context.Provider value={{ test1, test2 }}>
			{children}
		</Context.Provider>
	);
};
