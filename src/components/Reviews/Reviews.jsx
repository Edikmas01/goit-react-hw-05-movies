export const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(item => (
            <li>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </>
  );
};
