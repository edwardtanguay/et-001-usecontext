import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';

export const PageWelcome = () => {
	const { books } = useContext(AppContext);
	return (
		<>
			<p>Welcome to the study group.</p>

			<p>We are currently reading <NavLink to="/books">{books.length} books</NavLink>.</p>
		</>
	);
};
