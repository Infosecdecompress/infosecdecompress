import * as Sentry from "@sentry/gatsby";

Sentry.init({
  dsn: "https://e813e5e7c9304c2ba68e33f9eb206dca@o1129413.ingest.sentry.io/6196807",
  environment: process.env.NODE_ENV,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
      showBranding: false,
    }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1,
});
