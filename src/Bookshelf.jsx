import { useState } from 'react';

const Bookshelf = () => {
    //states
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    //handleInputChange
    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value, });
    }

    //handleSubmit
    function handleSubmit(event) {
        event.preventDefault();
        if (!newBook.title || !newBook.author) return;
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' })
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Author:
                        <input type="text" name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Add Book</button>
                </form>
            </div>

            <div className="bookCardsDiv">
                {books.map((book, idx) => (
                    <div key={idx} className="bookCard">
                        <strong>{book.title}</strong>
                        <br />
                        <div>by {book.author}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;