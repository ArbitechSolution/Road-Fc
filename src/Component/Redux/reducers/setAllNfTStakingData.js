import { NFT_STAKING_DATA_SECTION } from "../type/types";
let initialState = {
  myNftStakingVariables: {
    aa: 0,
    be: 0,
  },
};
export const setAllNftStakingData = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case NFT_STAKING_DATA_SECTION:
      return {
        ...state,
        myNftStakingVariables: payload,
      };
    default:
      return { ...state };
  }
};
