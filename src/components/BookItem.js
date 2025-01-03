const BookItem = ({ book, onUpdate, onDelete }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <span>
          <strong>{book.name}</strong> (Quantity: {book.quantity})
        </span>
        <div>
          <button
            onClick={() => onUpdate(book.id)}
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "5px 10px",
              margin: "0 5px",
              border: "none",
              cursor: "pointer",
              borderRadius: "3px",
            }}
          >
            Update
          </button>
          <button
            onClick={() => onDelete(book.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
              border: "none",
              cursor: "pointer",
              borderRadius: "3px",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default BookItem; 