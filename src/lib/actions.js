"use server";
import prisma from "@/lib/prisma";

export const createExercise = async (formData) => {
  const name = formData.get("name");
  await prisma.user.create({
    data: {
      name,
    },
  });
};

export const getAllExercises = async () => {
  return await prisma.exercise.findMany()
}

export const upsertUser = async (name, email) => {
  const [firstName, ...lastNameParts] = name.split(" ")
  const lastName = lastNameParts.join(" ")
  console.log("Upserting user with:", {
    firstName,
    lastName,
    email
  })

  const result = await prisma.user.upsert({
    where: { email },
    update: { firstName, lastName },
    create: {
      email,
      firstName,
      lastName,
    }
  })
  console.log("User upserted:", result)
  return result
}