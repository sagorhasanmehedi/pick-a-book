import Swal from "sweetalert2";
const AddToDb = ( Book ) => {


  const stor = GetDb();

  if (stor === null) {
    localStorage.setItem(
      "Book",
      JSON.stringify([
        {
          _id: Book._id,
          author_name: Book.author_name,
          book_name: Book.book_name,
          image: Book.image,
          price: Book.price,
          offer_percentage:Book.offer_percentage,
          quantity: 1,
        },
      ])
    );
    Swal.fire({
      icon: "success",
      title: `Book Successfully Added To Cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    const found = stor.find((element) => element._id === Book._id);

    if (found) {
      const storCart = GetDb();
      const newArr = storCart.map((obj) => {
        if (obj._id === Book._id) {
          const newQuantity = obj.quantity + 1;
          return { ...obj, quantity: newQuantity };
        }

        return obj;
      });

      localStorage.setItem("Book", JSON.stringify(newArr));
     
    } else {
      localStorage.setItem(
        "Book",
        JSON.stringify([
          ...stor,
          {
            _id: Book._id,
            author_name: Book.author_name,
            book_name: Book.book_name,
            image: Book.image,
            price: Book.price,
            offer_percentage:Book.offer_percentage,
            quantity: 1,
          },
        ])
      );
    }
  }
  Swal.fire({
    icon: "success",
    title: `Book Successfully Added To Cart`,

    showConfirmButton: false,
    timer: 1500,
  });
};

const RemoveBook = (NewItems) => {
  localStorage.setItem("Book", JSON.stringify(NewItems));
};

const GetDb = () => {
  const exist = localStorage.getItem("Book");
  return JSON.parse(exist);
};

export { AddToDb, RemoveBook, GetDb };
