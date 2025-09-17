import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_WELL_GROZTEX!);
    if (!response.ok) {
      return NextResponse.json({ error: 'Ошибка от API' }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Ошибка получения курса' }, { status: 500 });
  }
}
