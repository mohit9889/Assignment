import { useState, useEffect, useRef, useCallback } from "react";

const InfiniteScrollWrapper = ({
  initialData = [],
  initialNextPage = null,
  fetchMoreData,
  children,
}) => {
  const [data, setData] = useState(initialData);
  const [nextPage, setNextPage] = useState(initialNextPage);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();

  // Function to load more data
  const loadMoreData = async () => {
    if (isLoading || !nextPage) return; // Prevent multiple simultaneous requests
    setIsLoading(true);
    const result = await fetchMoreData(nextPage);
    if (result) {
      setData((prevData) => [...prevData, ...result.data]);
      setNextPage(result.nextPage);
    }
    setIsLoading(false);
  };

  // Intersection observer callback
  const handleIntersection = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading && nextPage) {
        loadMoreData();
      }
    },
    [nextPage, isLoading],
  );

  // Set up the Intersection Observer
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "200px", // Trigger when the element is 200px before reaching the viewport
    });

    const sentinel = document.querySelector("#sentinel");

    if (sentinel) {
      observerRef.current.observe(sentinel);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [handleIntersection]);

  return (
    <>
      {children(data)}
      <div id="sentinel" />
      {isLoading && <div className="text-center py-4">Loading...</div>}
    </>
  );
};

export default InfiniteScrollWrapper;
