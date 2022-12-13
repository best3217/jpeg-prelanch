import { useEffect } from "react";
import { useMetamask, useAddress, useDisconnect } from "@thirdweb-dev/react";
import { table } from "../utilities/airtable";

export default function ConnectBtn(props) {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnectWallet = useDisconnect();

  var flag = 0;
  useEffect(() => {
    if(!address && flag === 0) {
        connectWithMetamask()
          flag ++;
    }
  }, [])

  const connectWallet = async () => {
   const res = await connectWithMetamask();
   const account = res.data.account;
   const record = await table.select({
    fields: ["Addresses"],
    filterByFormula: `NOT({Addresses} != '${account}')`
   }).all();

   if (record.length !== 0 ) {
    alert("You have already registered for the waitlist.");
   } else {
    await table.create([
        {
            fields: {
                Addresses: account
            }
        }
    ])
    alert("You have been successfully placed on the waitlist");
   }
  }

  return (
    <>
      {address ? (
        <button className={props.className} onClick={disconnectWallet}>
          Disconnect
        </button>
      ) : (
        <button className={props.className} onClick={connectWallet}>
          {props.children}
        </button>
      )}
    </>
  );
}
