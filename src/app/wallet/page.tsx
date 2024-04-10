import dynamic from "next/dynamic";

const Wallet = dynamic(
  () => import("@/components/ui/wallet").then((m) => m.default),
  { ssr: false }
);

export default function WalletConnectionPage() {
  return (
    <main className="w-full min-h-[100svh] flex flex-col gap-8 px-container-horizontal-sm py-container-vertical-sm lg:px-container-horizontal-lg lg:py-container-vertical-lg z-0">
      <Wallet />
    </main>
  );
}
