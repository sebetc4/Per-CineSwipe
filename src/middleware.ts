import { NextResponse } from "next/server";
import { getLocaleToRedirect } from "./utils";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

export const middleware = (req: NextRequestWithAuth) => {
    const newLocaleUrl = getLocaleToRedirect(req);
    if (newLocaleUrl) {
        return NextResponse.redirect(newLocaleUrl);
    }

    if (/\/[a-z]{2}\/user.*/.test(req.nextUrl.pathname)) {
        return withAuth(req)
    }
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}