import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const access_token = formData.get('access_token') as string;
    const refresh_token = formData.get('refresh_token') as string;

    if (!access_token || !refresh_token) {
      return NextResponse.redirect(
        new URL('/login?error=missing_tokens', request.url)
      );
    }

    // Create response with redirect
    const response = NextResponse.redirect(new URL('localhost:3001', request.url));
    response.cookies.set('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60, 
      path: '/',
    });

    response.cookies.set('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, 
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(
      new URL('/login?error=auth_failed', request.url)
    );
  }
}