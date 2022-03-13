import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import TemplateUsers from './pages/users/Template.vue'
import IndexUser from './pages/users/Index.vue'
import ShowUser from './pages/users/Show.vue'
import TemplatePosts from './pages/posts/Template.vue'
import IndexPost from './pages/posts/Index.vue'
import ShowPost from './pages/posts/Show.vue'
import CreatePost from './pages/posts/Create.vue'

const routes = [

    { path: '/', name: 'home', component: Home },

    { path: '/users', name: 'users.template', component: TemplateUsers, children: [
        { path: '', name: 'users.index', component: IndexUser },
        { path: ':id', name: 'users.show', component: ShowUser },
    ] },

    { path: '/posts', name: 'posts.template', component: TemplatePosts, children: [
        { path: '', name: 'posts.index', component: IndexPost },
        { path: ':id', name: 'posts.show', component: ShowPost },
        { path: 'create', name: 'post.create', component: CreatePost },
    ] },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;