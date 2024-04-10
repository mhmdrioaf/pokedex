import { NextRequest, NextResponse } from "next/server";

async function handler(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const pokemonID = params.id;
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT! + `/pokemon/${pokemonID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await res.json();

    return NextResponse.json(response);
  } catch (error) {
    console.error("[SERVER ERROR]: Unable to get pokemon detail", error);
    return NextResponse.error();
  }
}

export { handler as GET };
