import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';



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

const HcStage1AgreeCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [Ref, setRef] = useState([])

    useEffect(() => {
        // replace this when there is a date field
        // const init  = { todate : new Date(), from : new Date()};
        // set_entity({...init});
        set_entity({});
    }, [props.show]);

    const onSave = async () => {
        let _data = {
            Ref: _entity?.Ref?._id,
            TechName: _entity?.TechName,
            TechSign: _entity?.TechSign,
            TechDate: _entity?.TechDate,
            TechProceed: _entity?.TechProceed,
            SvName: _entity?.SvName,
            SvSign: _entity?.SvSign,
            SvDate: _entity?.SvDate,
            SvProceed: _entity?.SvProceed,
            ManagerName: _entity?.ManagerName,
            ManagerSign: _entity?.ManagerSign,
            ManagerDate: _entity?.ManagerDate,
            ManagerProceed: _entity?.ManagerProceed,
            Remarks: _entity?.Remarks,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("hcStage1Agree").create(_data);
        const eagerResult = await client
            .service("hcStage1Agree")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[result._id]}, $populate : [
                
                {
                    path : "Ref",
                    service : "hCMasterForm",
                    select:["RefNo"]
                }
            
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info hcStage1Agree updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

     useEffect(() => {
                    //on mount hCMasterForm
                    client
                        .service("hCMasterForm")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 } } })
                        .then((res) => {
                            setRef(res.data.map((e) => { return { name: e['RefNo'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "HCMasterForm", type: "error", message: error.message || "Failed get hCMasterForm" });
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

    const RefOptions = Ref.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create HC Stage 1 Agree" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="hcStage1Agree-create-dialog-component">
            <div>
                <p className="m-0">Ref:</p>
                <Dropdown id="Ref" value={_entity?.Ref} optionLabel="name" optionValue="value" options={RefOptions} onChange={(e) => setValByKey("Ref", {_id : e.value})} />
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="TechName" type="text" value={_entity?.TechName} onChange={(e) => setValByKey("TechName", e.target.value)}  />
                    <label htmlFor="TechName">TechName:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="TechSign" type="text" value={_entity?.TechSign} onChange={(e) => setValByKey("TechSign", e.target.value)}  />
                    <label htmlFor="TechSign">TechSign:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="TechDate" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.TechDate)} onChange={ (e) => setValByKey("TechDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="TechDate">TechDate:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Checkbox id="TechProceed" checked={_entity?.TechProceed} onChange={ (e) => setValByKey("TechProceed", e.checked)}  ></Checkbox>
                    <label htmlFor="TechProceed">TechProceed:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="SvName" type="text" value={_entity?.SvName} onChange={(e) => setValByKey("SvName", e.target.value)}  />
                    <label htmlFor="SvName">SvName:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="SvSign" type="text" value={_entity?.SvSign} onChange={(e) => setValByKey("SvSign", e.target.value)}  />
                    <label htmlFor="SvSign">SvSign:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="SvDate" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.SvDate)} onChange={ (e) => setValByKey("SvDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="SvDate">SvDate:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Checkbox id="SvProceed" checked={_entity?.SvProceed} onChange={ (e) => setValByKey("SvProceed", e.checked)}  ></Checkbox>
                    <label htmlFor="SvProceed">SvProceed:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="ManagerName" type="text" value={_entity?.ManagerName} onChange={(e) => setValByKey("ManagerName", e.target.value)}  />
                    <label htmlFor="ManagerName">ManagerName:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="ManagerSign" type="text" value={_entity?.ManagerSign} onChange={(e) => setValByKey("ManagerSign", e.target.value)}  />
                    <label htmlFor="ManagerSign">ManagerSign:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Calendar id="ManagerDate" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(_entity?.ManagerDate)} onChange={ (e) => setValByKey("ManagerDate", new Date(e.target.value))} showIcon showButtonBar ></Calendar>
                    <label htmlFor="ManagerDate">ManagerDate:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <Checkbox id="ManagerProceed" checked={_entity?.ManagerProceed} onChange={ (e) => setValByKey("ManagerProceed", e.checked)}  ></Checkbox>
                    <label htmlFor="ManagerProceed">ManagerProceed:</label>
                </span>
            </div>
            <div className="col-12 md:col-6 field mt-5">
                <span className="p-float-label">
                    <InputText id="Remarks" type="text" value={_entity?.Remarks} onChange={(e) => setValByKey("Remarks", e.target.value)}  />
                    <label htmlFor="Remarks">Remarks:</label>
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

export default connect(mapState, mapDispatch)(HcStage1AgreeCreateDialogComponent);
