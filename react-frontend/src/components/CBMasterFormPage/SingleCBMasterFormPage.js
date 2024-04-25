import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from "primereact/inputtext";

const SingleCBMasterFormPage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  useEffect(() => {
    //on mount
    client
      .service("cBMasterForm")
      .get(urlParams.singleCBMasterFormId, {
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
          title: "CBMasterForm",
          type: "error",
          message: error.message || "Failed get cBMasterForm",
        });
      });
  }, [props, urlParams.singleCBMasterFormId]);

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
          <h3 className="m-0">CBMasterForm</h3>
        </div>
        <p>cBMasterForm/{urlParams.singleCBMasterFormId}</p>
        {/* ~cb-project-dashboard~ */}
      </div>
      <div className="grid col-10">
        <div className="card w-full">
          <label className="text-sm text-primary">RefNo</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.RefNo}</p>
          </div>
          <label className="text-sm text-primary">Model</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.Model}</p>
          </div>
          <label className="text-sm text-primary">SerialNo</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.SerialNo}</p>
          </div>
          <label className="text-sm text-primary">ManuYear</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.ManuYear}</p>
          </div>
          <label className="text-sm text-primary">Branch</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.Branch}</p>
          </div>
          <label className="text-sm text-primary">Date Inspection</label>
          <div className="ml-3">{moment(_entity?.DateInspec).fromNow()}</div>
          <label className="text-sm text-primary">Date recall</label>
          <div className="ml-3">{moment(_entity?.DateRecall).fromNow()}</div>
          <label className="text-sm text-primary">Recall Location</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.RecallLoc}</p>
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

export default connect(mapState, mapDispatch)(SingleCBMasterFormPage);
