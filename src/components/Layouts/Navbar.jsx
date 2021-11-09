import React, { useContext } from "react";
import { Hooks } from "providers";
import Connect from "components/Transactions";

function Navbar() {
  const { scroll, wallet_ } =
    useContext(Hooks);
  return (
    <>
      <div
        // className={`navbar active`}
        className={`navbar ${scroll && "active"}`}
        style={{ zIndex: "999999" }}
      >
        <div
          style={{
            opacity: 1,
          }}
        >
          <ul className="">
            <div style={{ display: "none" }}>{/* <Connect /> */}</div>

            {/* <li style={{
              display: wallet_ ? 'none' : 'display'
            }}> */}
            {/* <span
                onClick={() => (
                  <>
                    <Connect />
                  </>
                )}
              > */}
            {/* Connect Wallet */}
            {!wallet_ && <Connect />}
            {/* </span> */}
            {/* </li> */}
            <li>
              <a href="/menu" target="_blank" rel="noreferrer">
                MENU
              </a>
            </li>
            <li>
              <a href="#home-desc">DESCRIPTION</a>
            </li>
            <li>
              <a href="#home-faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
