import { protectedProcedure, publicProcedure, router } from "@/trpc/trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.id || !user?.email) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
      });
    }

    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });
    if (!dbUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }

    return { success: true };
  }),
  getUserInformation: protectedProcedure.query(async ({ ctx }) => {
    const { userId, user } = ctx;
    return user;
  }),
  getUserFiles: protectedProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;
    return db.file.findMany({
      where: {
        userId: userId,
      },
    });
  }),
  getUserProjects: protectedProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;
    return db.project.findMany({
      where: {
        userId: userId,
      },
      include: {
        Tools: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });
  }),
});

export type AppRouter = typeof appRouter;
