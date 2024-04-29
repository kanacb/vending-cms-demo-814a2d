import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

const CompanyPage = (props) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setName(props.user?.name);
  });

  return (
    <>
      {" "}
      <div className="flex flex-column align-items-center w-full">
        <div className="col field">
          <span className="p-float-label">
            <InputText
              id="name"
              type="text"
              size={20}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
          </span>
        </div>
        <div className="col field">
          <span className="p-float-label">
            <InputText
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="company">Company</label>
          </span>
        </div>
        <div className="col field">
          <span className="p-float-label">
            <Calendar
              id="date"
              value={date}
              onChange={(e) => setDate(e.value)}
            />
            <label htmlFor="username">Date</label>
          </span>
        </div>
        <div className="col field">
          <span className="p-float-label">
            <Calendar
              id="time"
              value={time}
              onChange={(e) => setTime(e.value)}
              timeOnly
            />
            <label htmlFor="time">Time</label>
          </span>
        </div>
        <div className="flex justify-content-end">
          <Button label="save" text className="p-button-success"></Button>
        </div>
      </div>
      <div className="flex justify-content-end">
        <Button
          label="next"
          text
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={() => {
            props.setProcess3(true);
          }}
          className="p-button-success"
        ></Button>
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

export default connect(mapState, mapDispatch)(CompanyPage);
