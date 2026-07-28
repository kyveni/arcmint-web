import { NextRequest, NextResponse } from "next/server";
import { analyzeToken } from "../../../../lib/analyze-token";

export async function GET(_request: NextRequest, context: { params: Promise<{ address: string }> }) {
  const { address } = await context.params;

  try {
    const result = await analyzeToken(address);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Token analysis failed.",
      },
      { status: 400 },
    );
  }
}
