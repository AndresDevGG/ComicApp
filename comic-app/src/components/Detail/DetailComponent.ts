import { defineComponent } from 'vue';
import { useComicStore } from './../../store/comic';

export default defineComponent({
  name: "Detail",
  setup() {
    const comicStore = useComicStore();

    return {
      comicStore
    }
  }
});
