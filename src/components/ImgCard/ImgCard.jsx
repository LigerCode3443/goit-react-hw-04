export const ImgCard = ({ alt_description, urls }) => {
  return (
    <>
      <img
        src={urls.regular}
        alt={alt_description}
        className=""
        width="350px"
      />
    </>
  );
};
