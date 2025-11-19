import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x4cF74b0B96EcFAA57A0f1b9BAbc97501CAc717bE";
const rewardTokenContractAddress = "0xafe1b71ecab62f31ca6e30fca8c21c9d3e997e90";
const stakingContractAddress = "0xC816b7F2d836057227F3B1eB09aa8E189d71eFe5";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});