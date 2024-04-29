import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

const ConfirmationPage = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid flex flex-row alig-items-center justify-content-center gap-2">
        <div className="col flex justify-content-center">
          <Image
            className="block mt-5"
            src="/demo/images/samples/barcode.png"
          />
        </div>
        <div className="col flex justify-content-center w-full">
          <div className="mt-5 card surface-400"> Some text here</div>
        </div>
        <div className="col">
          <div className="surface-card p-4 shadow-2 border-round">
            <div className="font-medium text-3xl text-900 mb-3">
              Breakdown reported
            </div>
            <div className="text-500 mb-5">
              On the day {new Date().toLocaleDateString()} @{" "}
              {new Date().toLocaleTimeString()}
            </div>
            <div className="grid grid-nogutter border-top-1 surface-border pt-2">
              <div className="col-12 md:col-6 p-3">
                <div className="text-500 font-medium mb-2">Name</div>
                <div className="text-900">Elliot Alderson</div>
              </div>
              <div className="col-12 md:col-6 p-3">
                <div className="text-500 font-medium mb-2">Company</div>
                <div className="text-900">ABC sdn Bhd</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <Button
            label="submit"
            text
            icon="pi pi-arrow-right"
            iconPos="right"
            onClick={() => {
              props.setProcess4(true);
              navigate("/admin");
            }}
          ></Button>
        </div>
      </div>
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

export default connect(mapState, mapDispatch)(ConfirmationPage);
