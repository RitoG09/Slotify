"use server";
import { parseWithZod } from "@conform-to/zod";
import { requireUser } from "./lib/hooks";
import { prisma } from "./lib/prisma";
import { onboardingSchema, onboardingSchemaValidation } from "./lib/zodSchemas";
import { redirect } from "next/navigation";

export async function OnboardingAction(prevState: any, formData: FormData) {
  const session = await requireUser();

  const submission = await parseWithZod(formData, {
    schema: onboardingSchemaValidation({
      async isUsernameUnique() {
        const existingUsername = await prisma.user.findUnique({
          where: {
            username: formData.get("username") as string,
          },
        });
        return !existingUsername;
      },
    }),
    async: true,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      username: submission.value.username,
      name: submission.value.fullname,
    },
  });
  return redirect("/onboarding/grant-id");
}
