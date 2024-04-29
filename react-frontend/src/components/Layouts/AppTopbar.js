import React, { useRef } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Tag } from "primereact/tag";
import { AvatarGroup } from "primereact/avatargroup";
import { Avatar } from "primereact/avatar";

const AppTopbar = (props) => {
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  const showMenu = (e) => {
    if (userMenuRef?.current) userMenuRef.current.show(e);
  };
  const closeMenu = (e) => {
    if (userMenuRef?.current) userMenuRef.current.hide(e);
  };
  const items = [
    {
      label: "Account",
      icon: "pi pi-flag",
      command: () => navigate("/account"),
    },
    {
      label: "Log Out",
      icon: "pi pi-fw pi-sign-out",
      template: (item) => {
        return (
          <ul className="p-menu-list p-reset border-top-1 border-200">
            <li className="p-menu-list p-reset" key={item.label}>
              <a className="p-menuitem-link" onClick={onLogout} role="menuitem">
                <span
                  className={"p-menuitem-icon pi pi-sign-out text-primary"}
                ></span>
                <span className={"p-menuitem-text text-primary"}>
                  {item.label}
                </span>
              </a>
            </li>
          </ul>
        );
      },
    },
  ];

  const onLogout = async (e) => {
    try {
      await props.logout();
      navigate("/", { replace: true });
      closeMenu(e);
    } catch (error) {
      //
    }
  };

  const menu8_1 = useRef(null);
  const menu8_2 = useRef(null);
  const menu8_3 = useRef(null);
  const menu9_1 = useRef(null);
  const menu9_2 = useRef(null);
  const menu9_3 = useRef(null);
  const menu11_1 = useRef(null);
  const menu12_1 = useRef(null);

  const blockTopBar = `    <div className="layout-topbar">
  <Link to="/">
    <div className="cursor-pointer min-w-max flex align-items-end">
      {/* <img src={"assets/logo/cb-logo.svg"} height={30} className="mb-1" /> */}
      <h3
        className="text-red-500"
        style={{ fontFamily: "MarlinGeo", fontWeight: "bolder", margin: 0 }}
      >
        <i className="pi pi-home" style={{ fontSize: "1.5rem" }}></i>{" "}
        Vending-cms-demo
      </h3>
    </div>
  </Link>

  {props.showSideMenuButton ? (
    <button
      type="button"
      className="p-link  layout-menu-button layout-topbar-button"
      onClick={props.onToggleMenuClick}
    >
      <i className="pi pi-bars" />
    </button>
  ) : null}

  <button
    type="button"
    className="p-link layout-topbar-menu-button layout-topbar-button"
    onClick={props.onMobileTopbarMenuClick}
  >
    <i className="pi pi-ellipsis-v" />
  </button>

  <ul
    className={
      "layout-topbar-menu lg:flex origin-top" +
      (props.mobileTopbarMenuActive
        ? " layout-topbar-menu-mobile-active"
        : "")
    }
  >
    {props.onSettings ? (
      <li>
        <button
          className="p-link layout-topbar-button"
          onClick={props.onSettings}
        >
          <i className="pi pi-cog" />
          <span>Settings</span>
        </button>
      </li>
    ) : null}
    {props.onAccount ? (
      <li>
        <button
          className="p-link layout-topbar-button"
          onClick={props.onAccount}
        >
          <i className="pi pi-user" />
          <span>Profile</span>
        </button>
      </li>
    ) : null}
  </ul>
  <Menu model={items} popup ref={userMenuRef} id="user-popup-menu" />
  {props.isLoggedIn ? (
    <Button
      className="p-button-rounded p-button-outlined ml-3"
      style={{ zIndex: 20 }}
      icon="pi pi-user"
      label={props.user?.email}
      onClick={showMenu}
      aria-controls="user-popup-menu"
      aria-haspopup
    />
  ) : (
    <Button
      label="login"
      className="p-button-rounded"
      onClick={() => navigate("/login")}
    />
  )}
</div>`;

  return (
    <div className="surface-section px-4 py-1 md:px-6 lg:px-8 flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between">
      <div className="flex align-items-center">
        <Link to="/admin">
          <div className="cursor-pointer min-w-max flex align-items-end">
            {/* <img src={"assets/logo/cb-logo.svg"} height={30} className="mb-1" /> */}
            <h3
              className="text-red-500"
              style={{
                fontFamily: "MarlinGeo",
                fontWeight: "bolder",
                margin: 0,
              }}
            >
              <i className="pi pi-home" style={{ fontSize: "1.5rem" }}></i>{" "}
            </h3>
          </div>
        </Link>

        <div className="text-900 text-3xl font-medium ml-5">Atlas Vending</div>

        {/* <Tag className="mr-2" value="Journey" rounded severity="warning" />
        <Tag className="mr-2" value="Space" rounded severity="help" /> */}
      </div>
      <div className="flex align-items-center mt-3 lg:mt-0">
        <AvatarGroup className="mr-3">
          <Avatar
            image="/demo/images/blocks/avatars/circle/avatar-f-1.png"
            shape="circle"
          />
          <Avatar
            image="/demo/images/blocks/avatars/circle/avatar-f-2.png"
            shape="circle"
          />
          <Avatar
            image="/demo/images/blocks/avatars/circle/avatar-m-1.png"
            shape="circle"
          />
          <Avatar
            image="/demo/images/blocks/avatars/circle/avatar-m-2.png"
            shape="circle"
          />
          <Avatar
            image="/demo/images/blocks/avatars/circle/avatar-f-3.png"
            shape="circle"
          />
        </AvatarGroup>
        <Button
          type="button"
          label="Invite"
          icon="pi pi-user-plus"
          className="mr-3 p-button-rounded"
        />
        <Button
          type="button"
          icon="pi pi-ellipsis-v"
          className="p-button-text p-button-rounded"
          onClick={(event) => menu11_1.current.toggle(event)}
        />
        <Menu ref={menu11_1} popup model={items} />
      </div>
    </div>
  );
};

const mapState = (state) => {
  const { isLoggedIn, user } = state.auth;
  return { isLoggedIn, user };
};
const mapDispatch = (dispatch) => ({
  logout: () => dispatch.auth.logout(),
});

export default connect(mapState, mapDispatch)(AppTopbar);
