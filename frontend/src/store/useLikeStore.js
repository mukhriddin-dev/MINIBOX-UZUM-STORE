const useLikeStore = () => {
  const likedProducts = JSON.parse(localStorage.getItem("LIKE_COLLECTION"));

  const likeProdFunc = (product, isLike, setIsLike) => {
    if (isLike == false) {
      if (!likedProducts) {
        localStorage.setItem("LIKE_COLLECTION", JSON.stringify([product]));
      }

      if (likedProducts.find((pr) => pr._id === product._id)) {
        alert("Bu product bor");
      } else {
        localStorage.setItem(
          "LIKE_COLLECTION",
          JSON.stringify([...likedProducts, product])
        );
      }
    } else {
      const removeProd = JSON.parse(
        localStorage.getItem("LIKE_COLLECTION")
      ).filter((v) => v._id !== product._id);
      localStorage.setItem("LIKE_COLLECTION", JSON.stringify([...removeProd]));
    }
  };

  return { likeProdFunc };
};

export default useLikeStore;
