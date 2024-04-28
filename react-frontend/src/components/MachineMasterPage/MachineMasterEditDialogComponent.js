import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import moment from "moment";
import { InputText } from 'primereact/inputtext';
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

const MachineMasterCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            ownership: _entity?.ownership,
            vmcode: _entity?.vmcode,
            zone: _entity?.zone,
            locationCode: _entity?.locationCode,
            locationDesc: _entity?.locationDesc,
            modelNo: _entity?.modelNo,
            serialNumber: _entity?.serialNumber,
            vmId: _entity?.vmId,
            purchaseDate: _entity?.purchaseDate,
            commissionDate: _entity?.commissionDate,
            description: _entity?.description,
        };

        setLoading(true);
        try {
            
        const result = await client.service("machineMaster").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info machineMaster updated successfully" });
        props.onEditResult(result);
        
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

    

    return (
        <Dialog header="Edit Machine Master" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="machineMaster-edit-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="ownership" type="text" value={_entity?.ownership} onChange={(e) => setValByKey("ownership", e.target.value)}  />
                    <label htmlFor="ownership">Ownership:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="vmcode" type="text" value={_entity?.vmcode} onChange={(e) => setValByKey("vmcode", e.target.value)}  />
                    <label htmlFor="vmcode">Vmcode:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="zone" type="text" value={_entity?.zone} onChange={(e) => setValByKey("zone", e.target.value)}  />
                    <label htmlFor="zone">Zone:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="locationCode" type="text" value={_entity?.locationCode} onChange={(e) => setValByKey("locationCode", e.target.value)}  />
                    <label htmlFor="locationCode">Location Code:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="locationDesc" type="text" value={_entity?.locationDesc} onChange={(e) => setValByKey("locationDesc", e.target.value)}  />
                    <label htmlFor="locationDesc">Location Desc:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="modelNo" type="text" value={_entity?.modelNo} onChange={(e) => setValByKey("modelNo", e.target.value)}  />
                    <label htmlFor="modelNo">Model No:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="serialNumber" type="text" value={_entity?.serialNumber} onChange={(e) => setValByKey("serialNumber", e.target.value)}  />
                    <label htmlFor="serialNumber">Serial Number:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="vmId" type="text" value={_entity?.vmId} onChange={(e) => setValByKey("vmId", e.target.value)}  />
                    <label htmlFor="vmId">Vm Id:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="purchaseDate" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.purchaseDate)} onChange={ (e) => setValByKey("purchaseDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="purchaseDate">purchaseDate:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="commissionDate" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.commissionDate)} onChange={ (e) => setValByKey("commissionDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="commissionDate">commissionDate:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="description" type="text" value={_entity?.description} onChange={(e) => setValByKey("description", e.target.value)}  />
                    <label htmlFor="description">Description:</label>
                </span>
            </div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">createdAt:{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">lastUpdatedAt:{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">createdBy:{" " +_entity?.createdBy?.name}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">lastUpdatedBy:{" " +_entity?.updatedBy?.name}</p></div>
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

export default connect(mapState, mapDispatch)(MachineMasterCreateDialogComponent);
