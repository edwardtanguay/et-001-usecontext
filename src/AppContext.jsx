import * as React from 'react';
import { createContext } from 'react';

// export interface IAppContext {
// 	appTitle: string;
// }

export const AppContext = createContext();

// export const AppProvider: React.FC<React.ReactNode> = (children) => {
export const AppProvider = ({ children }) => {
	const appTitle = 'The Study Group';

	return (
		<AppContext.Provider
			value={{
				appTitle
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
