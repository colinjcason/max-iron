import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust the path based on your structure

export async function POST(request) {
  const { exercise, reps, sets, weight, unit } = await request.json();

  try {
    const newExercise = await prisma.exercise.create({
      data: {
        name: exercise,
        reps: parseInt(reps),
        sets: parseInt(sets),
        weight: parseFloat(weight),
        unit,
      },
    });
    return NextResponse.json({ message: 'Exercise added successfully', newExercise });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add exercise' }, { status: 500 });
  }
}