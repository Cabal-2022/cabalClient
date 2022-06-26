import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers} from "ethers"; 
import {useEffect} from 'react'

const provider = new WalletConnectProvider({
	rpc: {
	  1: "https://mainnet.infura.io/v3/8f36546336664817bc3db0bd4240e3bc",
	},
});


export const connectWalletConnect = async () => {
	
	try {
		await provider.enable();
		const ethersProvider = new providers.Web3Provider(provider);
		console.log({ ethersProvider });
		console.log({ provider });
	}catch (error){
		console.log(error)
	}
	
};
export const connectMetamask = async () => {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const accounts = await provider.send("eth_requestAccounts", []);
		if (accounts.length !== 0) return accounts;
		else return false;
		//ta-da. you now have the accounts, in here you can invoke a function, setState etc
	} catch (error) {
		//do something with the error
		console.log(error);
	}
};
