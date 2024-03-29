
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
    videosLoading: boolean
  }

export const useVideosStore = defineStore('videos', {
  
    state: (): VideoState => ({
      videoSelected: null,
      videos: [],
      videosLoading: true,
    }),
  
    actions: {
      // async getVideos() {
      //   try {
      //   this.videosLoading = true
      //   const runtimeConfig = useRuntimeConfig()
      //   const axios = useNuxtApp().$axios
      //     const { data } = await axios.get(runtimeConfig.public.baseUrlYoutube, {
      //       params: {
      //         part: 'snippet',
      //         type: 'video',
      //         key: runtimeConfig.public.claveApiYoutube,
      //         maxResults: 100
      //       }
      //     });
      //     this.setVideos(data.items);
      //     this.videosLoading = false
      //   } catch (error) {
      //     this.videosLoading = false
      //   }
      // },
      async getSearchVideos(search: string = '') {
        try {
          this.videosLoading = true
          const runtimeConfig = useRuntimeConfig()
          const axios = useNuxtApp().$axios
          const { data } = await axios.get(runtimeConfig.public.baseUrlYoutube, {
            params: {
              part: 'snippet',
              type: 'video',
              q: search,
              key: runtimeConfig.public.claveApiYoutube,
              maxResults: 100 
            }
          });
          this.setVideos(data.items);
          this.videosLoading = false
        } catch (error) {
          this.videosLoading = false
        }
      },
      setVideos(videos: Item[]) {
        this.videos = videos;
      },
      setVideoSelected(videos: Item) {
        this.videoSelected = videos;
      },
    },
  });

