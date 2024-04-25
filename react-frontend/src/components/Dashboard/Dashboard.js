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
        <div className=" w-8">
          <h4 className="ml-4">App is Ready</h4>
          <div className="w-full flex justify-content-center flex-wrap ">
            {/* Links to services */}
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/users">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">Users</div>
                </div>
              </Link>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/hCMasterForm">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">
                    HCMasterForm
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/cBMasterForm">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">
                    CBMasterForm
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/opsCentre">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">OpsCentre</div>
                </div>
              </Link>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/locationMaster">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">
                    LocationMaster
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/vmType">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">VmType</div>
                </div>
              </Link>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/machineMaster">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">
                    MachineMaster
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
              <Link to="/breakdown">
                <div
                  className="card mb-0 flex flex-column align-items-center justify-content-center hover zoom"
                  style={{ height: "10rem" }}
                >
                  <div className="text-900 font-medium text-lg">Breakdown</div>
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
      <div className="card w-10 my-6">
        <h4>REST API Ready</h4>
        <p className="underline m-0">e.g. Authentication</p>
        <p>
          POST {`${url}`}/authentication{" "}
          {`{ "email": "example@email.com",    "password": "123456" }`}
        </p>
        <p className="underline m-0">e.g. CRUD</p>
        <p className="m-0">
          GET {`=>`} GET {`${url}`}/users/{`<userId>`}
        </p>
        <p className="m-0">
          CREATE {`=>`} POST {`${url}`}/users`{" "}
          {`{ "email": "example2@email.com",    "password": "456789" }`}
        </p>
        <p className="m-0">
          PATCH {`=>`} PATCH {`${url}`}/users/{`<userId>`}`{" "}
          {`{ "name": "Thomas Smith" }`}
        </p>
        <p className="m-0">
          DELETE {`=>`} DELETE {`${url}`}/users/{`<userId>`}
        </p>
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
