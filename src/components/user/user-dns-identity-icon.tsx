import { useState, useEffect, forwardRef } from "react";
import { IconProps } from "@chakra-ui/react";
import { IdentityStatus } from "applesauce-loaders/helpers/dns-identity";

import useDnsIdentity from "../../hooks/use-dns-identity";
import useUserProfile from "../../hooks/use-user-profile";
import { ErrorIcon, VerificationFailed, VerificationMissing, VerifiedIcon, AidIcon, SpyIcon } from "../icons";

import { useAsync } from "react-use";
import { getLinks, fetchAID } from "./aptos-client.ts"
import * as nip19 from 'nostr-tools/nip19'
function getAidData(metadata){
    return metadata.aid ? useAsync(async () => {return await fetchAID(metadata.aid), [metadata.aid]}) : { loading: false, value: null, error: null };
}

const UserDnsIdentityIcon = forwardRef<SVGSVGElement, { pubkey: string } & IconProps>(({ pubkey, ...props }, ref) => {
  const metadata = useUserProfile(pubkey);
  const [data, setData] = useState("dataState");
  const [linkData, setLinkData] = useState("setLinkData");
  const [aIDStatus, setAIDStatus] = useState("Loading AIDStatus");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("errorState");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example API call to JSONPlaceholder
        console.log("WE FETCHED THE DATA")
        console.log(metadata.aid)
        const response = await fetch(`https://www.aptosnames.com/api/mainnet/v1/address/${metadata.aid}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
        let resolvedLinkData = await getLinks(result.address)
        setLinkData(resolvedLinkData)
        console.log("RESOLVED_LINK_DATA")
        console.log(resolvedLinkData)
        if (nip19.npubEncode(pubkey) == resolvedLinkData[0].url) {
          setAIDStatus("Verified")
          console.log("VERIFIED")
        } else {
          setAIDStatus("Not Verified")
          console.log("NOT VERIFIED")
        }
      } catch (err) {
        console.log("WE GOT ERROR")
        console.log(err)
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [metadata]); // Empty dependency array to run once on mount
  // console.log("metadata")
  // console.log(metadata)
  console.log(data)
  console.log("WE_GOT_HERE")
  if(aIDStatus == "Verified") {
    return <a>🚰</a>
    // console.log("SHOULD BE GREEN")
    // return <AidIcon color="green.500" {...props} ref={ref} />;
  }
  if(aIDStatus == "Not Verified") {
    return <p>🚯</p>
    // return <AidIcon color="purple.500" {...props} ref={ref} />;
  }
  if (metadata == undefined) return null;
  if (!metadata?.nip05) return null;
  // let identity
  // if(metadata.nip05 != undefined) {
  //   identity = useDnsIdentity(metadata?.nip05);
  // }
  const identity = useDnsIdentity(metadata?.nip05);
  switch (identity?.status) {
    case IdentityStatus.Missing:
      return <VerificationMissing color="red.500" {...props} ref={ref} />;
    case IdentityStatus.Error:
      return <ErrorIcon color="yellow.500" {...props} ref={ref} />;
    case IdentityStatus.Found:
      return identity.pubkey === pubkey ? (
        <VerifiedIcon color="purple.500" {...props} ref={ref} />
      ) : (
        <VerificationFailed color="red.500" {...props} ref={ref} />
      );
    default:
      return <VerificationMissing color="blue.500" {...props} ref={ref} />;
  }
});
export default UserDnsIdentityIcon;
