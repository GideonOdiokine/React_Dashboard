import React from "react";
import "./table.css";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import pic from "../../img/bb.png";

function Table({ th, td, btnTxt, Icons }) {
  const [noElem, setNoElem] = useState(3);
  const [pag, setPag] = useState(false);

  const loadMore = () => {
    setNoElem(noElem + noElem);
    setPag(true);
  };
  const slice = td.slice(0, noElem);
  return (
    <div className="table__container">
      <h2
        style={{
          padding: "18px",
          fontFamily: "sans-serif",
          color: "gray",
          fontWeight: "100",
          fontSize: "15px",
        }}
      >
        LASTEST ORDERS
      </h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              {th.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slice.map((d, i) => (
              <tr key={i}>
                <td id="riderImg">
                  {d.name || (d.user && <img src={pic} alt="" />)}
                  {d.user}
                </td>
                <td> {d.pickup || d.country} </td>
                <td> {d.dropOff || d.drop} </td>
                <td>{d.Gsm || d.phone}</td>
                <td>
                  {d.rider ||
                    (d.statusD === "Free" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="td__Icons"
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                      >
                        <circle
                          id="Ellipse_363"
                          data-name="Ellipse 363"
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          fill="#f00000"
                        />
                      </svg>
                    )) ||
                    (d.statusD === "Enroute" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                      >
                        <circle
                          id="Ellipse_362"
                          data-name="Ellipse 362"
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          fill="#f17b25"
                        />
                      </svg>
                    )) ||
                    (d.statusD === "Delivered" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        className="td__Icons"
                      >
                        <circle
                          id="Ellipse_360"
                          data-name="Ellipse 360"
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          fill="#50d000"
                        />
                      </svg>
                    ))}{" "}
                  {d.statusD}
                </td>
                <td>
                  {d.amount ||
                    (d.action && (
                      <select style={{ padding: "10px 13px" }}>
                        <option value="select">Select</option>
                      </select>
                    ))}
                </td>
                <td>
                  {(d.status && d.status === "Canceled") ||
                  d.status === "free" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="td__Icons"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                    >
                      <circle
                        id="Ellipse_363"
                        data-name="Ellipse 363"
                        cx="4.5"
                        cy="4.5"
                        r="4.5"
                        fill="#f00000"
                      />
                    </svg>
                  ) : (
                    d.status === "Delivered" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        className="td__Icons"
                      >
                        <circle
                          id="Ellipse_360"
                          data-name="Ellipse 360"
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          fill="#50d000"
                        />
                      </svg>
                    )
                  )}
                  {d.status === "Enroute" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                    >
                      <circle
                        id="Ellipse_362"
                        data-name="Ellipse 362"
                        cx="4.5"
                        cy="4.5"
                        r="4.5"
                        fill="#f17b25"
                      />
                    </svg>
                  )}
                  {"  "}
                  {d.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!pag && <button onClick={() => loadMore()}>{btnTxt}</button>}
        {pag && <Pagination />}
        <div>{Icons && <Pagination />}</div>
      </div>
    </div>
  );
}

export default Table;
