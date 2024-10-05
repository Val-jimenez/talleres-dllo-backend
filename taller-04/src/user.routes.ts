import { Router } from 'express';
import { getUsersByHobby, userExists, getTeamExperience, getUsersByFaction, addUser } from './user.controller';

const router: Router = Router();

router.get('/hobby', getUsersByHobby);
router.get('/exists', userExists);
router.get('/team-experience', getTeamExperience);
router.get('/by-faction', getUsersByFaction);
router.post('/', addUser);

export default router;
