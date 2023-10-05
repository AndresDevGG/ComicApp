import { defineComponent } from 'vue';
import { useComicStore } from '../../store/comic';

export default defineComponent({
  name: "Rating",
  data() {
    return {
      ratings: [5,4,3,2,1],
      todos: [
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false
        }
      ]
    }
  },
  setup() {
    const comicStore = useComicStore();
    return { 
        comicStore
    }
  },
  methods: {
    qualifyRating(value: number): void {
      this.comicStore.saveRaiting(value)
    }
  }
});
