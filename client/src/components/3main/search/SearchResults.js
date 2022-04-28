import React, { useState } from "react";

import axios from "axios";

function SearchResults() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyDCixGsTQiYIQvTY9N-ImbgsJTX3OBOdTQ"
  );
  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  return (
    <div class="container">
      <h1>Search Your Favourite Books</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control mt-10"
            placeholder="Search for Books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>

      {result.map((book) => (
        <a target="_blank" href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
        </a>
      ))}
    </div>
  );
}

export default SearchResults;
