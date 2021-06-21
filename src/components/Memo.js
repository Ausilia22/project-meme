import React from "react";

import { connect } from "react-redux";
import { likeAction, unlikeAction } from "../actions/IndexAction";

export const Memo = (props) => {
  const { id, src, likes, un_likes, title } = props.memo_data;
  const flag = (likes) => {
    if (props.flag)
      if (likes - un_likes > 5) return props.flag;
      else return false;
    else if (likes - un_likes > 5) return false;
    else return true;
  };

  function like(id) {
    props.likeAction(id);
  }

  function unlike(id) {
    props.unlikeAction(id);
  }

  return flag(likes) ? (
    <div style={{ padding: "20px", border: "1px solid blue", margin: "20px" }}>
      <div className="title">{title}</div>
      <div
        className="imgDiv"
        style={{ background: "url(images/" + src + ") no-repeat center" }}
      ></div>
      <div style={{ display: "flex", marginTop: "15px" }}>
        <div
          className="click-like"
          style={{ flex: 1, textAlign: "center" }}
          onClick={() => like(id)}
        >
          {" "}
          Upvotes: {likes}
        </div>
        <div
          className="click-like"
          style={{ flex: 1, textAlign: "center" }}
          onClick={() => unlike(id)}
        >
          Downvotes: {un_likes}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return {
    memos: state.memos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    likeAction: (id) => dispatch(likeAction(id)),
    unlikeAction: (id) => dispatch(unlikeAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Memo);
