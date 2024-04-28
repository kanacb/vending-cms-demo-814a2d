import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';


const conditionArray = ["GOOD","BAD"];
const conditionOptions = conditionArray.map((x) => ({ name: x, value: x }));

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
        // replace this when there is a date field
        // const init  = { todate : new Date(), from : new Date()};
        // set_entity({...init});
        set_entity({});
    }, [props.show]);

    const onSave = async () => {
        let _data = {
            opsCentreId: _entity?.opsCentreId,
            locationId: _entity?.locationId?._id,
            visitDate: _entity?.visitDate,
            reportDate: _entity?.reportDate,
            reasonForBreakdown: _entity?.reasonForBreakdown,
            technicianRemark: _entity?.technicianRemark,
            condition: _entity?.condition,
            machineId: _entity?.machineId?._id,
            technicianId: _entity?.technicianId?._id,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("breakdown").create(_data);
        const eagerResult = await client
            .service("breakdown")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[result._id]}, $populate : [
                
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
        props.alert({ type: "success", title: "Create info", message: "Info breakdown updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

     useEffect(() => {
                    //on mount locationMaster
                    client
                        .service("locationMaster")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
                        .then((res) => {
                            setLocationId(res.data.map((e) => { return { name: e['name'], value: e._id }}));
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
                            setMachineId(res.data.map((e) => { return { name: e['vmcode'], value: e._id }}));
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
                            setTechnicianId(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Users", type: "error", message: error.message || "Failed get users" });
                        });
                }, []);

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

    const locationIdOptions = locationId.map((elem) => ({ name: elem.name, value: elem.value }));
    const machineIdOptions = machineId.map((elem) => ({ name: elem.name, value: elem.value }));
    const technicianIdOptions = technicianId.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create Breakdown" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="breakdown-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="opsCentreId" type="text" value={_entity?.opsCentreId} onChange={(e) => setValByKey("opsCentreId", e.target.value)}  />
                    <label htmlFor="opsCentreId">Ops Centre Id:</label>
                </span>
            </div>
            <div>
                <p className="m-0">locationId:</p>
                <Dropdown id="locationId" value={_entity?.locationId} optionLabel="name" optionValue="value" options={locationIdOptions} onChange={(e) => setValByKey("locationId", {_id : e.value})} />
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="visitDate" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.visitDate)} onChange={ (e) => setValByKey("visitDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="visitDate">visitDate:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="reportDate" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.reportDate)} onChange={ (e) => setValByKey("reportDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="reportDate">reportDate:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="reasonForBreakdown" type="text" value={_entity?.reasonForBreakdown} onChange={(e) => setValByKey("reasonForBreakdown", e.target.value)}  />
                    <label htmlFor="reasonForBreakdown">Reason For Breakdown:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="technicianRemark" type="text" value={_entity?.technicianRemark} onChange={(e) => setValByKey("technicianRemark", e.target.value)}  />
                    <label htmlFor="technicianRemark">Technician Remark:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Dropdown id="condition" value={_entity?.condition} options={conditionOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("condition", e.value)} />
                    <label htmlFor="condition">condition:</label>
                </span>
            </div>
            <div>
                <p className="m-0">machineId:</p>
                <Dropdown id="machineId" value={_entity?.machineId} optionLabel="name" optionValue="value" options={machineIdOptions} onChange={(e) => setValByKey("machineId", {_id : e.value})} />
            </div>
            <div>
                <p className="m-0">technicianId:</p>
                <Dropdown id="technicianId" value={_entity?.technicianId} optionLabel="name" optionValue="value" options={technicianIdOptions} onChange={(e) => setValByKey("technicianId", {_id : e.value})} />
            </div>
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
