import Card from './../Card/CardComponent.vue'
import Detail from './../Detail/DetailComponent.vue'
import Img from './../Img/ImgComponent.vue'
import Rating from './../Rating/RatingComponent.vue'
import { defineComponent } from 'vue';
import { useComicStore } from './../../store/comic';

export default defineComponent({
    components: {
        Card,
        Rating,
        Detail,
        Img
    },
    name: "Comic",
    setup() {
        const comicStore = useComicStore();
        comicStore.getComic();
        return { 
            comicStore
        }
    }
});
