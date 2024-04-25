import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';



const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const BreakdownCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [locationId, setLocationId] = useState([])
    const [machineId, setMachineId] = useState([])
    const [technicianId, setTechnicianId] = useState([])

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    useEffect(() => {
                    //on mount locationMaster 
                    client
                        .service("locationMaster")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
                        .then((res) => {
                            setLocationId(res.data.map((e) => ({ name: e['name'], value: e._id })));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "LocationMaster", type: "error", message: error.message || "Failed get locationMaster" });
                        });
                }, []);
   useEffect(() => {
                    //on mount machineMaster 
                    client
                        .service("machineMaster")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
                        .then((res) => {
                            setMachineId(res.data.map((e) => ({ name: e['vmcode'], value: e._id })));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "MachineMaster", type: "error", message: error.message || "Failed get machineMaster" });
                        });
                }, []);
   useEffect(() => {
                    //on mount users 
                    client
                        .service("users")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
                        .then((res) => {
                            setTechnicianId(res.data.map((e) => ({ name: e['name'], value: e._id })));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Users", type: "error", message: error.message || "Failed get users" });
                        });
                }, []);

    const onSave = async () => {
        let _data = {
            opsCentreId: _entity?.opsCentreId,
            locationId: _entity?.locationId?._id,
            visitDate: _entity?.visitDate,
            reportDate: _entity?.reportDate,
            reasonForBreakdown: _entity?.reasonForBreakdown,
            technicianRemark: _entity?.technicianRemark,
            machineId: _entity?.machineId?._id,
            technicianId: _entity?.technicianId?._id,
        };

        setLoading(true);
        try {
            
        await client.service("breakdown").patch(_entity._id, _data);
        const eagerResult = await client
            .service("breakdown")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[_entity._id]}, $populate : [
                
                {
                    path : "locationId",
                    service : "locationMaster",
                    select:["name"]
                }
            ,
                {
                    path : "machineId",
                    service : "machineMaster",
                    select:["vmcode"]
                }
            ,
                {
                    path : "technicianId",
                    service : "users",
                    select:["name"]
                }
            
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info breakdown updated successfully" });
        props.onEditResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    // children dropdown options

    const locationIdOptions = locationId.map((elem) => ({ name: elem.name, value: elem.value })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
    const machineIdOptions = machineId.map((elem) => ({ name: elem.name, value: elem.value })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));
    const technicianIdOptions = technicianId.map((elem) => ({ name: elem.name, value: elem.value })).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric : true, sensitivity: "base"}));

    return (
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="breakdown-edit-dialog-component">
                <div>
                <p className="m-0">Ops Centre Id:</p>
                <InputText className="w-full mb-3" value={_entity?.opsCentreId} onChange={(e) => setValByKey("opsCentreId", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">locationId:</p>
                <Dropdown value={_entity?.locationId?._id} options={locationIdOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("locationId", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">visitDate:</p>
                <Calendar dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.visitDate)} onChange={ (e) => setValByKey("visitDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
            </div>
            <div>
                <p className="m-0">reportDate:</p>
                <Calendar dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.reportDate)} onChange={ (e) => setValByKey("reportDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
            </div>
            <div>
                <p className="m-0">Reason For Breakdown:</p>
                <InputText className="w-full mb-3" value={_entity?.reasonForBreakdown} onChange={(e) => setValByKey("reasonForBreakdown", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Technician Remark:</p>
                <InputText className="w-full mb-3" value={_entity?.technicianRemark} onChange={(e) => setValByKey("technicianRemark", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">machineId:</p>
                <Dropdown value={_entity?.machineId?._id} options={machineIdOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("machineId", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">technicianId:</p>
                <Dropdown value={_entity?.technicianId?._id} options={technicianIdOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("technicianId", {_id : e.value})} />
            </div>
                <div><p className="m-0">createdAt:{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div><p className="m-0">lastUpdatedAt:{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div><p className="m-0">createdBy:{" " +_entity?.createdBy?.name}</p></div>
                <div><p className="m-0">lastUpdatedBy:{" " +_entity?.updatedBy?.name}</p></div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(BreakdownCreateDialogComponent);
