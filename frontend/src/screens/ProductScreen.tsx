import React, { ReducerAction, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {detailsProduct, saveProductReview} from '../actionCreators'
//import Rating from '../components/Rating';
//import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';

function ProductScreen(props: any) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const userSignin: any = useTypedSelector((state) => state.userSignin);
   const { userInfo } = userSignin;
   const productDetails: any = useTypedSelector((state) => state.productDetails);
   const { product, loading, error } = productDetails;
   const productReviewSave: any = useTypedSelector((state) => state.productReviewSave);
   const { success: productSaveSuccess } = productReviewSave;
  const dispatch = useDispatch();
  const {id} = useParams() 
  let navigate = useNavigate()

  useEffect(() => {
    if (productSaveSuccess) {
      alert('Review submitted successfully.');
      setRating(0);
      setComment('');
    //   dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
    }
    //dispatch(detailsProduct(props.match.params.id));
    
    dispatch(detailsProduct(id));
    return () => {
      //
    };
  }, [dispatch, id, productSaveSuccess]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch actions
    // dispatch(
    //   saveProductReview(props.match.params.id, {
    //     name: userInfo.name,
    //     rating: rating,
    //     comment: comment,
    //   })
    // );
  };
  const handleAddToCart = () => {
    navigate('/cart/' + id + '?qty=' + qty)
    //props.history.push('/cart/' + id + '?qty=' + qty);
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <>
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  <a href="#reviews">
                    {/* <Rating
                      value={product.rating}
                      text={product.numReviews + ' reviews'}
                    /> */}
                  </a>
                </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>Price: {product.price}</li>
                <li>
                  Status:{' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                </li>
                <li>
                  Qty:{' '}
                  <select
                    value={qty}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setQty(parseInt(e.target.value));
                    }}
                  > 
                    {Array.from(Array(product.countInStock).keys()).map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="content-margined">
            <h2>Reviews</h2>
            {/* {!product.reviews.length && <div>There is no review</div>} */}
            <ul className="review" id="reviews">
              {/* {product.reviews.map((review: any) => (
                <li key={review._id}>
                  <div>{review.name}</div>
                  <div>
                    <Rating value={review.rating}></Rating>
                  </div>
                  <div>{review.createdAt.substring(0, 10)}</div>
                  <div>{review.comment}</div>
                </li>
              ))} */}
              <li>
                <h3>Write a customer review</h3>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <ul className="form-container">
                      <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(parseInt(e.target.value))}
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                ) : (
                  <div>
                    Please <Link to="/signin">Sign-in</Link> to write a review.
                  </div>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
export default ProductScreen;