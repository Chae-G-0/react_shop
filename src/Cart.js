import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "./store";

const Cart = () => {
  const list = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {list.list.map((it, i) => {
            return (
              <tr key={it.id}>
                <td>1</td>
                <td>{it.name}</td>
                <td>{it.count}</td>
                <td>
                  <button onClick={() => {
                    dispatch(changeCount(list.list[i].id))
                  }}>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
