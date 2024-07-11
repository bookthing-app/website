import { slug } from "@/trpc/endpoints/slug";
import { signup } from "@/trpc/endpoints/signup";

import { router } from "@/trpc";

export const appRouter = router({
  slug,
  signup,
});

export type AppRouter = typeof appRouter;
