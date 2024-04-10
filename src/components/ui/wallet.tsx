"use client";

import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { useState } from "react";
import Button from "./button";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";

type TExtensionState = {
  data?: {
    accounts: InjectedAccountWithMeta[];
    defaultAccount: InjectedAccountWithMeta;
  };
  loading: boolean;
  error: null | Error;
};

const initialExtensionState: TExtensionState = {
  data: undefined,
  loading: false,
  error: null,
};

export default function Wallet() {
  const [wallet, setWallet] = useState<TExtensionState>(initialExtensionState);

  function connectWallet() {
    setWallet({ ...initialExtensionState, loading: true });

    web3Enable("mhmdrioaf-polkadot-connection")
      .then((injectedExtensions) => {
        if (!injectedExtensions.length) {
          return Promise.reject(new Error("NO_EXTENSION"));
        }

        return web3Accounts();
      })
      .then((accounts) => {
        if (!accounts.length) {
          return Promise.reject(new Error("NO_ACCOUNTS"));
        }

        setWallet({
          error: null,
          loading: false,
          data: {
            accounts: accounts,
            defaultAccount: accounts[0],
          },
        });
      })
      .catch((err) => {
        console.error(
          "[WALLET_CONNECTION_ERROR]: Cannot connect to a wallet: ",
          err
        );
        setWallet({ error: err, loading: false, data: undefined });
      });
  }

  return (
    <section id="wallet-connection" className="w-full flex flex-col gap-8">
      <section
        id="wallet-connection-greetings"
        className="w-full flex flex-col gap-2 items-center justify-center"
      >
        <h3 className="text-2xl font-bold">Welcome to Polkadot!</h3>
        <p className="text-sm">
          To try this polkadot connection, please click the button below.
        </p>
      </section>

      <section id="wallet-connection-button" className="w-full">
        {wallet.error ? (
          <p className="text-red-300 text-sm">
            Cannot connect to a wallet: {wallet.error.message}
          </p>
        ) : wallet.data ? (
          <p className="text-sm text-center">
            Successfully connected to {wallet.data.defaultAccount.address}
          </p>
        ) : (
          <Button onClick={connectWallet} disabled={wallet.loading}>
            {wallet.loading ? <span>Connecting...</span> : <span>Connect</span>}
          </Button>
        )}
      </section>

      {wallet.data && (
        <section
          id="wallet-connection-accounts"
          className="w-full flex flex-col gap-4"
        >
          <h3 className="text-2xl font-bold">Connected Wallet Accounts</h3>
          <section
            id="wallet-connected-accounts-list"
            className="w-full flex flex-col gap-2"
          >
            {wallet.data.accounts.length > 0 &&
              wallet.data.accounts.map((account) => (
                <div
                  className="w-full px-4 py-2 rounded-md grid grid-cols-1 gap-2 bg-surface text-surface-foreground"
                  key={account.address}
                >
                  <b className="text-sm">{account.meta.name ?? ""}</b>
                  <hr className="w-full h-px border-surface-foreground rounded-sm" />
                  <section
                    id="connected-wallet-details"
                    className="inline-flex items-center gap-2"
                  >
                    <p className="text-sm">{account.address}</p>
                    <hr className="w-4 h-px border-surface-foreground rounded-sm" />
                    <p className="text-sm">{account.meta.source}</p>
                  </section>
                </div>
              ))}
          </section>
        </section>
      )}
    </section>
  );
}
