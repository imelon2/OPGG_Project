import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";

const SaveBar = (props: any) => {
  let titleRef: React.MutableRefObject<any> = React.createRef();
  function SaveBaOnMouseOver() {
    $(".saveDataBar").css("margin-top", "-50px");
  }
  function SaveBarOnMouseOut() {
    $(".saveDataBar").css("margin-top", "50px");
  }

  function save(event: any) {
    event.preventDefault(event);
    let title = titleRef.current.value;
    props.saveDataFn(title);
  }

  return (
    <>
      <div
        className="saveDataBar"
        onMouseOver={SaveBaOnMouseOver}
        onMouseOut={SaveBarOnMouseOut}
      >
        <form onSubmit={save}>
          <input ref={titleRef} type="text" placeholder="GameTitle:none" />
          <button>
            <i className="far fa-save"></i>
          </button>
        </form>
      </div>
    </>
  );
};
export default SaveBar;
