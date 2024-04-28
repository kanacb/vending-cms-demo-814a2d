import React, { useState, useEffect, useRef } from "react";
import "./ProjectLayout.css";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { AppMenu } from "../Layouts/AppMenu";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Ripple } from "primereact/ripple";

const leftMenuStyle = {
  open: { transform: "translateX(0)" },
  close: { transform: "translateX(-100%)" },
};

const mainLayoutStyle = {
  open: { marginLeft: "260px" },
  close: { marginLeft: 0 },
};

const HCMasterFormLayout = (props) => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const urlParams = useParams();
  const copyTooltipRef = useRef();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);
  const [activeTab2, setActiveTab2] = useState(null);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      if (window.innerWidth < 720) if (props.menuOpen) props.setMenuOpen(false);
    };
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [props]); // Empty array ensures that effect is only run on mount

  useEffect(() => {
    if (mobileMenuActive) {
      addClass(document.body, "body-overflow-hidden");
    } else {
      removeClass(document.body, "body-overflow-hidden");
    }
  }, [mobileMenuActive]);

  useEffect(() => {
    copyTooltipRef &&
      copyTooltipRef.current &&
      copyTooltipRef.current.updateTargetEvents();
  }, [location]);

  const onMenuItemClick = (event) => {
    if (!event.item.items) {
      setMobileMenuActive(false);
    }
  };

  const menu = [
    {
      label: "HCMasterForm",
      items: [
        {
          label: "Details",
          icon: "pi pi-fw pi-cog",
          to: `/hCMasterForm/${urlParams.singleHCMasterFormId}/single`,
        },
        {
          label: "Hot Cold Stage 1",
          icon: "pi pi-fw pi-cog",
          to: `/hCMasterForm/${urlParams.singleHCMasterFormId}/hcStage1`,
        },
        {
          label: "Hot Cold Stage 2",
          icon: "pi pi-fw pi-cog",
          to: `/hCMasterForm/${urlParams.singleHCMasterFormId}/hcStage2`,
        },
        {
          label: "HC Stage 1 Agree",
          icon: "pi pi-fw pi-cog",
          to: `/hCMasterForm/${urlParams.singleHCMasterFormId}/hcStage1Agree`,
        },
        {
          label: "HC Stage 2 Agree",
          icon: "pi pi-fw pi-cog",
          to: `/hCMasterForm/${urlParams.singleHCMasterFormId}/hcStage2Agree`,
        },
      ],
    },
  ];

  const addClass = (element, className) => {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  };

  const removeClass = (element, className) => {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp("(^|\b)" + className.split(" ").join("|") + "(\b|$)", "gi"),
        " "
      );
  };

  return (
    <>
      <div
        className={`layout-sidebar my-custom-scroll-bar my-custom-scroll-bar-margin overflow-x-hidden`}
        style={props.menuOpen ? leftMenuStyle.open : leftMenuStyle.close}
      >
        <AppMenu
          model={menu}
          onMenuItemClick={onMenuItemClick}
          layoutColorMode={"light"}
        />

        <div
          className="absolute"
          style={{ right: "-1.5rem", top: "30%", bottom: "50%" }}
        >
          <Button
            className="p-button no-focus-effect h-full pr-3"
            style={{ borderRadius: "20px", minHeight: "10rem" }}
            onClick={() => props.setMenuOpen(!props.menuOpen)}
          />
        </div>
      </div>

      <div
        className="layout-project-container"
        style={props.menuOpen ? mainLayoutStyle.open : mainLayoutStyle.close}
      >
        <div className={`layout-main ${props.contentClassName}`}>
          {props.children}
        </div>
      </div>
    </>
  );
};

const mapState = (state) => {
  const { selectedHCMasterForm } = state.hCMasterForm;
  const { menuOpen } = state.layout;
  return { selectedHCMasterForm, menuOpen };
};
const mapDispatch = (dispatch) => ({
  setMenuOpen: (bool) => dispatch.layout.setMenuOpen(bool),
  getOneHCMasterForm: (id) => dispatch.hCMasterForm.getOneHCMasterForm(id),
});

export default connect(mapState, mapDispatch)(HCMasterFormLayout);
