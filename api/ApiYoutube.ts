// import axios from 'axios';

// const API_KEY = 'AIzaSyDOEpl-lbahEuTn4WA4PFAG9WAsmP82lq0'; // Reemplaza con tu clave de API de YouTube

// const youtubeApi = axios.create({
//   baseURL: 'https://youtube.googleapis.com/youtube/v3/search',
//   params: {
//     part: 'snippet',
//     type: 'video',
//     key: API_KEY,
//     maxResults: 5 // Puedes ajustar la cantidad de videos que deseas obtener
//   }
// });

// export async function searchRandomVideos() {
//   try {
//     // Realiza la consulta de búsqueda aleatoria utilizando Math.random()
//     const randomPage = Math.floor(Math.random() * 10) + 1; // Obtén una página aleatoria entre 1 y 10
//     const response = await youtubeApi.get('/search', {
//       params: {
//         // pageToken: randomPage
//       }
//     });

//     // Extrae los videos de la respuesta
//     // const videos = response.data.items.map(item => ({
//     //   title: item.snippet.title,
//     //   videoId: item.id.videoId,
//     //   thumbnail: item.snippet.thumbnails.default.url
//     // }));

//     // return videos;
//     console.log(response)
//   } catch (error) {
//     // console.error('Error al buscar videos en YouTube:', error.message);
//     throw error;
//   }
// }