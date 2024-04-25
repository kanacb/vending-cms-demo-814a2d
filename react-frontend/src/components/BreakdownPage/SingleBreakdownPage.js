import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from "primereact/inputtext";

const SingleBreakdownPage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  const [locationId, setLocationId] = useState([]);
  const [machineId, setMachineId] = useState([]);
  const [technicianId, setTechnicianId] = useState([]);

  useEffect(() => {
    //on mount
    client
      .service("breakdown")
      .get(urlParams.singleBreakdownId, {
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
            "locationId",
            "machineId",
            "technicianId",
          ],
        },
      })
      .then((res) => {
        set_entity(res || {});
        const locationId = Array.isArray(res.locationId)
          ? res.locationId.map((elem) => ({ _id: elem._id, name: elem.name }))
          : res.locationId
            ? [{ _id: res.locationId._id, name: res.locationId.name }]
            : [];
        setLocationId(locationId);
        const machineId = Array.isArray(res.machineId)
          ? res.machineId.map((elem) => ({
              _id: elem._id,
              vmcode: elem.vmcode,
            }))
          : res.machineId
            ? [{ _id: res.machineId._id, vmcode: res.machineId.vmcode }]
            : [];
        setMachineId(machineId);
        const technicianId = Array.isArray(res.technicianId)
          ? res.technicianId.map((elem) => ({ _id: elem._id, name: elem.name }))
          : res.technicianId
            ? [{ _id: res.technicianId._id, name: res.technicianId.name }]
            : [];
        setTechnicianId(technicianId);
      })
      .catch((error) => {
        console.log({ error });
        props.alert({
          title: "Breakdown",
          type: "error",
          message: error.message || "Failed get breakdown",
        });
      });
  }, [props, urlParams.singleBreakdownId]);

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
          <h3 className="m-0">Breakdown</h3>
        </div>
        <p>breakdown/{urlParams.singleBreakdownId}</p>
        {/* ~cb-project-dashboard~ */}
      </div>
      <div className="grid col-10">
        <div className="card w-full">
          <label className="text-sm text-primary">Ops Centre Id</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.opsCentreId}</p>
          </div>
          <label className="text-sm text-primary">locationId</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.locationId?.name}</p>
          </div>
          <label className="text-sm text-primary">visitDate</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.visitDate}</p>
          </div>
          <label className="text-sm text-primary">reportDate</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.reportDate}</p>
          </div>
          <label className="text-sm text-primary">Reason For Breakdown</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.reasonForBreakdown}</p>
          </div>
          <label className="text-sm text-primary">Technician Remark</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.technicianRemark}</p>
          </div>
          <label className="text-sm text-primary">machineId</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.machineId?.vmcode}</p>
          </div>
          <label className="text-sm text-primary">technicianId</label>
          <div className="ml-3">
            <p className="m-0 ml-3">{_entity?.technicianId?.name}</p>
          </div>
          <label className="text-sm">locationId</label>
          <p>
            {locationId.map((elem) => (
              <Link key={elem._id} to={`/locationMaster/${elem._id}`}>
                <div className="card">
                  <p>{elem.name}</p>
                </div>
              </Link>
            ))}
          </p>
          <label className="text-sm">machineId</label>
          <p>
            {machineId.map((elem) => (
              <Link key={elem._id} to={`/machineMaster/${elem._id}`}>
                <div className="card">
                  <p>{elem.vmcode}</p>
                </div>
              </Link>
            ))}
          </p>
          <label className="text-sm">technicianId</label>
          <p>
            {technicianId.map((elem) => (
              <Link key={elem._id} to={`/users/${elem._id}`}>
                <div className="card">
                  <p>{elem.name}</p>
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

export default connect(mapState, mapDispatch)(SingleBreakdownPage);
