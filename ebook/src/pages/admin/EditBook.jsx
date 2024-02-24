import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Book from "../../model/Book";
import bookService from "../../service/book.service";
import categoryService from "../../service/category.service";
import "./AddBook.css";
import { ToastContainer, toast } from "react-toastify";

const EditBook = () => {
  const [book, setBook] = useState(
    new Book("", "", "", "", "", "", "", "", "", "")
  );

  const [categoryList, setCategoryList] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    bookService
      .getBookById(id)
      .then((res) => {
        setBook(res.data);
        getCategory();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getCategory = () => {
    categoryService
      .getAllCategory()
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBookImage = (e) => {
    setImgFile(e.target.files[0]);
  };

  const notify = () =>
    toast.success("Book Added Sucesfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleInput = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };




    bookService
      .updateBook(fd)
      .then((res) => {
        //console.log(res.data);
        notify();
        navigate("/admin/viewBook");
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log(book);
  };

  return (
    <div class="card paint-card cardx">
      <div class="card-body">
        <h4 class="form-signin-heading text-center">Edit Book</h4>
        <form
          class="form-signin"
          method="post"
          onSubmit={(e) => submitEditBook(e)}
        >
          <div className="row">
            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">
                Book Name
              </label>
              <input
                type="text"
                class="form-control"
                required
                name="bookName"
                value={book.bookName}
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">
                Author
              </label>
              <input
                type="text"
                class="form-control"
                required
                name="author"
                value={book.author}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>

          <div className="row">
            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">
                Category
              </label>

              <select
                name="categorysId"
                class="form-control"
                onChange={(e) => handleInput(e)}
              >
                {categoryList.length > 0 && (
                  <option value={book.category.id} name="categorysId">
                    {book.category.categoryName}
                  </option>
                )}

                {categoryList.map((c, num) => (
                  <>
                    <option value={c.id}>{c.categoryName}</option>
                  </>
                ))}
              </select>
            </div>

            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">
                ISBN No
              </label>
              <input
                type="text"
                class="form-control"
                required
                name="isbnNo"
                value={book.isbnNo}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="row">
            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">
                Price
              </label>
              <input
                type="number"
                class="form-control"
                required
                name="price"
                value={book.price}
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">
                Image
              </label>
              <input
                type="file"
                class="form-control"
                name="img"
                onChange={(e) => handleBookImage(e)}
              />
              <strong>{book.img}</strong>
            </div>
          </div>

          <div class="mb-3 col">
            <label for="exampleInputEmail1" class="form-label">
              Language
            </label>
            <input
              type="text"
              class="form-control"
              required
              name="language"
              value={book.language}
              onChange={(e) => handleInput(e)}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Description
            </label>
            <textarea
              rows="3"
              cols=""
              class="form-control"
              name="description"
              value={book.description}
              onChange={(e) => handleInput(e)}
            ></textarea>
          </div>
          <button class="btn bg-primary text-white col-md-12" type="submit">
            Submit
          </button>

          <div class="text-center p-3"></div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export { EditBook };
