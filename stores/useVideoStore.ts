
import { defineStore } from 'pinia';

interface VideoState {
    videos?: string;
  }

export const useVideosStore = defineStore('videos', {
    state: (): VideoState => ({
      videos: 'aa'
    }),
  
    actions: {
      setVideos(videos: string) {
        this.videos = videos;
      },
  
      addVideo(video: string) {
        // this.videos.push(video);
      },
  
      clearVideos() {
        // this.videos = [];
      }
    }
  });

