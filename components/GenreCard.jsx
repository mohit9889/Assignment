import Image from "next/image";
import genreUtils from "~/utils/genreUtils";
import NextSvg from "~/public/assets/Next.svg";
import Link from "next/link";

const GenreCard = ({ genre = "" }) => {
  return (
    <div className="genre-card">
      <div className="genre flex items-center">
        <Image
          src={genreUtils[genre]}
          alt={`${genre} icon`}
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <Link href={`/${genre.toLowerCase()}`} as={`/${genre.toLowerCase()}`}>
          <p className="genre-text ml-3">{genre}</p>
        </Link>
      </div>
      <span className="icon">
        <NextSvg />
      </span>
    </div>
  );
};

export default GenreCard;
