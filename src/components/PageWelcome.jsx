import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';

export const PageWelcome = () => {
	const { books, flashcards } = useContext(AppContext);
	return (
		<>
			<p>Welcome to the study group.</p>

			<p>
				We are currently reading{' '}
				<NavLink to="/books">{books.length} books</NavLink>.
			</p>
			<p>
				We are currently learning{' '}
				<NavLink to="/flashcards">
					{flashcards.length} flashcards
				</NavLink>
				.
			</p>
		</>
	);
};
