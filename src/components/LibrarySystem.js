import React, { useState } from "react";
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";

const LibrarySystem = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [formData, setFormData] = useState({ id: null, name: "", quantity: ""});

    const addBook = () => {
        if (formData.name && formData.quantity) {
            setBooks([...books, { id: Date.now(), ...formData }]);
            setFormData({ id: null, name:"", quantity: "" });
        }
    };

    const updateBook = (id) => {
        const bookToUpdate = books.find((b) => b.id === id);
        setFormData(bookToUpdate);
    };

    const saveUpdatedBook = () => {
        setBooks(books.map((b) => (b.id === formData.id ? formData : b)));
        setFormData({ id: null, name: "", quantity: ""});
    };

    const deleteBook = (id) => {
        const updatedBooks = books.map((b) =>
          b.id === id ? { ...b, quantity: b.quantity - 1 } : b
        );
        const filteredBooks = updatedBooks.filter((b) => b.quantity > 0);
        setBooks(filteredBooks);
    };
      
    const filteredBooks = books.filter((b) => b.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Manage Your Library</h2>
            {/* Search Bar */}
            <SearchBar onSearch={setSearchTerm} />
            <div style={{ margin: "20px 0" }}>
                <input type="text"
                placeholder="Book Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ margin: "5px", padding: "5px" }} />

                <input type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                style={{ margin: "5px", padding: "5px" }} />

                <button onClick={formData.id ? saveUpdatedBook : addBook}
                style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    cursor: "pointer",
                  }}>
                    {formData.id ? "Save Changes" : "Add Book"}
                </button>
            </div>
            {/* Book List */}
            <div>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                <BookItem
                  key={books.id}
                  book={book}
                  onUpdate={updateBook}
                  onDelete={deleteBook}
                />
                ))
            ) : (
                <p>No books available. Add some books to start!</p>
            )}
            </div>
        </div>
    );
};

export default LibrarySystem;