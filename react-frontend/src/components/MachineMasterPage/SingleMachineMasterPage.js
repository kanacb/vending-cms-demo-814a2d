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
      <div className="card w-full">
        <div className="grid ">
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Ownership</label>
            <p className="">{_entity?.ownership}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Vmcode</label>
            <p className="">{_entity?.vmcode}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Zone</label>
            <p className="">{_entity?.zone}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Location Code</label>
            <p className="">{_entity?.locationCode}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Location Desc</label>
            <p className="">{_entity?.locationDesc}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Model No</label>
            <p className="">{_entity?.modelNo}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Serial Number</label>
            <p className="">{_entity?.serialNumber}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Vm Id</label>
            <p className="">{_entity?.vmId}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">purchaseDate</label>
            <p className="">{moment(_entity?.purchaseDate).fromNow()}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">commissionDate</label>
            <p className="">{moment(_entity?.commissionDate).fromNow()}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Description</label>
            <p className="">{_entity?.description}</p>
          </div>

          <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">created</label>
              <p className="">{moment(_entity?.createdAt).fromNow()}</p>
            </div>

            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">updated</label>
              <p className="">{moment(_entity?.updatedAt).fromNow()}</p>
            </div>

            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">createdBy</label>
              <p className="">{_entity?.createdBy?.name}</p>
            </div>

            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">lastUpdatedBy</label>
              <p className="">{_entity?.updatedBy?.name}</p>
            </div>
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
