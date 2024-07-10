import { slug } from "@/utils/trpc/endpoints/slug";
import { signup } from "@/utils/trpc/endpoints/signup";

import { router } from "@/utils/trpc";

export const appRouter = router({
  slug,
  signup,
});

export type AppRouter = typeof appRouter;
