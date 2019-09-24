import routeImporter from '../../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./userGroups', false, /.*\.js$/));
const Router = () => import('../../pages/Router.vue');

export default {
    path: 'userGroups/',
    component: Router,
    meta: {
        breadcrumb: 'user groups',
        route: 'administration.userGroups.index',
    },
    children: routes,
};
