import React, { useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";

const SourcePage = (props) => {
  const [text, setText] = useState(
    "<div>Hello Atals</div><div>CodeBridge <b>Editor</b> Rocks</div><div><br></div>",
  );

  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  };

  const header = renderHeader();

  return (
    <div className="card w-full">
      <div className="flex justify-content-end">
        <Button
          label="next"
          text
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={() => {
            props.setProcess2(true);
          }}
          className="p-button-success"
        ></Button>
      </div>
      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        headerTemplate={header}
        style={{ height: "320px" }}
      />
      <div className="flex justify-content-end">
        <Button label="save" text className="p-button-success"></Button>
      </div>
    </div>
  );
};

const mapState = (state) => {
  const { user } = state.auth;
  return { user };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SourcePage);
