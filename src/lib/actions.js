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
  await prisma.exercise.findMany()
}