import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BarcodeScanner, useTorch } from "react-barcode-scanner";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";
import { BarcodeDetector } from "barcode-detector";

const ScannerPage = (props) => {
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch();
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };
  return (
    <div className="flex flex-column md:flex-row">
      <div className="w-full md:w-5 flex align-items-start justify-content-center gap-3">
        <div style={{ width: "400px", height: "300px" }}>
          <BarcodeScanner onCapture={props.onCapture} />
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
                props.setProcess1(true);
              }}
              className="p-button-success"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  const { user } = state.auth;
  return { user };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(ScannerPage);
