import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from "primereact/inputtext";

const SingleHcStage1AgreePage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  const [Ref, setRef] = useState([]);

  useEffect(() => {
    //on mount
    client
      .service("hcStage1Agree")
      .get(urlParams.singleHcStage1AgreeId, {
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
            "Ref",
          ],
        },
      })
      .then((res) => {
        set_entity(res || {});
        const Ref = Array.isArray(res.Ref)
          ? res.Ref.map((elem) => ({ _id: elem._id, RefNo: elem.RefNo }))
          : res.Ref
            ? [{ _id: res.Ref._id, RefNo: res.Ref.RefNo }]
            : [];
        setRef(Ref);
      })
      .catch((error) => {
        console.log({ error });
        props.alert({
          title: "HcStage1Agree",
          type: "error",
          message: error.message || "Failed get hcStage1Agree",
        });
      });
  }, [props, urlParams.singleHcStage1AgreeId]);

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
          <h3 className="m-0">HcStage1Agree</h3>
        </div>
        <p>hcStage1Agree/{urlParams.singleHcStage1AgreeId}</p>
        {/* ~cb-project-dashboard~ */}
      </div>
      <div className="grid col-10">
        <div className="card w-full">
          <label className="text-sm text-primary">Ref</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.Ref?.RefNo}</p>
          </div>
          <label className="text-sm text-primary">TechName</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.TechName}</p>
          </div>
          <label className="text-sm text-primary">TechSign</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.TechSign}</p>
          </div>
          <label className="text-sm text-primary">TechDate</label>
          <div className="ml-3">{moment(_entity?.TechDate).fromNow()}</div>
          <label className="text-sm text-primary">TechProceed</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.TechProceed}</p>
          </div>
          <label className="text-sm text-primary">SvName</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.SvName}</p>
          </div>
          <label className="text-sm text-primary">SvSign</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.SvSign}</p>
          </div>
          <label className="text-sm text-primary">SvDate</label>
          <div className="ml-3">{moment(_entity?.SvDate).fromNow()}</div>
          <label className="text-sm text-primary">SvProceed</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.SvProceed}</p>
          </div>
          <label className="text-sm text-primary">ManagerName</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.ManagerName}</p>
          </div>
          <label className="text-sm text-primary">ManagerSign</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.ManagerSign}</p>
          </div>
          <label className="text-sm text-primary">ManagerDate</label>
          <div className="ml-3">{moment(_entity?.ManagerDate).fromNow()}</div>
          <label className="text-sm text-primary">ManagerProceed</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.ManagerProceed}</p>
          </div>
          <label className="text-sm text-primary">Remarks</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.Remarks}</p>
          </div>
          <label className="text-sm">Ref</label>
          <p>
            {Ref.map((elem) => (
              <Link key={elem._id} to={`/hCMasterForm/${elem._id}`}>
                <div className="card">
                  <p>{elem.RefNo}</p>
                </div>
              </Link>
            ))}
          </p>
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

export default connect(mapState, mapDispatch)(SingleHcStage1AgreePage);
