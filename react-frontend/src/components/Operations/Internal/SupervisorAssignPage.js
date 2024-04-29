import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";


const SupervisorAssignPage = () => {


  return (<>super</>);




};

const mapState = (state) => {
  const { user } = state.auth;
  return { user };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SupervisorAssignPage);
