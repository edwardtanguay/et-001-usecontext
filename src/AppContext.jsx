import { useState, useEffect } from 'react';
import * as React from 'react';
import { createContext } from 'react';
import axios from 'axios';

const booksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';
const flashcardsUrl = 'http://localhost:5556/flashcards';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const appTitle = 'The Study Group';
	const [books, setBooks] = useState([]);
	const [flashcards, setFlashcards] = useState([]);

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(booksUrl)).data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setFlashcards((await axios.get(flashcardsUrl)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				books,
				flashcards
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
