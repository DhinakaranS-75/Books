// Function to fetch data from the Google Books API
function getBooks(searchTerms) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`;
  
    return fetch(apiUrl)
      .then(response => response.json())
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Function to display books on the webpage
  function displayBooks(data) {
    const bookResultsDiv = document.getElementById('bookResults');
  
    if (data && data.items) {
      data.items.forEach(item => {
        const book = item.volumeInfo;
        const title = book.title || 'No Title';
        const subtitle = book.subtitle || '';
        const publisher = book.publisher || 'Unknown Publisher';
        const description = book.description || 'No description available';
        const imageUrl = book.imageLinks?.thumbnail || 'placeholder.jpg'; // Replace 'placeholder.jpg' with your default image URL
  
        const bookCard = document.createElement('div');
        bookCard.classList.add('col-md-4', 'my-3');
  
        const bookImage = document.createElement('img');
        bookImage.src = imageUrl;
        bookImage.alt = title;
        bookImage.classList.add('img-fluid', 'book-image');
  
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = title;
  
        const bookSubtitle = document.createElement('h5');
        bookSubtitle.textContent = subtitle;
  
        const bookPublisher = document.createElement('p');
        bookPublisher.textContent = `Publisher: ${publisher}`;
  
        
  
        bookCard.appendChild(bookImage);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookSubtitle);
        bookCard.appendChild(bookPublisher);
       
  
        bookResultsDiv.appendChild(bookCard);
      });
    } else {
      bookResultsDiv.textContent = 'No books found.';
    }
  }
  
  // Main function to perform the search and display the results
  function searchBooks() {
    const searchTerms = 'your_search_query_here'; // Replace with your desired search query
    getBooks(searchTerms)
      .then(data => displayBooks(data))
      .catch(error => console.error('Error:', error));
  }
  
  // Perform the initial search on page load
  searchBooks();
  