import { farcasterMiniApp } from "@farcaster/miniapp-wagmi-connector";
import { base, mainnet } from "viem/chains";
import { createConfig, http } from "wagmi";

export const supportedChains = [mainnet, base] as const;

export const wagmiConfig = createConfig({
  ssr: true,
  chains: supportedChains,
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
  connectors: [farcasterMiniApp()],
});

/**
 * Gets the chain object for the given chain id.
 * @param chainId - Chain id of the target EVM chain.
 * @returns Viem's chain object.
 */
export function getChainFromChainId(chainId: number) {
  for (const chain of Object.values(supportedChains)) {
    if (chain.id === chainId) {
      return chain;
    }
  }

  return undefined;
}
