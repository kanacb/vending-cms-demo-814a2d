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

const HCMasterFormCreateDialogComponent = (props) => {
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
            RefNo: _entity?.RefNo,
            Model: _entity?.Model,
            SerialNo: _entity?.SerialNo,
            ManuYear: _entity?.ManuYear,
            Branch: _entity?.Branch,
            DateInspec: _entity?.DateInspec,
            DateRecall: _entity?.DateRecall,
            RecallLoc: _entity?.RecallLoc,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("hCMasterForm").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info hCMasterForm created successfully" });
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
        <Dialog header="Create Hot Cold Master Form" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="hCMasterForm-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="RefNo" type="text" value={_entity?.RefNo} onChange={(e) => setValByKey("RefNo", e.target.value)}  />
                    <label htmlFor="RefNo">RefNo:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="Model" type="text" value={_entity?.Model} onChange={(e) => setValByKey("Model", e.target.value)}  />
                    <label htmlFor="Model">Model:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="SerialNo" type="text" value={_entity?.SerialNo} onChange={(e) => setValByKey("SerialNo", e.target.value)}  />
                    <label htmlFor="SerialNo">SerialNo:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="ManuYear" type="text" value={_entity?.ManuYear} onChange={(e) => setValByKey("ManuYear", e.target.value)}  />
                    <label htmlFor="ManuYear">ManuYear:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="Branch" type="text" value={_entity?.Branch} onChange={(e) => setValByKey("Branch", e.target.value)}  />
                    <label htmlFor="Branch">Branch:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="DateInspec" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.DateInspec)} onChange={ (e) => setValByKey("DateInspec", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="DateInspec">Date Inspec:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="DateRecall" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.DateRecall)} onChange={ (e) => setValByKey("DateRecall", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="DateRecall">Date Recall:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="RecallLoc" type="text" value={_entity?.RecallLoc} onChange={(e) => setValByKey("RecallLoc", e.target.value)}  />
                    <label htmlFor="RecallLoc">RecallLoc:</label>
                </span>
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

export default connect(mapState, mapDispatch)(HCMasterFormCreateDialogComponent);
