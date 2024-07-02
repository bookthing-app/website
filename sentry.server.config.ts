import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b2324b0c1a9d85cb68f381ddc6dcdc89@o4504095313231872.ingest.us.sentry.io/4506308883972096",
  tracesSampleRate: 1,
  debug: process.env.NODE_ENV === "development",
  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});
