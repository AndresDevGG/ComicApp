import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "Card",
    props: {
        title: String
    },
    setup() {
        let isFront = ref(true);

        const setView = () => isFront.value = !isFront.value;

        return {
            isFront,
            setView
        }
    }    
});
