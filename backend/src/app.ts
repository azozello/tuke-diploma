import Koa from 'koa';
import {router} from "./router";

export const app = new Koa();


app.use(router.middleware(), router.allowedMethods())
