import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId ()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input  id={cartCheckboxId} type="checkbox" hidden />
    
      <aside className="cart">
        <ul >
          <li>
            <img 
            src="" 
            alt=""
            />
            <div>
              <strong></strong>
            </div>

            <footer>
              <small>

              </small>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}