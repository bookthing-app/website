import axios from "axios";

import { useSearchParams, useRouter } from "next/navigation";

import { event } from "@/lib/pixel";

import type { Schema } from "./schema";

export const useSignup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return {
    mutationFn: ({ data, auth }: { data: Schema; auth: any }) => {
      return axios.post("/api/signup", {
        ...data,
        ...auth,
        meta: {
          ref: searchParams.get("ref"),
        },
      });
    },
    onSuccess: () => {
      event("CompleteRegistration");

      router.push("/signup/success");
    },
    onError: (error: any) => {
      // captureException(error);

      event("RegistrationError", {
        error,
      });

      router.push("/signup/error");
    },
  };
};
