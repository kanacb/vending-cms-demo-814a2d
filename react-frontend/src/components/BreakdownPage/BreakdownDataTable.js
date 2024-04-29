import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState, useRef } from "react";
import _ from "lodash";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

import moment from "moment";

const BreakdownDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
  const dt = useRef(null);

  const pTemplate0 = (rowData, { rowIndex }) => (
    <p>{rowData.opsCentreId?.name}</p>
  );
  const pTemplate1 = (rowData, { rowIndex }) => (
    <p>{rowData.locationId?.name}</p>
  );
  const inputTextareaTemplate3 = (rowData, { rowIndex }) => (
    <InputTextarea
      rows={5}
      cols={30}
      value={rowData.reasonForBreakdown}
      autoResize
    />
  );
  const inputTextareaTemplate4 = (rowData, { rowIndex }) => (
    <InputTextarea
      rows={5}
      cols={30}
      value={rowData.technicianRemark}
      autoResize
    />
  );
  const pTemplate5 = (rowData, { rowIndex }) => <p>{rowData.visitDate}</p>;
  const pTemplate6 = (rowData, { rowIndex }) => <p>{rowData.reportDate}</p>;
  const pTemplate8 = (rowData, { rowIndex }) => (
    <p>{rowData.machineId?.vmcode}</p>
  );
  const pTemplate9 = (rowData, { rowIndex }) => (
    <p>{rowData.technicianId?.name}</p>
  );

  const editTemplate = (rowData, { rowIndex }) => (
    <Button
      onClick={() => onEditRow(rowData, rowIndex)}
      icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`}
      className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`}
    />
  );
  const deleteTemplate = (rowData, { rowIndex }) => (
    <Button
      onClick={() => onRowDelete(rowIndex)}
      icon="pi pi-times"
      className="p-button-rounded p-button-danger p-button-text"
    />
  );
  const pCreatedAt = (rowData, { rowIndex }) => (
    <p>{moment(rowData.createdAt).fromNow()}</p>
  );
  const pUpdatedAt = (rowData, { rowIndex }) => (
    <p>{moment(rowData.updatedAt).fromNow()}</p>
  );
  const pCreatedBy = (rowData, { rowIndex }) => (
    <p>{rowData.createdBy?.name}</p>
  );
  const pUpdatedBy = (rowData, { rowIndex }) => (
    <p>{rowData.updatedBy?.name}</p>
  );
  const paginatorLeft = (
    <Button
      type="button"
      icon="pi pi-refresh"
      text
      onClick={() => setRefresh(!refresh)}
    />
  );
  const paginatorRight = (
    <Button
      type="button"
      icon="pi pi-download"
      text
      onClick={() => exportCSV()}
    />
  );
  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  return (
    <DataTable
      value={items}
      ref={dt}
      onRowClick={onRowClick}
      scrollable
      rowHover
      stripedRows
      paginator
      rows={10}
      rowsPerPageOptions={[10, 50, 250, 500]}
      size={"small"}
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      paginatorLeft={paginatorLeft}
      paginatorRight={paginatorRight}
      rowClassName="cursor-pointer"
    >
      <Column
        field="opsCentreId"
        header="Ops Centre"
        body={pTemplate0}
        style={{ minWidth: "8rem" }}
      />
      <Column
        field="locationId"
        header="Location"
        body={pTemplate1}
        style={{ minWidth: "8rem" }}
      />
      <Column
        field="reasonForBreakdown"
        header="Reason For Breakdown"
        body={inputTextareaTemplate3}
        style={{ minWidth: "8rem" }}
      />
      <Column
        field="technicianRemark"
        header="Technician Remarks"
        body={inputTextareaTemplate4}
        style={{ minWidth: "8rem" }}
      />
      <Column
        field="visitDate"
        header="Visited Date"
        body={pTemplate5}
        sortable
        style={{ minWidth: "8rem" }}
      />
      <Column
        field="reportDate"
        header="Reported Date"
        body={pTemplate6}
        sortable
        style={{ minWidth: "8rem" }}
      />
      <Column
        field="machineId"
        header="Machine"
        body={pTemplate8}
        style={{ minWidth: "8rem" }}
      />
      <Column
        field="technicianId"
        header="Technician"
        body={pTemplate9}
        sortable
        style={{ minWidth: "8rem" }}
      />

      <Column header="Edit" body={editTemplate} />
      <Column header="Delete" body={deleteTemplate} />
      {/*<Column field="createdAt" header="created" body={pCreatedAt} sortable style={{ minWidth: "8rem" }} />*/}
      {/*<Column field="updatedAt" header="updated" body={pUpdatedAt} sortable style={{ minWidth: "8rem" }} />*/}
      {/*<Column field="createdBy" header="createdBy" body={pCreatedBy} sortable style={{ minWidth: "8rem" }} />*/}
      {/*<Column field="updatedBy" header="updatedBy" body={pUpdatedBy} sortable style={{ minWidth: "8rem" }} />*/}
    </DataTable>
  );
};

export default BreakdownDataTable;
