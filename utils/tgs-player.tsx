import Script from "next/script";

export const TGSPlayer = () => (
  <Script
    src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/tgs-player.js"
    strategy="afterInteractive"
  />
);
