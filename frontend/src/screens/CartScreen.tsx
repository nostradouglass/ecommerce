import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actionCreators";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";

function CartScreen(props: any) {
  const cart = useTypedSelector((state) => state.cart);

  const { cartItems } = cart;

  const params = useParams();
  const productId = params.id;
  const { search } = useLocation();
  const qty = search ? Number(search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId: string) => {
    dispatch(removeFromCart(productId));
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  const cartArea = () => {

    if (cartItems.length === 0) {
      return (
      <div>Cart is empty</div>
      )
    } else {
      return (
        cartItems.map((item) => (
          <li key={item.product}>
            <div className="cart-image">
              <img src={item.image} alt="product" />
            </div>
            <div className="cart-name">
              <div>
                <Link to={"/product/" + item.product}>{item.name}</Link>
              </div>
              <div>
                Qty:
                <select
                  value={item.qty}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    dispatch(
                      addToCart(item.product, parseInt(e.target.value))
                    )
                  }
                >
                  {Array.from(Array(item.countInStock).keys()).map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="button"
                  onClick={() => removeFromCartHandler(item.product)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="cart-price">${item.price}</div>
          </li>
        )
      )
      )
  }
}

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartArea()}
        </ul>
      </div>
      {/* <div className="cart-action">
        <h3>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${" "}
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button
          onClick={checkoutHandler}
          className="button primary full-width"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div> */}
    </div>
  );
}

export default CartScreen;
