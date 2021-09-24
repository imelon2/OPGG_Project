import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { updateChampList } from "../../oop/updateChampList";
import { undateSpellList } from "../../oop/updateSpellList";
import { updateRuneList } from "../../oop/updateRuneList";

const Manage = () => {
  function updateChampData() {
    updateChampList();
    undateSpellList();
    updateRuneList();
  }
  return (
    <>
      <div className="Manage">
        <p onClick={updateChampData}>
          <i className="fas fa-download"></i>
        </p>
      </div>
    </>
  );
};

export default Manage;
