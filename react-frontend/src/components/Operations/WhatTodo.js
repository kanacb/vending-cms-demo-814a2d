import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const WhatToDoPage = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card p-0 min-w-max overflow-hidden"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="flex justify-content-between p-1 mb-1 shadow-2"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #d30078, #d1008f, #c600ab, #af00ca, #8312eb)",
        }}
      >
        <div className="flex align-items-center text-white">
          <p className="text-4xl text-white">What's your objective today?</p>
        </div>
        <div className="flex align-items-center text-white">
          <p className="text-sm text-white">date time</p>
        </div>
      </div>
      <div className="grid flex">
        <div className="col-12 align-items-center">
          <div className="col-12 md:col-12 sm:col-4 xs:col-11">
            <ul className="list-none p-0 m-0 flex flex-column md:flex-row">
              <li className="relative mr-0 md:mr-8 flex-auto">
                <div className="border-2 border-yellow-300 border-round p-3 hover:border-primary surface-card flex flex-column md:flex-row align-items-center z-1">
                  <i className="pi pi-users text-green-500 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                  <div>
                    <div className="text-900 font-medium mb-1">
                      External Tickets
                    </div>
                    <span className="text-600 text-sm hidden md:block">
                      Breakdown from external users list
                    </span>
                  </div>
                </div>
                <div
                  className="w-full absolute top-50 left-100 surface-300 hidden md:block"
                  style={{ transform: "translateY(-50%)", height: "2px" }}
                ></div>
              </li>
              <li className="relative mr-0 md:mr-8 flex-auto">
                <div className="border-2 border-blue-500 border-round p-3 hover:border-primary surface-card flex flex-column md:flex-row align-items-center z-1">
                  <i className="pi pi-ticket text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                  <div>
                    <div className="text-blue-600 font-medium mb-1">
                      Internal Tech Team
                    </div>
                    <span className="text-600 text-sm hidden md:block">
                      Incoming machine check list
                    </span>
                  </div>
                </div>
                <div
                  className="w-full absolute top-50 left-100 surface-300 hidden md:block"
                  style={{ transform: "translateY(-50%)", height: "2px" }}
                ></div>
              </li>
              <li className="relative flex-auto">
                <div className="border-2 border-green-300 border-round p-3 hover:border-primary surface-50 flex flex-column md:flex-row align-items-center z-1">
                  <i className="pi pi-check-circle text-red-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                  <div>
                    <div className="text-red-900 font-medium mb-1">
                      Supervisor's
                    </div>
                    <span className="text-600 text-sm hidden md:block">
                      Assigned jobs to be completed list
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Divider type="solid" align="left" width="2px">
        {" "}
        <div className="inline-flex align-items-center ml-5">
          <i className="pi pi-user mr-2"></i>
          <b className="text-xl">Operations</b>
        </div>
      </Divider>
      <div className="grid flex justify-content-center align-items-center">
        <div className="col-4 md:col-4 sm:col-12 align-items-center">
          <ul className="list-none p-0 m-0 surface-0">
            <li className="p-3 mb-2 flex">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  <i className="pi pi-check"></i>
                </span>
                <div
                  className="h-full surface-300"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-900 mb-2">External</div>
                <span className="line-height-3 text-700">
                  Raise a breakdown ticket
                </span>
              </div>
              <Button
                className="mt-6"
                rounded
                icon="pi pi-arrow-right"
                iconPos="right"
                text
                onClick={() => navigate("/raise")}
                label="raise"
              ></Button>
            </li>

            <li className="p-3 mb-2 flex border-2 border-blue-500 border-round">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="surface-0 text-blue-500 border-blue-500 border-2 border-circle flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  2
                </span>
                <div
                  className="h-full bg-yellow-500"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-blue-500 mb-2">Redirect</div>
                <span className="line-height-3 text-700">
                  Redireced based on Region / location
                </span>
              </div>
            </li>

            <li className="p-3 flex">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="surface-0 text-300 border-2 border-circle flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  3
                </span>
                <div
                  className="h-full surface-300"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-600 mb-2">
                  Incoming Check List
                </div>
                <span className="line-height-3 text-500">
                  Re-routed to incoming check list
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4 md:col-4 sm:col-12 align-items-center">
          <ul className="list-none p-0 m-0 surface-0">
            <li className="p-3 mb-2 flex">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  <i className="pi pi-check"></i>
                </span>
                <div
                  className="h-full surface-300"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-900 mb-2">Incoming Check</div>
                <span className="line-height-3 text-700">
                  Scanning of barcode on machine
                </span>
              </div>
              <Button
                className="mt-6"
                rounded
                icon="pi pi-arrow-right"
                iconPos="right"
                text
                label="scan"
                onClick={() => {navigate('/internal')}}
              ></Button>
            </li>

            <li className="p-3 mb-2 flex border-2 border-blue-500 border-round">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="surface-0 text-blue-500 border-blue-500 border-2 border-circle flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  2
                </span>
                <div
                  className="h-full bg-blue-500"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-blue-500 mb-2">
                  Repair / Refurbish
                </div>
                <span className="line-height-3 text-700">
                  Tech to check on breakdown
                </span>
              </div>
            </li>

            <li className="p-3 flex">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="surface-0 text-300 border-2 border-circle flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  3
                </span>
                <div
                  className="h-full surface-300"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-600 mb-2">Job Assignment</div>
                <span className="line-height-3 text-500">
                  Re-routed to Supervisor
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4 md:col-4 sm:col-12 align-items-center">
          <ul className="list-none p-0 m-0 surface-0">
            <li className="p-3 mb-2 flex">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="bg-green-500 text-0 flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  <i className="pi pi-check"></i>
                </span>
                <div
                  className="h-full surface-300"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-900 mb-2">Job Assignment</div>
                <span className="line-height-3 text-700">
                  Supervisor to select on Job Station(s)
                </span>
              </div>
              <Button
                className="mt-6"
                rounded
                icon="pi pi-arrow-right"
                iconPos="right"
                text
                onClick={() => {navigate('/supervisor')}}
                label="assign"
              ></Button>
            </li>

            <li className="p-3 mb-2 flex border-2 border-blue-500 border-round">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="surface-0 text-blue-500 border-blue-500 border-2 border-circle flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  2
                </span>
                <div
                  className="h-full bg-blue-500"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-blue-500 mb-2">
                  Job Stations
                </div>
                <span className="line-height-3 text-700">
                  Job closure by technician at each station
                </span>
              </div>
              <Button
                className="mt-6"
                rounded
                icon="pi pi-arrow-right"
                iconPos="right"
                text
                label="tasks"
              ></Button>
            </li>

            <li className="p-3 flex">
              <div
                className="flex flex-column align-items-center"
                style={{ width: "2rem" }}
              >
                <span
                  className="surface-0 text-300 border-2 border-circle flex align-items-center justify-content-center border-circle"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                >
                  3
                </span>
                <div
                  className="h-full surface-300"
                  style={{ width: "2px", minHeight: "4rem" }}
                ></div>
              </div>
              <div className="ml-3">
                <div className="font-medium text-600 mb-2">Confirmation</div>
                <span className="line-height-3 text-500">
                  Final job closure by Supervisor
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(WhatToDoPage);
