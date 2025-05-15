import { AccountAddressInput, parseTypeTag, TypeTagAddress } from "@aptos-labs/ts-sdk";
import { Aptos, AptosConfig, Network as SdkNetwork } from "@aptos-labs/ts-sdk";

export interface ProfileLink {
  id: string;
  title: string;
  url: string;
}
export type LinkTree = {
  __variant__: "SM";
  links: {
    data: {
      key: string;
      value: {
        __variant__: "UnorderedLink";
        url: string;
      };
    }[];
  };
};
export const NETWORK = "mainnet";
export const CONTRACT_ADDRESS = "0x631f344549b798ad70cb5ab1842565b082fdfe488b7c6d56a257220222f6a191";
export const APTOS_API_KEY = ""
export const client = new Aptos(
  new AptosConfig({
    network: SdkNetwork.MAINNET,
    clientConfig: { API_KEY: APTOS_API_KEY },
  }),
);
const linksAbi = {
  typeParameters: [],
  parameters: [new TypeTagAddress()],
  returnTypes: [parseTypeTag(`0x1::simple_map::SimpleMap`)],
};
export async function getLinks(address: AccountAddressInput): Promise<ProfileLink[]> {
  return client
    .view<[LinkTree]>({
      payload: {
        function: `${CONTRACT_ADDRESS}::profile::view_links`,
        functionArguments: [address],
        abi: linksAbi,
      },
    })
    .then(([data]) => {
      return (
        data?.links?.data?.map((link) => {
          const title = !link.key ? link.value.url : link.key;
          return {
            id: title,
            title,
            url: link.value.url,
          };
        }) ?? []
      );
    });
}
export async function fetchAID(username: string) {
  const response = await fetch(`https://www.aptosnames.com/api/mainnet/v1/address/${username}`);
  const result = await response.json();
  console.log("Inside fetchAID")
  console.log(result)
  return result
}