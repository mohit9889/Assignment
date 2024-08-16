import Image from "next/image";

const BookCard = ({ book: { title = "", formats = {}, authors = [] } }) => {
  // Function to handle card click
  const handleCardClick = () => {
    // Define the priority order
    const priorityOrder = ["text/html", "application/pdf", "text/plain"];

    // Find the first available format based on priority
    let preferredFormatUrl = null;
    for (const format of priorityOrder) {
      if (formats[format]) {
        preferredFormatUrl = formats[format];
        break;
      }
    }

    if (preferredFormatUrl) {
      // Open the preferred format URL in a new tab
      window.open(preferredFormatUrl, "_blank");
    } else {
      // Show an error alert if no preferred format is available
      alert("No viewable version available.");
    }
  };

  return (
    <div
      className="max-w-[114px] flex flex-col cursor-pointer"
      onClick={handleCardClick}
    >
      <Image
        src={formats["image/jpeg"]}
        alt={title}
        width={114}
        height={130}
        className="h-[130px] w-[114px] rounded"
      />
      <span className="book-name text-greyDark mt-2">
        {title.length > 26 ? `${title.slice(0, 26)}...` : title.toUpperCase()}
      </span>
      {authors.length > 0 && (
        <span className="book-author text-greyMedium mt-1">
          {authors[0].name}
        </span>
      )}
    </div>
  );
};

export default BookCard;
