import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Register';
import PilgrimInfo from '@/components/PilgrimInfo';
import PastorInfo from '@/components/PastorInfo';
import SponsorInfo from '@/components/SponsorInfo';

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
            path: '/sponsor',
            name: 'Create a Sponsorship',
            component: SponsorInfo
        },
        {
            path: '/pastor',
            name: 'Approve Sponsorship',
            component: PastorInfo
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
