import React from "react";

const AppFooter = (props) => {
  const upd = process.env.REACT_APP_LAST_UPDATED;
  return (
    <div className="layout-footer p-3">
      <small className="mr-7">
        <b>developed by</b> Cloud Basha Sdn Bhd
      </small>
      <small className="mr-2">powered by</small>
      <img
        src={"../../assets/logo/cb-logo.svg"}
        alt="Logo"
        height="20"
        className="mr-2"
      />
      <small>
        <span className="font-bold ml-1">CodeBridge Ai &copy; 2024</span>
      </small>
      <small className="ml-8">
        <b>last updated:</b> {upd}
      </small>
    </div>
  );
};
export default AppFooter;
