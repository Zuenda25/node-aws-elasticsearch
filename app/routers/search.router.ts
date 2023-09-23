import express, { Router } from 'express';
import * as searchController from '../controllers/search.controller';

const router: Router = express.Router();

router.get('/', searchController.search)

export default router;