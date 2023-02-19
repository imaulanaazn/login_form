import React, { useState, useEffect } from "react";
import "../styles/PaginationTable.css";

const PaginationTable = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Fetch table data from API and update state
  useEffect(() => {
    const data = [
      { id: 1, name: "John", age: 25 },
      { id: 2, name: "Jane", age: 30 },
      { id: 3, name: "Bob", age: 40 },
      { id: 4, name: "Alice", age: 20 },
      { id: 5, name: "Tom", age: 35 },
      { id: 6, name: "Mary", age: 28 },
      { id: 7, name: "Alex", age: 45 },
      { id: 8, name: "Sara", age: 22 },
      { id: 9, name: "Peter", age: 33 },
      { id: 10, name: "Olivia", age: 27 },
      { id: 11, name: "David", age: 39 },
      { id: 12, name: "Emily", age: 32 }
    ];
    setTableData(data);
  }, []);

  // Calculate total number of pages
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Calculate index of first and last item on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get current items to display in table
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  // Generate array of page numbers for pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        {pageNumbers
          .slice(
            Math.max(0, currentPage - 2),
            Math.min(currentPage + 3, pageNumbers.length)
          )
          .map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
