import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BarcodeScanner, useTorch } from "react-barcode-scanner";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";
import { BarcodeDetector } from "barcode-detector";

const InternalTicketPage = (props) => {
  const [process1, setProcess1] = useState(null);
  const [process2, setProcess2] = useState(null);
  const [data, setData] = useState({});
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch();
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };
  const onCapture = (e) => {
    console.log(e);
    setData({ ...data, barcode: e.value });
  };
  let page;

  return (
    <>
      <section className="surface-section px-4 py-5 md:px-6 lg:px-8">
        <ul className="list-none flex flex-column gap-3 lg:flex-row justify-content-between p-0">
          <li className="flex align-items-center flex-column gap-3 relative w-full">
            <div className="flex justify-content-center align-items-center border-circle bg-primary-100 w-4rem h-4rem z-1">
              <i className="pi pi-check text-xl text-primary-600"></i>
            </div>
            <div
              className="w-full hidden lg:block absolute left-50 bg-primary-500 hidden"
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
                Fames ac turpis egestas integer
              </span>
            </div>
          </li>
          <li className="flex align-items-center flex-column gap-3 relative w-full">
            <div className="flex justify-content-center align-items-center border-circle bg-primary-100 w-4rem h-4rem z-1">
              <i className="pi pi-circle-fill text-xl text-primary-600"></i>
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
                Machine Check
              </h1>
              <span className="text-600 text-base text-center">
                Volutpat maecenas volutpat
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
      </section>
      {!process1 ? (
        <div className="flex flex-column md:flex-row">
          <div className="w-full md:w-5 flex align-items-start justify-content-center gap-3">
            <div style={{ width: "400px", height: "300px" }}>
              <BarcodeScanner onCapture={onCapture} />
              {isSupportTorch ? (
                <button onClick={onTorchSwitch}>Swtich Torch</button>
              ) : null}
            </div>
          </div>
          <div className="w-full md:w-2">
            <Divider layout="vertical" className="hidden md:flex">
              <b>OR</b>
            </Divider>
          </div>
          <div className="w-full md:w-5 flex align-items-center justify-content-center">
            <div className="field">
              <label htmlFor="searchBarcode">manual search</label>
              <div className="flex justify-content-center">
                <AutoComplete
                  id="searchBarcode"
                  value={value}
                  suggestions={items}
                  completeMethod={search}
                  onChange={(e) => setValue(e.value)}
                ></AutoComplete>
              </div>
              <div className="flex justify-content-end">
                <Button
                  label="next"
                  text
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  onClick={() => {
                    setProcess1(true);
                  }}
                  className="p-button-success"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="surface-card p-4 border-round shadow-2">
            <div className="text-900 font-medium text-xl mb-3">
              Registration
            </div>
            <p className="text-600 my-0 mb-4 pb-3 border-bottom-1 surface-border">
              1 of 5 steps are already complete
            </p>
            <div className="grid mb-3">
              <div className="col-12 lg:col-6">
                <ul className="list-none mx-0 mb-0 mt-4 p-0">
                  <li className="flex align-items-center p-3">
                    <span
                      className="inline-flex mr-3 align-items-center justify-content-center bg-green-500 text-white border-circle border-1 surface-border"
                      style={{ width: "30px", height: "30px" }}
                    >
                      <i className="pi pi-check"></i>
                    </span>
                    <span className="text-900 line-height-3">
                      In tellus integer feugiat scelerisque
                    </span>
                  </li>
                  <li className="flex align-items-center surface-100 p-3">
                    <span
                      className="inline-flex mr-3 align-items-center justify-content-center surface-0 text-white border-circle border-1 surface-border"
                      style={{ width: "30px", height: "30px" }}
                    ></span>
                    <span className="text-900 line-height-3">
                      Risus pretium quam vulputate
                    </span>
                  </li>
                  <li className="flex align-items-center surface-100 p-3">
                    <span
                      className="inline-flex mr-3 align-items-center justify-content-center surface-0 text-white border-circle border-1 surface-border"
                      style={{ width: "30px", height: "30px" }}
                    ></span>
                    <span className="text-900 line-height-3">
                      Sem viverra aliquet eget sit amet tellus
                    </span>
                  </li>
                  <li className="flex align-items-center surface-100 p-3">
                    <span
                      className="inline-flex mr-3 align-items-center justify-content-center surface-0 text-white border-circle border-1 surface-border"
                      style={{ width: "30px", height: "30px" }}
                    ></span>
                    <span className="text-900 line-height-3">
                      Blandit volutpat maecenas volutpat blandit
                    </span>
                  </li>
                  <li className="flex align-items-center surface-100 p-3">
                    <span
                      className="inline-flex mr-3 align-items-center justify-content-center surface-0 text-white border-circle border-1 surface-border"
                      style={{ width: "30px", height: "30px" }}
                    ></span>
                    <span className="text-900 line-height-3">
                      Feugiat in ante metus dictum
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="border-2 border-dashed surface-border border-round mt-4"
                  style={{ minHeight: "30rem" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-content-end">
            <Button
              label="confirmed"
              text
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => {
                setProcess2(true);
              }}
              className="p-button-success"
            ></Button>
          </div>
        </>
      )}
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

export default connect(mapState, mapDispatch)(InternalTicketPage);
