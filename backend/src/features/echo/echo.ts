import {Context} from "vm";
import {socketIO} from "../../index";
import moment from "moment";

export async function echoEndpoint(ctx: Context, next: () => Promise<void>) {
    ctx.body = 'Hello world of ESP!'
    
    const [time] = moment().format('LTS').split(' ')

    socketIO.emit('esp', {
        time,
        value: ctx.request.query?.value
    })

    await next()
}