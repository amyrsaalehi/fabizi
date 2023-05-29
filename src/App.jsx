import OrderSummary from './Components/IBMCloud/OrderSummary'
import List from "./Components/CarbonReact/List"
import Button from "./Components/CarbonReact/CustomButton";
import Card from "./Components/IBMProduct/Card";
import DataGrid from "./Components/IBMProduct/DataGrid";
import Sidepanel from "./Components/IBMProduct/SidePanel/Sidepanel";

export const App = () => {
    return (
        <div className="container">
            <OrderSummary/>
            <List/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Card/>
            <br/>
            <br/>
            <br/>
            <br/>
            <DataGrid/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Sidepanel/>
        </div>
    );
}

export default App