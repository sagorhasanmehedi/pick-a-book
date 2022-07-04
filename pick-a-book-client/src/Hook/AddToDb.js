const AddToDb = (Book) => {
  const stor = GetDb();


  if (stor === null) {
    localStorage.setItem(
      "Book",
      JSON.stringify([
        {
          _id: Book._id,
          author_name: Book.author_name,
          book_name: Book.name,
          image: Book.image,
          price: Book.price,
          quantity: 1,
        },
      ])
    );
  } else {
    localStorage.setItem(
      "Book",
      JSON.stringify([
        ...stor,
        {
          _id: Book._id,
          author_name: Book.author_name,
          book_name: Book.name,
          image: Book.image,
          price: Book.price,
          quantity: 1,
        },
      ])
    );
  }
};

const GetDb = () => {
  const exist = localStorage.getItem("Book");
  return JSON.parse(exist);
};

export { AddToDb };
