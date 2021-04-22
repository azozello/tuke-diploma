import Router from 'koa-router';
import bodyParser from 'koa-body';
import {echoEndpoint} from "./features/echo/echo";
import {login} from "./features/login/login";

export const router = new Router()

router.use(bodyParser())
router.get('/test', echoEndpoint)
router.post('/api/login', login)