import express, { Router, Request, Response, NextFunction } from 'express';
import { constants } from 'zlib';
export const routerTemplate = express.Router()
import WalletController from '../controller/wallet.controller';

const router = Router();
const walletController = new WalletController();

const middleware: any = (req: Request, res: Response, next: NextFunction) => {
    const authorization: string = req.headers.authorization;
    if(authorization === 'CYNTHIA'){
        next();
    } else {
        res.status(401).json({
            status: 'NOK',
            message: 'User not authorized'
        });
    }
}

router.get('/get/all', middleware, walletController.getWallet);
router.post('/insert', middleware, walletController.insertWallet);
router.post('/update', middleware, walletController.updateWallet);

export default router;