import "./App.css";
import { Header, ImageGallery, LoadMore } from "components";
import { useEffect, useState } from "react";
import { getPhotos } from "service/photoApi";
import { Loader } from "./components";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoader(true);
        setError(false);
        const { results, total, total_pages } = await getPhotos(query, page);
        setPhotos((prev) => [...prev, ...results]);
        setLoadMore(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    getData();
  }, [query, page]);
  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Header setQuery={handleSubmit} />
      {error && <p>Sorry error</p>}
      <ImageGallery photos={photos} />
      {isLoader && <Loader />}
      {loadMore && <LoadMore handleLoadMore={handleLoadMore} />}
    </>
  );
}

export default App;
