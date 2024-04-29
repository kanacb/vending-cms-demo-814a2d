import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Divider } from "primereact/divider";
import ScannerPage from "./ScannerPage";
import BreakdownPage from "./SourcePage";
import CompanyPage from "./CompanyPage";
import SourcePage from "./SourcePage";
import ConfirmationPage from "./ConfirmationPage";

const ExternalTickertsPage = () => {
  const [process1, setProcess1] = useState(null);
  const [process2, setProcess2] = useState(null);
  const [process3, setProcess3] = useState(null);
  const [process4, setProcess4] = useState(null);
  const [data, setData] = useState({});

  let page;

  const onCapture = (e) => {
    console.log(e);
    setData({ ...data, barcode: e.value });
  };

  const taskTitle = () => {
    let title = "";
    if (!process1) {
      title = "Scan";
      page = <ScannerPage onCapture={onCapture} setProcess1={setProcess1} />;
    } else if (!process2) {
      title = "Breakdown Source";
      page = <SourcePage setProcess2={setProcess2} setData={setData} />;
    } else if (!process3) {
      title = "Company";
      page = <CompanyPage setProcess3={setProcess3} setData={setData} />;
    } else if (!process4) {
      title = "Confirmed";
      page = <ConfirmationPage setProcess4={setProcess4} setData={setData} />;
    }
    return title;
  };

  return (
    <>
      <section className="surface-section px-4 py-5 md:px-6 lg:px-8">
        <ul className="list-none flex flex-column gap-3 lg:flex-row justify-content-between p-0">
          <li className="flex align-items-center flex-column gap-3 relative w-full">
            <div className="flex justify-content-center align-items-center border-circle bg-primary-100 w-4rem h-4rem z-1">
              <i
                className={classNames(
                  "pi text-xl text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3",
                  { "pi-check": !process1, "pi-check-circle": process1 },
                )}
              ></i>
            </div>
            <div
              className="w-full lg:block absolute left-50 bg-primary-500"
              style={{
                transform: "translateY(-50%)",
                height: "2px",
                top: "25%",
              }}
            ></div>
            <div className="flex flex-column align-items-center">
              <h1 className="m-0 font-medium text-900 text-xl line-height-3">
                Scan
              </h1>
              <span className="text-600 text-base text-center">
                Scanning of barcode on machine
              </span>
            </div>
          </li>
          <li className="flex align-items-center flex-column gap-3 relative w-full">
            <div className="flex justify-content-center align-items-center border-circle bg-primary-100 w-4rem h-4rem z-1">
              <i
                className={classNames("pi text-4xl text-primary-600", {
                  "pi-circle-fill": !process2,
                  "pi-check-circle": process2,
                })}
              ></i>
            </div>
            <div
              className="w-full hidden lg:block absolute right-50 bg-primary-500 hidden"
              style={{
                transform: "translateY(-50%)",
                height: "2px",
                top: "25%",
              }}
            ></div>
            <div
              className="w-full hidden lg:block absolute left-50 surface-300 hidden"
              style={{
                transform: "translateY(-50%)",
                height: "2px",
                top: "25%",
              }}
            ></div>
            <div className="flex flex-column align-items-center">
              <h1 className="m-0 font-medium text-900 text-xl line-height-3">
                Breakdown
              </h1>
              <span className="text-600 text-base text-center">
                Selection of breakdown source
              </span>
            </div>
          </li>
          <li className="flex align-items-center flex-column gap-3 relative w-full">
            <div className="flex justify-content-center align-items-center surface-200 border-circle  w-4rem h-4rem z-1">
              <i
                className={classNames("pi pi-circle-fill text-xl text-600", {
                  "pi-circle-fill": !process3,
                  "pi-check-circle": process3,
                })}
              ></i>
            </div>
            <div
              className="w-full hidden lg:block absolute right-50 surface-300 hidden"
              style={{
                transform: "translateY(-50%)",
                height: "2px",
                top: "25%",
              }}
            ></div>
            <div
              className="w-full hidden lg:block absolute left-50 surface-300 hidden"
              style={{
                transform: "translateY(-50%)",
                height: "2px",
                top: "25%",
              }}
            ></div>
            <div className="flex flex-column align-items-center">
              <h1 className="m-0 font-medium text-900 text-xl line-height-3">
                Company
              </h1>
              <span className="text-600 text-base text-center">
                Name, company, date & time input
              </span>
            </div>
          </li>
          <li className="flex align-items-center flex-column gap-3 relative w-full">
            <div
              className="w-full hidden lg:block absolute right-50 surface-300 hidden"
              style={{
                transform: "translateY(-50%)",
                height: "2px",
                top: "25%",
              }}
            ></div>
            <div className="flex justify-content-center align-items-center surface-200 border-circle  w-4rem h-4rem z-1">
              <i className="pi pi-circle-fill text-xl text-600"></i>
            </div>
            <div className="flex flex-column align-items-center">
              <h1 className="m-0 font-medium text-900 text-xl line-height-3">
                Confirmation
              </h1>
              <span className="text-600 text-base text-center">
                Laoreet sit amet cursus{" "}
              </span>
            </div>
          </li>
        </ul>
        <Divider align="left" className="text-4xl">
          <div>{taskTitle()}</div>
        </Divider>
        <div className="flex justify-content-center align-items-center">
          {page}
        </div>
      </section>
    </>
  );
};

const mapState = (state) => {
  const { user } = state.auth;
  return { user };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(ExternalTickertsPage);
