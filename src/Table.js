import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Table should render a <table> element using the `headers` prop
// to set the text of the headers of the table. The header of a column
// should be "clickable" such that:
//   * onClick -> if first time header is clicked in a row, sort data
//     asc by this column
//   * onClick -> if second time header is clicked in a row, sort data
//     desc by this column
// NOTE: Only a single sort should be supported.
//
// Each element in the `items` prop represents a row (as an array).
// Each element in an item array directly corresponds to a column in
// the header array. So items[n][1] is the data for the column headers[1].
//
// Do not worry about styling/layout, focus on functionality. You may use
// hooks or refactor to a class component, whichever you find is easiest
// to work with. 

// <th><td></td></th>
// <tr><td></td></tr>

const Table = ({ headers, items }) => {
  const [sortedItems, setSortedItems] = useState([...items]);
  const [sortState, setSortState] = useState({
    column: null,
    ascending: true,
  });

  const sortHandler = (columnIndex) => {
    setSortState(() => {
      // console.log(prvState);
      return {
        column: columnIndex,
        ascending: true,
      };
    });
  };

  //   const sortedItems = [...items];
  console.log(sortState);

  useEffect(() => {
    if (sortedItems.length > 0 && sortState.column) {
      console.log("tet")
        let sortedData = [...sortedItems];
      if (typeof sortedData[0][sortState.column] === "number") {
        sortedData.sort((a, b) => {
          return a[sortState.column] - b[sortState.column];
        });
      } 
      if (typeof sortedData[0][sortState.column] === "string") {
        sortedData.sort();
      }
      setSortedItems(sortedData);
    }
  }, [sortState.column]);

  console.log(sortedItems);

  //   if (sortState.column !== null) {
  //     sortedItems.sort((a, b) => {
  //       const columnA = a[sortState.column];
  //       const columnB = b[sortState.column];
  //       console.log("columnA", columnA);
  //       console.log("columnB", columnB);
  //     });
  //   }

  return (
    <div>
      <h1>I need to be a table. (Table.js)</h1>
      <div>
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => {
                return (
                  <th
                    key={index}
                    onClick={() => sortHandler(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {item.map((col, colIndex) => {
                    return <td key={colIndex}>{col}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
  headers: PropTypes.arrayOf(PropTypes.string),
};

export default Table;
