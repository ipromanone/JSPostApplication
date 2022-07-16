import { HeaderComponent } from './components/header.component'
import { NavigationComponent } from './components/navigation.component'
import { CreateComponenet } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'
import { PostComponenet } from './components/posts.component'


new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const posts = new PostComponenet('posts')
const create = new CreateComponenet('create')
const favorite = new FavoriteComponent('favorite')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])
