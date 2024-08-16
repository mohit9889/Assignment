import { useState, useEffect } from "react";
import SearchBar from "~/components/SearchBar";
import InfiniteScrollWrapper from "~/components/InfiniteScroll";
import { fetchBooks } from "~/api";
import BackSvg from "~/public/assets/Back.svg";
import BookCard from "~/components/BookCard";

const GenrePage = ({ genre = "", books = {} }) => {
  const [booksData, setBooksData] = useState(books.results);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMoreBooks = async (nextPageUrl) => {
    const data = await fetchBooks(nextPageUrl.split("?")[1]);
    console.log(data, nextPageUrl.split("?")[1], "<<<log");
    return {
      data: data.results,
      nextPage: data.next,
    };
  };

  // Fetch books based on search query
  const searchBooks = async (query) => {
    const data = await fetchBooks(`search=${encodeURIComponent(query)}`);
    if (data) {
      setBooksData(data.results || []);
    }
  };

  // Effect to search books when searchQuery changes
  useEffect(() => {
    searchBooks(searchQuery);
  }, [searchQuery]);

  return (
    <div className="h-full w-full">
      <div className="header container py-4 mx-auto">
        <h1 className="heading-2 flex items-center gap-2 mb-2">
          <BackSvg />
          {genre.toUpperCase()}
        </h1>
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <div className="bg-background">
        <div className="container py-4 mx-auto">
          {/* <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8">
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div> */}
          <InfiniteScrollWrapper
            initialData={booksData}
            initialNextPage={books.next}
            fetchMoreData={fetchMoreBooks}
          >
            {(data) => (
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-x-4 gap-y-8">
                {data.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}
          </InfiniteScrollWrapper>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Extract genre from query params
  const { genre } = context.query;

  if (!genre) {
    return {
      notFound: true, // Return 404 if genre is missing
    };
  }

  const data = await fetchBooks(`topic=${genre}`);

  if (!data) {
    return {
      props: {
        error: "Failed to fetch data",
      },
    };
  }

  return {
    props: {
      genre,
      books: data, // Pass fetched data to the page component
    },
  };
}

export default GenrePage;
