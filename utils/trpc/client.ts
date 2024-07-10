import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@/utils/trpc/router";

export const trpc = createTRPCReact<AppRouter>({});
