
import { defineStore } from 'pinia';

export interface Item {
  kind:    ItemKind | string;
  etag:    string;
  id:      ID;
  snippet: Snippet;
}

export interface ID {
  kind:    IDKind | string;
  videoId: string;
}

export enum IDKind {
  YoutubeVideo = "youtube#video",
}

export enum ItemKind {
  YoutubeSearchResult = "youtube#searchResult",
}

export interface Snippet {
  publishedAt:          Date | string;
  channelId:            string;
  title:                string;
  description:          string;
  thumbnails:           Thumbnails;
  channelTitle:         string;
  liveBroadcastContent: LiveBroadcastContent | string;
  publishTime:          Date | string;
}

export enum LiveBroadcastContent {
  Live = "live",
  None = "none",
}

export interface Thumbnails {
  default: Default;
  medium:  Default;
  high:    Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

interface VideoState {
    videos?: Item[] |string;
    videoSelected?: Item  | null ;
  }

export const useVideosStore = defineStore('videos', {
  
    state: (): VideoState => ({
      videoSelected: null,
      videos: [], 
    }),
  
    actions: {
      async getVideos() {
        const runtimeConfig = useRuntimeConfig()
        const axios = useNuxtApp().$axios
        const { data } = await axios.get(runtimeConfig.public.baseUrlYoutube, {
          params: {
            part: 'snippet',
            type: 'video',
            key: runtimeConfig.public.claveApiYoutube,
            maxResults: 100
          }
        });
        this.setVideos(data.items);
      },
      async getSearchVideos(search: string) {
        const runtimeConfig = useRuntimeConfig()
        const axios = useNuxtApp().$axios
        const { data } = await axios.get(runtimeConfig.public.baseUrlYoutube, {
          params: {
            part: 'snippet',
            type: 'video',
            q: search,
            key: runtimeConfig.public.claveApiYoutube,
            maxResults: 40 
          }
        });
        this.setVideos(data.items);
      },
      async getSearchVideosByTag(search: string) {
        const runtimeConfig = useRuntimeConfig()
        const axios = useNuxtApp().$axios
        const { data } = await axios.get(runtimeConfig.public.baseUrlYoutube, {
          params: {
            part: 'snippet',
            type: 'video',
            q: search,
            key: runtimeConfig.public.claveApiYoutube,
            maxResults: 40 
          }
        });
        this.setVideos(data.items);
      },
      setVideos(videos: Item[]) {
        this.videos = videos;
      },
      setVideoSelected(videos: Item) {
        this.videoSelected = videos;
      },
    },
  });

