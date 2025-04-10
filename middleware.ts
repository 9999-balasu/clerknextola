






// middlewar
/*import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
*/




// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

export const middleware = clerkMiddleware((auth, req: NextRequest) => {
  // You can add custom logic here if needed
  return;
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'], // protect all routes except static files and Next.js internals
};



