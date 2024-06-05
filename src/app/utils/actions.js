"use server";
import prisma from "@/lib/prisma";

export const createTask = async (formData) => {
  const name = formData.get("name");
  await prisma.user.create({
    data: {
      name,
    },
  });
};