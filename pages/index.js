import GenreCard from "~/components/GenreCard";
import genreUtils from "~/utils/genreUtils";

const Home = () => {
  return (
    <div className="bg-background h-full w-full">
      <div className="container mx-auto">
        <div
          className="header bg-no-repeat bg-center bg-cover pt-6 pb-3"
          style={{ backgroundImage: "url('/assets/Pattern.svg')" }}
        >
          <h1 className="heading-1">Gutenberg Project</h1>
          <p className="body-text">
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </p>
        </div>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-[100px]">
          {Object.keys(genreUtils).map((genre) => (
            <GenreCard key={genre} genre={genre} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
