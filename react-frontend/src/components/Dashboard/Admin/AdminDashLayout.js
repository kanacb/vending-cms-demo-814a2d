import React, { useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { classNames } from "primereact/utils";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import HCMasterFormPage from "../../HCMasterFormPage/HCMasterFormPage";
import StatsLayout from "./StatsLayout";
import MachineMasterPage from "../../MachineMasterPage/MachineMasterPage";
import LocationMasterPage from "../../LocationMasterPage/LocationMasterPage";
import OpsCentrePage from "../../OpsCentrePage/OpsCentrePage";

const AdminDashLayout = (props) => {
  const navigate = useNavigate();
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null);
  const btnRef6 = useRef(null);
  const btnRef7 = useRef(null);
  const btnRef8 = useRef(null);
  const btnRef9 = useRef(null);
  const btnRef10 = useRef(null);
  const btnRef11 = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  return (
    <>
      <div className="min-h-screen flex relative lg:static surface-ground">
        <div
          id="app-sidebar"
          className="h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto"
        >
          <div className="flex h-full">
            <div className="flex flex-column h-full bg-yellow-900 flex-shrink-0 select-none">
              <div
                className="flex align-items-center justify-content-center flex-shrink-0"
                style={{ height: "60px" }}
              >
                <Button
                  icon="pi pi-home"
                  style={{ color: "white" }}
                  rounded
                  outlined
                  aria-label="Cancel"
                  onClick={() => navigate("/")}
                />
              </div>
              <div className="overflow-y-auto mt-3">
                <ul className="list-none py-3 pl-2 pr-0 m-0">
                  <li className="mb-2">
                    <a
                      className={classNames(
                        "p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors",
                        { "bg-yellow-500": activeTab === 0 }
                      )}
                      onClick={() => setActiveTab(0)}
                      style={{
                        borderTopLeftRadius: "30px",
                        borderBottomLeftRadius: "30px",
                      }}
                    >
                      <i className="pi pi-building text-xl"></i>
                      <Ripple />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className={classNames(
                        "p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors",
                        { "bg-yellow-500": activeTab === 1 }
                      )}
                      onClick={() => setActiveTab(1)}
                      style={{
                        borderTopLeftRadius: "30px",
                        borderBottomLeftRadius: "30px",
                      }}
                    >
                      <i className="pi pi-bookmark text-xl"></i>
                      <Ripple />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className={classNames(
                        "p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors",
                        { "bg-yellow-500": activeTab === 2 }
                      )}
                      onClick={() => setActiveTab(2)}
                      style={{
                        borderTopLeftRadius: "30px",
                        borderBottomLeftRadius: "30px",
                      }}
                    >
                      <i className="pi pi-users text-xl"></i>
                      <Ripple />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className={classNames(
                        "p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors",
                        { "bg-yellow-500": activeTab === 3 }
                      )}
                      onClick={() => setActiveTab(3)}
                      style={{
                        borderTopLeftRadius: "30px",
                        borderBottomLeftRadius: "30px",
                      }}
                    >
                      <i className="pi pi-comments text-xl"></i>
                      <Ripple />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className={classNames(
                        "p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors",
                        { "bg-yellow-500": activeTab === 4 }
                      )}
                      onClick={() => setActiveTab(4)}
                      style={{
                        borderTopLeftRadius: "30px",
                        borderBottomLeftRadius: "30px",
                      }}
                    >
                      <i className="pi pi-calendar text-xl"></i>
                      <Ripple />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className={classNames(
                        "p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors",
                        { "bg-yellow-500": activeTab === 5 }
                      )}
                      onClick={() => setActiveTab(5)}
                      style={{
                        borderTopLeftRadius: "30px",
                        borderBottomLeftRadius: "30px",
                      }}
                    >
                      <i className="pi pi-cog text-xl"></i>
                      <Ripple />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <hr className="mb-3 mx-2 border-top-1 border-none border-yellow-300" />
                <a
                  className="p-ripple m-3 flex align-items-center cursor-pointer p-2 justify-content-center hover:bg-yellow-600 border-round text-300 hover:text-0
            transition-duration-150 transition-colors"
                >
                  <img
                    src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                    style={{ width: "24px", height: "24px" }}
                    alt="avatar-f-1"
                  />
                  <Ripple />
                </a>
              </div>
            </div>
            <div
              className="flex flex-column bg-yellow-500 p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0"
              style={{ width: "300px" }}
            >
              <div className="justify-content-end mb-3 flex lg:hidden">
                <StyleClass
                  nodeRef={btnRef9}
                  selector="#app-sidebar"
                  leaveToClassName="hidden"
                  leaveActiveClassName="fadeoutleft"
                >
                  <button
                    ref={btnRef9}
                    icon="pi pi-times"
                    className="p-ripple cursor-pointer text-white appearance-none bg-transparent border-none inline-flex justify-content-center align-items-center border-circle hover:bg-yellow-600 transition-duration-150 transition-colors"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    <i className="pi pi-times text-xl text-yellow-100"></i>
                    <Ripple />
                  </button>
                </StyleClass>
              </div>
              <div className="border-round flex-auto">
                <div className={classNames({ hidden: activeTab !== 0 })}>
                  <div className="p-3 font-medium text-2xl text-white mb-5">
                    Services
                  </div>
                  <ul className="list-none p-0 m-0 text-white">
                    <li
                      onClick={() => setActiveTab2(0)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 0,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Hot Cold</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(1)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 1,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-inbox text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Bottle Can</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Condimentum vitae sapien pellentesque habitant.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(2)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 2,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-credit-card text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Operations</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Egestas integer eget aliquet nibh praesent tristique.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(3)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 3,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-lock text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Reports</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          In ante metus dictum at tempor commodo ullamcorper a
                          lacus.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className={classNames({
                    hidden: activeTab !== 1,
                  })}
                >
                  <div className="p-3 font-medium text-2xl text-white mb-5">
                    Data Management
                  </div>
                  <ul className="list-none p-0 m-0 text-white">
                    <li
                      onClick={() => setActiveTab2(0)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 0,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Machine Master</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(1)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 1,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Master Location</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(2)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 2,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Ops Centres</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(3)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 3,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Master Positions</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className={classNames( {
                    hidden: activeTab !== 2,
                  })}
                >
                  <div className="p-3 font-medium text-2xl text-white mb-5">
                  User Management
                  </div>
                  <ul className="list-none p-0 m-0 text-white">
                    <li
                      onClick={() => setActiveTab2(0)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 0,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Users Master</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(1)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 1,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Profiles</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(2)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 2,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>User Invites</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      onClick={() => setActiveTab2(3)}
                      className={classNames("mb-3 flex align-items-start p-3", {
                        "bg-yellow-700": activeTab2 === 3,
                      })}
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Roles Positions</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className={classNames({
                    hidden: activeTab !== 3,
                  })}
                >
                  <div className="p-3 font-medium text-2xl text-white mb-5">
                    Messages
                  </div>
                  <ul className="list-none p-0 m-0 text-white">
                    <li
                      className="mb-3 flex align-items-start bg-yellow-700 p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Account</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className={classNames({
                    hidden: activeTab !== 4,
                  })}
                >
                  <div className="p-3 font-medium text-2xl text-white mb-5">
                    Reports
                  </div>
                  <ul className="list-none p-0 m-0 text-white">
                    <li
                      className="mb-3 flex align-items-start bg-yellow-700 p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Hot & Cold</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      className="mb-3 flex align-items-start bg-yellow-700 p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Can & Bottle</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      className="mb-3 flex align-items-start bg-yellow-700 p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Combo</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      className="mb-3 flex align-items-start bg-yellow-700 p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Operations</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={classNames({ hidden: activeTab !== 5 })}>
                  <div className="p-3 font-medium text-2xl text-white mb-5">
                    Settings
                  </div>
                  <ul className="list-none p-0 m-0 text-white">
                    <li
                      className="mb-3 flex align-items-start bg-yellow-700 p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-user text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Account</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Accumsan sit amet nulla facilisi morbi tempus iaculis.
                        </p>
                      </div>
                    </li>
                    <li
                      className="mb-3 flex align-items-start p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-inbox text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Inbox</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Condimentum vitae sapien pellentesque habitant.
                        </p>
                      </div>
                    </li>
                    <li
                      className="mb-3 flex align-items-start p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-credit-card text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Sales</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          Egestas integer eget aliquet nibh praesent tristique.
                        </p>
                      </div>
                    </li>
                    <li
                      className="mb-3 flex align-items-start p-3"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="pi pi-lock text-xl mr-3 "></i>
                      <div className="flex flex-column">
                        <span>Privacy</span>
                        <p className="mt-2 mb-0 line-height-3 text-yellow-200">
                          In ante metus dictum at tempor commodo ullamcorper a
                          lacus.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen flex flex-column relative flex-auto">
          <div
            className="flex justify-content-between lg:justify-content-start align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static"
            style={{ height: "60px" }}
          >
            <div className="flex">
              <StyleClass
                nodeRef={btnRef10}
                selector="#app-sidebar"
                enterClassName="hidden"
                enterActiveClassName="fadeinleft"
                leaveToClassName="hidden"
                leaveActiveClassName="fadeoutleft"
              >
                <a
                  ref={btnRef10}
                  className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
                >
                  <i className="pi pi-bars text-4xl"></i>
                  <Ripple />
                </a>
              </StyleClass>
            </div>
            <img
              src="/demo/images/blocks/logos/hyper.svg"
              alt="Image"
              height="30"
              className="block lg:hidden"
            />
            <StyleClass
              nodeRef={btnRef11}
              selector="@next"
              enterClassName="hidden"
              enterActiveClassName="fadein"
              leaveToClassName="hidden"
              leaveActiveClassName="fadeout"
              hideOnOutsideClick
            >
              <a
                ref={btnRef11}
                className="p-ripple cursor-pointer block lg:hidden text-700"
              >
                <i className="pi pi-ellipsis-v text-2xl"></i>
                <Ripple />
              </a>
            </StyleClass>
            <ul
              className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:w-full
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
            >
              <li>
                <a
                  className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                >
                  <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                  <span className="block lg:hidden font-medium">Inbox</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                >
                  <i className="pi pi-star text-base lg:text-2xl mr-2 lg:mr-0"></i>
                  <span className="block lg:hidden font-medium">Favorites</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                >
                  <i className="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                  <span className="block lg:hidden font-medium">Account</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                >
                  <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                    <Badge severity="danger" />
                  </i>
                  <span className="block lg:hidden font-medium">
                    Notifications
                  </span>
                  <Ripple />
                </a>
              </li>
              <li className="border-top-1 surface-border lg:border-top-none lg:ml-auto">
                <a
                  className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                >
                  <img
                    src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                    className="mr-3 lg:mr-0"
                    style={{ width: "32px", height: "32px" }}
                    alt="avatar-f-1"
                  />
                  <div className="block lg:hidden">
                    <div className="text-900 font-medium">
                      Josephine Lillard
                    </div>
                    <span className="text-600 font-medium text-sm">
                      Marketing Specialist
                    </span>
                  </div>
                  <Ripple />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-column flex-auto">
            <div className="border-2 border-dashed border-round surface-border surface-section flex-auto">
              <StatsLayout />
              {activeTab === 0 && activeTab2 === 0 ? (
                <HCMasterFormPage />
              ) : null}
              {activeTab === 1 && activeTab2 === 0 ? (
                <MachineMasterPage />
              ) : null}
              {activeTab === 1 && activeTab2 === 1 ? (
                <LocationMasterPage />
              ) : null}
              {activeTab === 1 && activeTab2 === 2 ? <OpsCentrePage /> : null}
            </div>
          </div>
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
  //
});

export default connect(mapState, mapDispatch)(AdminDashLayout);
