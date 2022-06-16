import { Router } from 'express';
import render from 'express';

const app = new render();
const routes = new Router()

routes.get('/',(req, res) =>{
    res.render('index');
});
export default routes;