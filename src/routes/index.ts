import { Router, Request, Response } from "express";

import * as PagesController from '../models/pageController';
import * as SearchController from '../models/searchController';


const router = Router()

router.get('/', PagesController.home)
router.get('/dogs', PagesController.dogs)
router.get('/cats', PagesController.cats)
router.get('/fishes', PagesController.fishes)

router.get('/search', SearchController.search)

export default router;

