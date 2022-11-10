import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { books } = useContext(AppContext);
	return (
		<div className="pageBooks">
			<p>We are currently reading these {books.length} books:</p>

			<div className="books">
				{books.map((book) => {
					return (
						<div className="book">
							<img
								src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
							/>
							<div className="info">
								<div className="title">{book.title}</div>
								<div className="description">
									{book.description}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
