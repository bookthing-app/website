import { captureException } from "@sentry/nextjs";

import { useRouter } from "next/navigation";

import { event } from "@/lib/pixel";
import { trpc } from "@/utils/trpc/client";

export const useSignup = () => {
  const router = useRouter();

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
