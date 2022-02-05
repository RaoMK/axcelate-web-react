import { Switch, Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "redux/actions/authActions";
import { useEffect } from "react";
import Login from "./views/public/Login";
import AdminSidebar from "./views/admin/components/AdminSidebar";
import Dashboard from "./views/admin/Dashboard";
import Profile from "./views/admin/Profile";
import Users from "./views/admin/Users";
import AddUser from "./views/admin/AddUser";
import ManageUserData from "./views/admin/ManageUserData";
import Footer from "./components/Footer";
import VendorSidebar from "./views/vendor/components/VendorSidebar";
import VendorDashboard from "./views/vendor/VendorDashboard";
import NewBooking from "./views/vendor/NewBooking";
import BookingHistory from "./views/vendor/BookingHistory";
import VendorProfile from "./views/vendor/VendorProfile";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.authenticated);

  useEffect(() => {
    dispatch(fetchUserAction());
  }, []);
  return (
    <>
      <Switch>
        {!currentUser || currentUser === null || currentUser === undefined ? (
          <>
            <Route exact path="/" component={Login} />
          </>
        ) : (
          <>
            {currentUser && currentUser.role === 1 ? (
              <>
                <AdminSidebar />
                <div className="md:ml-64">
                  <Switch>
                    <Route exact path="/admin" component={Dashboard} />
                    <Route exact path="/admin/profile" component={Profile} />
                    <Route exact path="/admin/users" component={Users} />
                    <Route exact path="/admin/user/add" component={AddUser} />
                    <Route
                      exact
                      path="/admin/user/:id"
                      component={ManageUserData}
                    />
                    <Redirect from="*" to="/admin" />
                    <Redirect from="/" to="/admin" />
                  </Switch>
                  <Footer />
                </div>
              </>
            ) : (
              <>
                <VendorSidebar />
                <div className="md:ml-64">
                  <Switch>
                    <Route exact path="/user" component={VendorDashboard} />
                    <Route
                      exact
                      path="/user/tradebook"
                      component={NewBooking}
                    />
                    <Route
                      exact
                      path="/user/funds"
                      component={BookingHistory}
                    />
                    <Route
                      exact
                      path="/user/profile"
                      component={VendorProfile}
                    />
                    <Redirect from="/" to="/user" />
                    <Redirect from="*" to="/user" />
                  </Switch>
                  <Footer />
                </div>
              </>
            )}
          </>
        )}
      </Switch>
    </>
  );
}

export default App;
