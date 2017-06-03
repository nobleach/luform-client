import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Register';
import PilgrimInfo from '@/components/PilgrimInfo';
import PilgrimList from '@/components/PilgrimList';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Pilgrim Info',
            component: PilgrimInfo
        },
        {
            path: '/sponsor/:sponsor_id',
            name: 'Pilgrims you may sponsor',
            component: PilgrimList
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
});
