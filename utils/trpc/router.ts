import { slug } from "@/utils/trpc/endpoints/slug";

import { router } from "@/utils/trpc";

export const appRouter = router({
  slug,
});

export type AppRouter = typeof appRouter;
