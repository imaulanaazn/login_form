
import { Routes } from "react-router";
import { Route } from "react-router";
import "./index.css";
import Home from "./pages/Home/Home";
import Form from "./pages/LoginForm/Form";
import PaginationTable from "./pages/PaginatedTable/PaginationTable";
import Payment from "./pages/PaymentProccess/Payment";
import Dropdown from "./pages/MultilevelDropdown/Dropdown";

const App = () => {
   return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/pagination-table" element={<PaginationTable />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
   );
};

export default App;
