/** @format */
import { Switch, Route } from "react-router-dom";
import EmployeeCreate from "../pages/EmployeeCreate";
import EmployeeList from "../pages/EmployeeList";
import Home from "../pages/Home";
import UpdateEmployee from "../pages/UpdateEmployee";
import ViewDepartment from "../pages/ViewDepartment";
import FilterDepartment from "../pages/FilterDepartment";

const MainRoutes = () => {
  return (
    <Switch>
      <Route
        path="/"
        render={({ match: { url } }) => (
          <Home>
            <Route path={url} component={EmployeeList} exact />
            <Route path={`${url}employee-list`} component={EmployeeList} />
            <Route path={`${url}employee-create`} component={EmployeeCreate} />
            <Route path={`${url}department-list`} component={ViewDepartment} />
            <Route
              path={`${url}employee-department/:id`}
              component={FilterDepartment}
            />
            <Route
              path={`${url}employee-update/:id`}
              component={UpdateEmployee}
            />
          </Home>
        )}
      ></Route>
    </Switch>
  );
};
export default MainRoutes;
