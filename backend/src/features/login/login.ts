import {Context} from "vm";
import {verifyCredentials} from "../../lib/auth/verify-credentials";
import {generateToken} from "./generate-token";

export async function login(ctx: Context, next: () => Promise<void>) {
    try {
        const isKnownUser = await verifyCredentials(ctx.request.body)

        if (isKnownUser) {
            ctx.body = {
                token: generateToken(ctx.request.body)
            }
        } else {
            ctx.status = 401
            ctx.body = {
                error: 'Invalid credentials'
            }
        }
    } catch (e) {
        ctx.status = 401
        ctx.body = {
            error: e.message
        }
    }

    await next()
}