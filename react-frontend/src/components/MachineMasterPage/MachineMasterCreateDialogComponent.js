import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
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
        // replace this when there is a date field
        // const init  = { todate : new Date(), from : new Date()};
        // set_entity({...init});
        set_entity({});
    }, [props.show]);

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
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("machineMaster").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info machineMaster created successfully" });
        props.onCreateResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
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

    

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="machineMaster-create-dialog-component">
            <div>
                <p className="m-0">Ownership:</p>
                <InputText className="w-full mb-3" value={_entity?.ownership} onChange={(e) => setValByKey("ownership", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Vmcode:</p>
                <InputText className="w-full mb-3" value={_entity?.vmcode} onChange={(e) => setValByKey("vmcode", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Zone:</p>
                <InputText className="w-full mb-3" value={_entity?.zone} onChange={(e) => setValByKey("zone", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Location Code:</p>
                <InputText className="w-full mb-3" value={_entity?.locationCode} onChange={(e) => setValByKey("locationCode", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Location Desc:</p>
                <InputText className="w-full mb-3" value={_entity?.locationDesc} onChange={(e) => setValByKey("locationDesc", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Model No:</p>
                <InputText className="w-full mb-3" value={_entity?.modelNo} onChange={(e) => setValByKey("modelNo", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Serial Number:</p>
                <InputText className="w-full mb-3" value={_entity?.serialNumber} onChange={(e) => setValByKey("serialNumber", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Vm Id:</p>
                <InputText className="w-full mb-3" value={_entity?.vmId} onChange={(e) => setValByKey("vmId", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">purchaseDate:</p>
                <Calendar dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.purchaseDate)} onChange={ (e) => setValByKey("purchaseDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
            </div>
            <div>
                <p className="m-0">commissionDate:</p>
                <Calendar dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.commissionDate)} onChange={ (e) => setValByKey("commissionDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
            </div>
            <div>
                <p className="m-0">Description:</p>
                <InputText className="w-full mb-3" value={_entity?.description} onChange={(e) => setValByKey("description", e.target.value)}  />
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

export default connect(mapState, mapDispatch)(MachineMasterCreateDialogComponent);
