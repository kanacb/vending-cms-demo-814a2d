import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from "primereact/inputtext";

const SingleCbStage1AgreePage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  const [Ref, setRef] = useState([]);

  useEffect(() => {
    //on mount
    client
      .service("cbStage1Agree")
      .get(urlParams.singleCbStage1AgreeId, {
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
          title: "CbStage1Agree",
          type: "error",
          message: error.message || "Failed get cbStage1Agree",
        });
      });
  }, [props, urlParams.singleCbStage1AgreeId]);

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
          <h3 className="m-0">CbStage1Agree</h3>
        </div>
        <p>cbStage1Agree/{urlParams.singleCbStage1AgreeId}</p>
        {/* ~cb-project-dashboard~ */}
      </div>
      <div className="card w-full">
        <div className="grid ">
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">TechName</label>
            <p className="">{_entity?.TechName}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">TechSign</label>
            <p className="">{_entity?.TechSign}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">TechDate</label>
            <p className="m-0 ml-3">{moment(_entity?.TechDate).fromNow()}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">TechProceed</label>
            <p className="">{_entity?.TechProceed}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">SvName</label>
            <p className="">{_entity?.SvName}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">SvSign</label>
            <p className="">{_entity?.SvSign}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">SvDate</label>
            <p className="m-0 ml-3">{moment(_entity?.SvDate).fromNow()}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">SvProcedd</label>
            <p className="">{_entity?.SvProcedd}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">MngrName</label>
            <p className="">{_entity?.MngrName}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">MngrSign</label>
            <p className="">{_entity?.MngrSign}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">MngrDate</label>
            <p className="m-0 ml-3">{moment(_entity?.MngrDate).fromNow()}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">MngrProceed</label>
            <p className="">{_entity?.MngrProceed}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm text-primary">Remarks</label>
            <p className="">{_entity?.Remarks}</p>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <label className="text-sm">Ref</label>
            <p>
              {Ref.map((elem) => (
                <Link key={elem._id} to={`/cBMasterForm/${elem._id}`}>
                  <div className="card">
                    <p className="text-xl text-primary">{elem.RefNo}</p>
                  </div>
                </Link>
              ))}
            </p>
          </div>

          <div className="col-12">&nbsp;</div>
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
  );
};

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
  //
});

export default connect(mapState, mapDispatch)(SingleCbStage1AgreePage);
