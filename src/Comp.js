import React from "react";
import { ReactDOM } from "react-dom";

const { persons } = props;

function Comp() {
  return (
    <>
      <div class="ml-2">
        <h3 class="title is-3">Person List</h3>

        {/* Convert me to a component! */}
        <table class="table is-bordered mb-3">
          <tbody>
            {persons.map((data) => {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.gender}</td>
                  <td>{data.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Comp;
