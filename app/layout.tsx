import { PosthogProvider } from "@/providers/posthog";

import dynamic from "next/dynamic";

const FacebookPixel = dynamic(
  () => import("@/utils/pixel").then((mod) => mod.FacebookPixel),
  { ssr: false }
);
const PosthogPageView = dynamic(
  () => import("@/utils/page-view").then((mod) => mod.PostHogPageView),
  { ssr: false }
);
const TGSPlayer = dynamic(
  () => import("@/utils/tgs-player").then((mod) => mod.TGSPlayer),
  { ssr: false }
);
const QueryProvider = dynamic(
  () => import("@/providers/query").then((mod) => mod.QueryProvider),
  { ssr: false }
);

import "@/app/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="uk">
    <PosthogProvider>
      <body>
        <QueryProvider>
          {children}
          <PosthogPageView />
          <FacebookPixel />
          <TGSPlayer />
        </QueryProvider>
      </body>
    </PosthogProvider>
  </html>
);

export { metadata } from "@/app/metadata";

export default Layout;
