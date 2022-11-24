import { Router } from 'express';
import CashFlowRouter from './CashFlows';
import UsuariosRouter from './Usuarios';

const router  = Router();
var passport = require('passport');
var session = require('express-session');
require('../../authenticate');

router.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'Group 1'
}));

router.use(passport.initialize());
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email']}));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), function (_req,res) {
    //guardar en variable el _req.user
    res.end('Inicio de Sesion Exitoso');
});

//http://localhost:3001/cashflow/*
router.use('/cashflow', CashFlowRouter);
router.use('/usuarios', UsuariosRouter);

export default router;
