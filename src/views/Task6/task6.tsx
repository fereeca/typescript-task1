import React, { useState, useCallback } from "react";
// import Questions from '../../components/questions/questions';
import "./task6.css";
import { filterAndSortTea, Tea } from "../../Utils/Utils";
const teaList: Tea[] = [
  { id: 1, title: "Earl grey", price: 500, description: "Earl grey" },
  { id: 2, title: "Milk tea", price: 230, description: "Milk tea" },
  { id: 3, title: "Black tea", price: 100, description: "Black tea" },
  { id: 4, title: "Green tea", price: 900, description: "Green tea" },
  { id: 5, title: "Matcha tea", price: 850, description: "Matcha tea" },
  { id: 6, title: "Herbal tea", price: 1200, description: "Herbal  tea" },
];
function Task6() {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [sortedTea, setSortedTea] = useState<Tea[]>(teaList);
  const MaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };
  const MinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };
  const ascendingFilterAndSort = useCallback(() => {
    const filteredAndSortedTea = filterAndSortTea(
      teaList,
      minPrice,
      maxPrice,
      "asc"
    );
    setSortedTea(filteredAndSortedTea);
  }, [minPrice, maxPrice]);
  const descendingFilterAndSort = useCallback(() => {
    const filteredAndSortedTea = filterAndSortTea(
      teaList,
      minPrice,
      maxPrice,
      "desc"
    );
    setSortedTea(filteredAndSortedTea);
  }, [minPrice, maxPrice]);
  const filterTea = () => {
    const filteredTea = teaList.filter(
      (tea) => tea.price >= minPrice && tea.price <= maxPrice
    );
    setSortedTea(filteredTea);
  };
  return (
    <>
      {/* <div className="question">
        <Questions title="Build an application that lists all of the varieties of tea available in “Your Friendly Neighborhood Tea Shop”. The customers should be able to filter the different types of tea within their price range." />
      </div> */}
      <main>
        <div>
          <label>
            Min Price:
            <input type="number" value={minPrice} onChange={MaxPriceChange} />
          </label>
          <label>
            Max Price:
            <input type="number" value={maxPrice} onChange={MinPriceChange} />
          </label>
          <button onClick={filterTea}>Filter</button>
          <button onClick={ascendingFilterAndSort}>Low to High</button>
          <button onClick={descendingFilterAndSort}>High to Low</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {sortedTea.map((tea) => (
              <tr key={tea.id}>
                <td>{tea.title}</td>
                <td>${tea.price}</td>
                <td>{tea.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
export default Task6;
