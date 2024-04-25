import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from "primereact/inputtext";

const SingleMachineMasterPage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  useEffect(() => {
    //on mount
    client
      .service("machineMaster")
      .get(urlParams.singleMachineMasterId, {
        query: {
          $populate: [
            {
              path: "createdBy",
              service: "users",
              select: ["name"],
            },
            {
              path: "updatedBy",
              service: "users",
              select: ["name"],
            },
          ],
        },
      })
      .then((res) => {
        set_entity(res || {});
      })
      .catch((error) => {
        console.log({ error });
        props.alert({
          title: "MachineMaster",
          type: "error",
          message: error.message || "Failed get machineMaster",
        });
      });
  }, [props, urlParams.singleMachineMasterId]);

  const goBack = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div className="col-12 flex flex-column align-items-center">
      <div className="col-10">
        <div className="flex align-items-center justify-content-start">
          <Button
            className="p-button-text"
            icon="pi pi-chevron-left"
            onClick={() => goBack()}
          />
          <h3 className="m-0">MachineMaster</h3>
        </div>
        <p>machineMaster/{urlParams.singleMachineMasterId}</p>
        {/* ~cb-project-dashboard~ */}
      </div>
      <div className="grid col-10">
        <div className="card w-full">
          <label className="text-sm text-primary">Ownership</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.ownership}</p>
          </div>
          <label className="text-sm text-primary">Vmcode</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.vmcode}</p>
          </div>
          <label className="text-sm text-primary">Zone</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.zone}</p>
          </div>
          <label className="text-sm text-primary">Location Code</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.locationCode}</p>
          </div>
          <label className="text-sm text-primary">Location Desc</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.locationDesc}</p>
          </div>
          <label className="text-sm text-primary">Model No</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.modelNo}</p>
          </div>
          <label className="text-sm text-primary">Serial Number</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.serialNumber}</p>
          </div>
          <label className="text-sm text-primary">Vm Id</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.vmId}</p>
          </div>
          <label className="text-sm text-primary">purchaseDate</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.purchaseDate}</p>
          </div>
          <label className="text-sm text-primary">commissionDate</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.commissionDate}</p>
          </div>
          <label className="text-sm text-primary">Description</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.description}</p>
          </div>

          <label className="text-sm text-primary">created</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
          </div>
          <label className="text-sm text-primary">updated</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
          </div>
          <label className="text-sm text-primary">createdBy</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.createdBy?.name}</p>
          </div>
          <label className="text-sm text-primary">lastUpdatedBy</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.updatedBy?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
  //
});

export default connect(mapState, mapDispatch)(SingleMachineMasterPage);
