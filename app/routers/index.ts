import express, { Router } from 'express';

import search from './search.router'

const router: Router = express.Router();

router.use('/search', search)

export default router;