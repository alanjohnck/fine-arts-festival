// Replace src/app/api/getPoints.js with this:

import { NextResponse } from 'next/server';
import {getSheetData} from "../../lib/sheet"

export async function GET() {
  try {
    const data = await getSheetData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Google Sheets' },
      { status: 500 }
    );
  }
}