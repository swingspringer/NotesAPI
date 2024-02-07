import { Router } from 'express'
import { IBaseRouter } from '../../@types';

export abstract class BaseRouter implements IBaseRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    abstract routes(): void;
}
