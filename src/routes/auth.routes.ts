import express from 'express'
import {
  deleteUsersHandler,
  forgotPasswordHandler,
  loginUserHandler,
  logoutUserHandler,
  refreshAccessTokenHandler,
  registerUserHandler,
  resetPasswordHandler,
  verifyEmailHandler,
} from '../controllers/auth.controller'
import { deserializeUser } from '../middleware/deserializeUser'
import { requireUser } from '../middleware/requireUser'
import { validate } from '../middleware/validate'
import { forgotPasswordSchema, loginUserSchema, registerUserSchema, resetPasswordSchema, verifyEmailSchema } from '../schemas/user.schema'

const router = express.Router()

router.post('/register', validate(registerUserSchema), registerUserHandler)
router.post('/login', validate(loginUserSchema), loginUserHandler)
router.post('/delete', deserializeUser, requireUser, logoutUserHandler, deleteUsersHandler)
router.get('/refresh', refreshAccessTokenHandler)
router.get('/verifyemail/:verificationCode', validate(verifyEmailSchema), verifyEmailHandler)
router.get('/logout', deserializeUser, requireUser, logoutUserHandler)
router.post('/forgotpassword', validate(forgotPasswordSchema), forgotPasswordHandler)
router.patch('/resetpassword/:resetToken', validate(resetPasswordSchema), resetPasswordHandler)

export default router
