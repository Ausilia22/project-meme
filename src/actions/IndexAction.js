import * as types from "../actionTypes";

export function likeAction(id) {
  return {
    type: types.LIKE_TYPE,
    id: id,
  };
}
export function unlikeAction(id) {
  return {
    type: types.UN_LIKE_TYPE,
    id: id,
  };
}
