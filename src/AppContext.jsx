import { useState, useEffect } from 'react';
import * as React from 'react';
import { createContext } from 'react';
import axios from 'axios';

const booksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const appTitle = 'The Study Group';
	const [books, setBooks] = useState([]);

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(booksUrl)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				books
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
