import React from "react";
import { Switch } from "react-router-dom";
import GuestRoutes from "routes/Public";
import Home from "components/Home";
import Menu from "components/Menu/LoadPdf";
import Connect from "components/Transactions";

const Routes = () => {
  //for dev mode
  return (
    <>
      <Switch>
        {/* guest routes */}
        <GuestRoutes exact path="/menu" component={Menu} />
        <GuestRoutes exact path="/menu-mobile" component={Menu} />
        <GuestRoutes exact path="/connect" component={Connect} />
        <GuestRoutes exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
