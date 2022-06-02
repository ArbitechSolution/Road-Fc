import { REWARD_OF_USER } from "../type/types";

let initialState = {
  userReward: 0,
};

export const setUserReward = (state = initialState, { type, payload }) => {
  try {
    switch (type) {
      case REWARD_OF_USER:
        return {
          ...state,
          userReward: payload,
        };
      default:
        return { ...state };
    }
  } catch (e) {
    console.error("error while set user reward", e);
  }
};
