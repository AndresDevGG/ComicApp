import { ComicDTO } from './../models/comic.model';
import axios from 'axios'
import { defineStore } from 'pinia'

interface AppState {
    comic: ComicDTO,
    raiting: number,
    loading: boolean
}

export const useComicStore = defineStore('comic', {
    state:(): AppState => ({
        // @ts-ignore
        comic: null,
        raiting: 0,
        loading: false
    }),    
    actions: {
        async getComic(): Promise<void> {
            this.loading = true;
            await axios.get('http://localhost:3000/comic')
            .then(response => {
                this.comic = response.data;
                this.loading = false;
            })
        },

        saveRaiting(raiting: number): void {
            this.raiting = raiting;
        }
    }
})