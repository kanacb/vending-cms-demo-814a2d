import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import welcomeImg from "../../assets/media/welcome-banner.png";

const Dashboard = (props) => {
  useEffect(() => {}, []);
  const url = process.env.REACT_APP_SERVER_URL;
  return (
    <div className="col-12 flex flex-column align-items-center">
      <div className="flex w-10">
        <div className="w-8 mt-8">
          <div className="w-full flex justify-content-center flex-wrap ">
            {/* Links to services */}

            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/todo">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">To Do</div>
                </div>
              </Link>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/admin">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">Dashboard</div>
                </div>
              </Link>
            </div>

            {/* ~cb-add-services-card~ */}
          </div>
        </div>
        <div className="w-4 flex flex-column align-items-center">
          <img src={welcomeImg} alt="welcome" className="h-30rem" />
          <p className="text-7xl m-0">Welcome!</p>
          <p>You are ready to go!</p>
        </div>
      </div>
    </div>
  );
};
const mapState = (state) => {
  //
  return {};
};
const mapDispatch = (dispatch) => ({
  //
});

export default connect(mapState, mapDispatch)(Dashboard);
