declare global {
  interface Window {
    TelegramLoginWidget: {
      onAuth: (data: any) => void;
    };
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    "tgs-player": any;
  }
}
