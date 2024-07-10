import { captureException } from "@sentry/nextjs";

import { useSearchParams, useRouter } from "next/navigation";

import { event } from "@/lib/pixel";
import { trpc } from "@/utils/trpc/client";

export const useSignup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return trpc.signup.useMutation({
    onSuccess: () => {
      event("CompleteRegistration");

      router.push("/signup/success");
    },
    onError: (error: any) => {
      captureException(error);

      event("RegistrationError", {
        error,
      });

      router.push("/signup/error");
    },
  });
};
