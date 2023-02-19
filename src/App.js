
import { Routes } from "react-router";
import { Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import PaginationTable from "./pages/PaginationTable";
import Payment from "./pages/Payment";

const App = () => {
   return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/pagination-table" element={<PaginationTable />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
   );
};

export default App;
