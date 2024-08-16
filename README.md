# Next.js Book App

This Next.js application allows users to explore books from different genres and search for books based on title or author. It provides an infinite scrolling list of books with a search functionality, and opens the book in the preferred format (HTML, PDF, or TXT) upon clicking.

## Features

- **Genre Selection:** Navigate through various book genres by clicking on genre buttons.
- **Infinite Scrolling:** Fetch and display more books as the user scrolls.
- **Search Functionality:** Filter books by title or author while maintaining the selected genre.
- **Book Formats:** Open the book in HTML, PDF, or TXT format based on availability.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mohit9889/Assignment.git
   cd Assignment
   ```

2. Install Dependencies

   Ensure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

3. Environment Variables

   Create a .env file in the root directory of the project and add the following environment variable:

   ```bash
   BASE_API_URL=http://skunkworks.ignitesol.com:8000
   ```

4. Run the Development Server

   ```bash
   npm run dev
   ```

   Open http://localhost:3000 in your browser to view the application.

## Usage

1. **Home Page**

   - Displays a list of genre buttons.
   - Clicking a genre button navigates to the genre-specific books page.

2. **Books Page**

   - Shows a list of books for the selected genre with infinite scrolling.
   - Use the search bar to filter books by title or author.
   - Click on a book card to open the book in the preferred format.

3. **Book Formats**

   - The application will attempt to open the book in the following order of priority:

     1. HTML
     2. PDF
     3. TXT

   - If none of these formats are available, an error alert will be displayed.
