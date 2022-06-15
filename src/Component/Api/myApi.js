import Web3 from "web3";
let isItConnected = false;
// const networks = {
//   Mumbai: {
//     chainId: `0x${Number(43113).toString(16)}`,
//     chainName: "Matic",
//     nativeCurrency: {
//       name: "Matic",
//       //   symbol: "MATIC",
//       decimals: 18,
//     },
//     rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
//     blockExplorerUrls: ["https://mumbai.polygonscan.com"],
//   },
// };
// const changeNetwork = async ({ networkName }) => {
//   try {
//     if (!window.ethereum) throw new Error("No crypto wallet found");
//     await window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [
//         {
//           ...networks[networkName],
//         },
//       ],
//     });
//   } catch (err) {
//     console.log("not found");
//   }
// };
// const handleNetworkSwitch = async (networkName) => {
//   await changeNetwork({ networkName });
// };
let accounts;
const getAccounts = async () => {
  const web3 = window.web3;
  try {
    accounts = await web3.eth.getAccounts();
    return accounts;
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};
const disconnectWallet = async () => {
  await window.ethereum.request({
    method: "eth_requestAccounts",
    params: [{ eth_accounts: {} }],
  });
  console.log("disconnect");
};
export const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      await window.web3.eth.getChainId((err, netId) => {
        console.log("networkId Polygon==>", netId);
        switch (netId.toString()) {
          case "43113":
            isItConnected = true;
            break;
          default:
            // handleNetworkSwitch("Mumbai");
            isItConnected = false;
        }
      });
      if (isItConnected == true) {
        let accounts = await getAccounts();
        return accounts[0];
      } else {
        let res = "Wrong Network";
        return res;
      }
    } else {
      let res = "No Wallet";
      return res;
    }
  } catch (error) {
    let res = "No Wallet";
    return res;
  }
};
