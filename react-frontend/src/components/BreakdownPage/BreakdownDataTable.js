
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';

import moment from "moment";

const BreakdownDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    const dt = useRef(null);
     
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.opsCentreId}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.locationId?.name}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.visitDate}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.reportDate}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.reasonForBreakdown}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.technicianRemark}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.machineId}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.technicianId?.vmcode}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
    const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);
    const pCreatedBy = (rowData, { rowIndex }) => (
        <p>{rowData.createdBy?.name}</p>
    );
    const pUpdatedBy = (rowData, { rowIndex }) => (<p>{rowData.updatedBy?.name}</p>);
    const paginatorLeft = (<Button type="button" icon="pi pi-refresh" text onClick={() => setRefresh(!refresh)}/>);
    const paginatorRight = <Button type="button" icon="pi pi-download" text onClick={() => exportCSV()}/>;
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <DataTable value={items} ref={dt} onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer">
            <Column field="opsCentreId" header="Ops Centre Id" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="locationId" header="locationId" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="visitDate" header="visitDate" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="reportDate" header="reportDate" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="reasonForBreakdown" header="Reason For Breakdown" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="technicianRemark" header="Technician Remark" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="machineId" header="machineId" body={pTemplate7} sortable style={{ minWidth: "8rem" }} />
            <Column field="technicianId" header="technicianId" body={pTemplate8} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            //<Column field="createdAt" header="created" body={pCreatedAt} sortable style={{ minWidth: "8rem" }} />
            //<Column field="updatedAt" header="updated" body={pUpdatedAt} sortable style={{ minWidth: "8rem" }} />
            //<Column field="createdBy" header="createdBy" body={pCreatedBy} sortable style={{ minWidth: "8rem" }} />
            //<Column field="updatedBy" header="updatedBy" body={pUpdatedBy} sortable style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default BreakdownDataTable;