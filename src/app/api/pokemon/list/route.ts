import { NextResponse, type NextRequest } from "next/server";

async function handler(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = searchParams.get("offset");

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT! +
        `/pokemon?limit=20&offset=${offset ?? 0}`
    );
    const response: IPokemonFetchResult = await res.json();

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching Pokemon list", error);
    return NextResponse.error();
  }
}

export { handler as GET };
