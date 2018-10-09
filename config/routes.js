import express from 'express'

import { auth, bud, friends, settings, user } from '../source/controllers'

const router = express.Router()

/* Auth Routes */
router.route('/login')
  .post((req, res) => { auth.login(req, res) })

router.route('/logout')
  .post((req, res) => { auth.logout(req, res) })


/* Bud Routes */
router.route('/:userId/bud/statistics')
  .get((req, res) => { bud.getStats(req, res) })

router.route('/:userId/bud/new')
  .post((req, res) => { bud.addNew(req, res) })

router.route('/:userId/bud/:budId/delete')
  .post((req, res) => { bud.deleteOne(req, res) })


/* Friends Routes */
router.route('/:userId/friends')
  .get((req, res) => { friends.getList(req, res) })


/* Settings Routes */
router.route('/:userId/settings')
  .get((req, res) => { settings.getList(req, res) })

router.route('/:userId/settings/update')
  .post((req, res) => { settings.update(req, res) })


/* User Routes */
router.route('/user/:userId')
  .get((req, res) => { user.getInfo(req, res) })

router.route('/user/new')
  .post((req, res) => { user.registerNew(req, res) })

router.route('/user/:userId/update')
  .post((req, res) => { user.updateInfo(req, res) })

export default router
