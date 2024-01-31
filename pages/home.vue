
<script setup>

    const { logout } = useFirebaseAuth()

    const axios = useNuxtApp().$axios
    const videos = ref([ ])

    onMounted(async () => {
      //   const { data } = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
      // params: {
      //   part: 'snippet',
      //   type: 'video',
      //   key: 'AIzaSyDOEpl-lbahEuTn4WA4PFAG9WAsmP82lq0',
      //   maxResults: 40 
      // }
    });
        // console.log(data.items)
        videos.value = [
    {
      kind: 'youtube#searchResult',
      etag: 'sTdM7F8WeNqtmqApZOXs9bKCYlc',
      id: { kind: 'youtube#video', videoId: 'ibRnNj0t1-o' },
      snippet: {
        publishedAt: '2020-05-28T23:30:11Z',
        channelId: 'UCkUnbNviJtOMu-9Jgfr1P_w',
        title: 
          'Ke Personajes &quot;Adiós Amor &amp; Oye Mujer&quot; Videoclip Oficial',
        description: 
          'Escucha en Spotify : https://open.spotify.com/album/0BfSiRWo0RiAGhKowhcrxn?si=NGakMnyBSy2FgXoURW44-A&dl_branch=1 ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ibRnNj0t1-o/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ibRnNj0t1-o/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/ibRnNj0t1-o/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Ke Personajes',
        liveBroadcastContent: 'none',
        publishTime: '2020-05-28T23:30:11Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'CQbi-77xYYWXtBnmsFhXbRL_GM4',
      id: { kind: 'youtube#video', videoId: '9-QIE-xaueo' },
      snippet: {
        publishedAt: '2018-06-21T17:24:21Z',
        channelId: 'UCpcTrCXblq78GZrTUTLWeBw',
        title: 'France v Peru | 2018 FIFA World Cup | Match Highlights',
        description: 
          'Watch or stream for FREE the biggest World Cup archive of all time on FIFA+ https://app.fifa.com/RX34/d187cd5d France ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/9-QIE-xaueo/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/9-QIE-xaueo/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/9-QIE-xaueo/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'FIFA',
        liveBroadcastContent: 'none',
        publishTime: '2018-06-21T17:24:21Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'TKbyzPhVNjgupKmGyTVvKKNFs40',
      id: { kind: 'youtube#video', videoId: 'k83VMCZnOro' },
      snippet: {
        publishedAt: '2022-05-29T00:00:12Z',
        channelId: 'UCWH8lhBX5gcbNCKYsbBbn9A',
        title: 'WARMISITAY - Milena Warthon (Video Oficial)',
        description: 
          'Milena Warthon presenta el videoclip de su sencillo titulado “WARMISITAY” MILENA WARTHON, Ganó la Gaviota de Plata en ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/k83VMCZnOro/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/k83VMCZnOro/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/k83VMCZnOro/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Milena Warthon',
        liveBroadcastContent: 'none',
        publishTime: '2022-05-29T00:00:12Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'emHgrz8Jn2W6cvhrmUbsZy_80aM',
      id: { kind: 'youtube#video', videoId: 'ptsjqRbfM8E' },
      snippet: {
        publishedAt: '2022-02-04T23:15:26Z',
        channelId: 'UCXEKk0NM6V7KWGluR5l-Tbg',
        title: 'Bailando - El Jordan 23 / Standly (Prod.BigCvyu) (OfficialVideo)',
        description: 
          'Titulo : Bailando Artista : El jordán 23 - Standly Productor : Big Cvyu Director : Films Mauri Prod General: Markitoksaen.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ptsjqRbfM8E/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ptsjqRbfM8E/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/ptsjqRbfM8E/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'El Jordan 23',
        liveBroadcastContent: 'none',
        publishTime: '2022-02-04T23:15:26Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'ZK2T2ONPyUh2Jc-YHvyKb_jkdUE',
      id: { kind: 'youtube#video', videoId: '4jK2vjqcO5o' },
      snippet: {
        publishedAt: '2022-03-09T22:06:27Z',
        channelId: 'UCFmMw7yTuLTCuMhpZD5dVsg',
        title: 
          '¡BENZEMA BRILLÓ Y EL MERENGUE BORRÓ AL PSG DE MESSI DE LA CHAMPIONS! | Real Madrid 3-1 PSG | RESUMEN',
        description: 
          'Disfruta la Champions League por #ESPNenStarPlus ingresando a este link: http://dis.la/ESPNenStarPlus_YT UEFA Champions ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/4jK2vjqcO5o/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/4jK2vjqcO5o/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/4jK2vjqcO5o/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'ESPN Fans',
        liveBroadcastContent: 'none',
        publishTime: '2022-03-09T22:06:27Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'C43tQCYkeNEMLUDaSmZuiHYrlLM',
      id: { kind: 'youtube#video', videoId: 'rYA8SbqRwt8' },
      snippet: {
        publishedAt: '2015-09-08T15:00:01Z',
        channelId: 'UCijcd0GR0fkxCAZwkiuWqtQ',
        title: 'Most Dangerous Ways To School | PERU | Free Documentary',
        description: 
          'It is early in the morning as Vidal gets himself ready. But before Vidal can brace himself for his dangerous way to school he must ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/rYA8SbqRwt8/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/rYA8SbqRwt8/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/rYA8SbqRwt8/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Free Documentary',
        liveBroadcastContent: 'none',
        publishTime: '2015-09-08T15:00:01Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'DVynsNATL1pazEfZuYHxtlLU49Q',
      id: { kind: 'youtube#video', videoId: 'WtE011iVx1Q' },
      snippet: {
        publishedAt: '2018-03-30T04:00:02Z',
        channelId: 'UC3Df9-SvQY9BbfCmyvR0J5A',
        title: 'Por Perro ft. Luis Figueroa, Lary Over (Official Video)',
        description: 
          'Sebastián Yatra – Por Perro ft. Luis Figueroa, Lary Over (Official Video) Pre-save “Dharma” here: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/WtE011iVx1Q/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/WtE011iVx1Q/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/WtE011iVx1Q/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'SebastianYatraVEVO',
        liveBroadcastContent: 'none',
        publishTime: '2018-03-30T04:00:02Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'l-XzqPDleh1Gh_WHCIzUBdo02qI',
      id: { kind: 'youtube#video', videoId: 'g34lDUxodZo' },
      snippet: {
        publishedAt: '2021-11-15T01:00:06Z',
        channelId: 'UC9MAhZQQd9egwWCxrwSIsJQ',
        title: 
          'In Search of Aliens: Nazca&#39;s Ancient Geoglyphs (S1, E9) | Full Episode',
        description: 
          'Nazca remains one of the most mysterious sites on Earth. The vast desert floor is covered with hundreds of ancient geoglyphs ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/g34lDUxodZo/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/g34lDUxodZo/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/g34lDUxodZo/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'HISTORY',
        liveBroadcastContent: 'none',
        publishTime: '2021-11-15T01:00:06Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'PAEteICwR-Hd2TlanOxW-SR4Jdk',
      id: { kind: 'youtube#video', videoId: 'nMzfL5SoOoQ' },
      snippet: {
        publishedAt: '2021-09-11T16:15:37Z',
        channelId: 'UCFmMw7yTuLTCuMhpZD5dVsg',
        title: 
          '¡DEBUT MEMORABLE Y DOBLETE DE CRISTIANO EN OLD TRAFFORD! | Manchester United 4-1 Newcastle | RESUMEN',
        description: 
          'Disfruta la Premier League en #StarPlusLA ingresando a este link: http://dis.la/ESPNenStarPlus_YT Premier League 2021/2022 ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/nMzfL5SoOoQ/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/nMzfL5SoOoQ/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/nMzfL5SoOoQ/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'ESPN Fans',
        liveBroadcastContent: 'none',
        publishTime: '2021-09-11T16:15:37Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'x8miS5-msG0oBk7FBRz2DrwOyYY',
      id: { kind: 'youtube#video', videoId: 'mrn4QCoiDY4' },
      snippet: {
        publishedAt: '2022-08-05T21:12:15Z',
        channelId: 'UCFmMw7yTuLTCuMhpZD5dVsg',
        title: 
          '¡LOS GUNNERS COMENZARON LA PREMIER CON UN TRIUNFAZO! | Crystal Palace 0-2 Arsenal | RESUMEN',
        description: 
          'Disfruta la Premier League por #ESPNenStarPlus ingresando a este link: http://dis.la/ESPNenStarPlus_YT Premier League ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/mrn4QCoiDY4/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/mrn4QCoiDY4/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/mrn4QCoiDY4/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'ESPN Fans',
        liveBroadcastContent: 'none',
        publishTime: '2022-08-05T21:12:15Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'PxCXlVjP1TGQ1fyJdYc0iH-V0RI',
      id: { kind: 'youtube#video', videoId: 'u9nYCHkphnY' },
      snippet: {
        publishedAt: '2018-08-03T04:00:01Z',
        channelId: 'UCe7pJhBkEXypZDXXIWt3MXg',
        title: 'TINI, Sebastián Yatra - Quiero Volver (Official Video)',
        description: 
          'TINISTAS   #QuieroVolver ❤️ http://hollywoodrecs.co/TiniQuieroVolverDL Facebook: http://facebook.com/tinitastoesel ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/u9nYCHkphnY/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/u9nYCHkphnY/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/u9nYCHkphnY/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'TiniVEVO',
        liveBroadcastContent: 'none',
        publishTime: '2018-08-03T04:00:01Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '8XbQReowxhFyhSBDf83uqzMLRuA',
      id: { kind: 'youtube#video', videoId: 'XP4eu0ya8JM' },
      snippet: {
        publishedAt: '2022-03-09T17:00:21Z',
        channelId: 'UCy0ABJHll1FCTpzolHW_Xow',
        title: 
          'The BEST Of Peru&#39;s Sacred Valley | Part Two | Gordon Ramsay: Uncharted',
        description: 
          'Part two of the best moments from Peru\'s Sacred Valley episode of Gordon Ramsay\'s Uncharted. Follow chef Gordon Ramsay as ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/XP4eu0ya8JM/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/XP4eu0ya8JM/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/XP4eu0ya8JM/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Gordon Ramsay: Uncharted',
        liveBroadcastContent: 'none',
        publishTime: '2022-03-09T17:00:21Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'EAxyYh4g99MqOSeYywd3gPS2X5Y',
      id: { kind: 'youtube#video', videoId: 'UVyi3teKV2w' },
      snippet: {
        publishedAt: '2022-06-12T14:18:12Z',
        channelId: 'UCFgdHGyl4cojPReGqAoSrGQ',
        title: 
          'Frame 16 ‒ Proud of Himself | Ronnie O&#39;Sullivan vs John Higgins | 2022 World Snooker Championship SF',
        description: 
          'Enjoy the most spectacular frame (and shot) of the 2022 World Snooker Championship, where The Rocket and the Wizard of ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/UVyi3teKV2w/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/UVyi3teKV2w/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/UVyi3teKV2w/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Cesar Muroya',
        liveBroadcastContent: 'none',
        publishTime: '2022-06-12T14:18:12Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'L3B76Yg0Tuf4v-SyNcBSJjdovmY',
      id: { kind: 'youtube#video', videoId: '6sh85SixARQ' },
      snippet: {
        publishedAt: '2022-07-18T11:30:03Z',
        channelId: 'UCFgdHGyl4cojPReGqAoSrGQ',
        title: 'All Players Fear This Ronnie O&#39;Sullivan | Top 7 Moments',
        description: 
          'Best seven counterattacks by Ronnie O\'Sullivan in the 2021/2022 snooker season. Enjoy them! The statistics shown in the video ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/6sh85SixARQ/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/6sh85SixARQ/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/6sh85SixARQ/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Cesar Muroya',
        liveBroadcastContent: 'none',
        publishTime: '2022-07-18T11:30:03Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'dbzaMmzBqS5yRV_l-kbXUgwJ2Q4',
      id: { kind: 'youtube#video', videoId: 'DwKjPwkreEM' },
      snippet: {
        publishedAt: '2018-10-12T05:00:00Z',
        channelId: 'UC-znDds1f3RWJM3S2VKcI-w',
        title: 'Mike Bahía - Serenata (Video Oficial)',
        description: 
          'Video oficial de "Serenata" interpretado por Mike Bahía. ©2019 Warner Music México. Suscríbete ahora al canal de YouTube de ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/DwKjPwkreEM/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/DwKjPwkreEM/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/DwKjPwkreEM/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Mike Bahia',
        liveBroadcastContent: 'none',
        publishTime: '2018-10-12T05:00:00Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'DUKa2ftyeSz3-aEgd_qL9m-Cv2s',
      id: { kind: 'youtube#video', videoId: 'lmiJN5dVUJc' },
      snippet: {
        publishedAt: '2022-03-07T18:00:17Z',
        channelId: 'UCy0ABJHll1FCTpzolHW_Xow',
        title: 
          'The BEST Of Peru&#39;s Sacred Valley | Part One | Gordon Ramsay: Uncharted',
        description: 
          'Take a look back at some of the best moments from Gordon Ramsay\'s journey in Peru. Follow chef Gordon Ramsay as he ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/lmiJN5dVUJc/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/lmiJN5dVUJc/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/lmiJN5dVUJc/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Gordon Ramsay: Uncharted',
        liveBroadcastContent: 'none',
        publishTime: '2022-03-07T18:00:17Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'tSv9iMs6G7uc0g2J1Q9I9co9g0I',
      id: { kind: 'youtube#video', videoId: 'rluNqn9_v44' },
      snippet: {
        publishedAt: '2021-06-07T14:47:23Z',
        channelId: 'UCyLbObwJPbv5ZfAWAZDdGlQ',
        title: 
          'MIT xPRO Learner Experiences: Kara N. on Additive Manufacturing for Innovative Design &amp; Production',
        description: 
          'Kara Novotny, Owner at 3D Metal Konsulting LLC, discusses what drew her to MIT xPRO\'s online course Additive Manufacturing ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/rluNqn9_v44/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/rluNqn9_v44/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/rluNqn9_v44/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'MIT xPRO',
        liveBroadcastContent: 'none',
        publishTime: '2021-06-07T14:47:23Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'Q4U_VTs1IoYGXrh4Pp01j35aN_4',
      id: { kind: 'youtube#video', videoId: '1cfPiofNy-U' },
      snippet: {
        publishedAt: '2022-05-07T17:01:03Z',
        channelId: 'UC0pQ5Y01l36_HImxEE1YB3A',
        title: 
          'Unreal Engine 5 Environment Tutorial for Beginners - Creating an Island',
        description: 
          'Learn to create a game in Unreal Engine 5: https://www.unfgames.com/action-game Learn to create Materials from scratch in UE5: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/1cfPiofNy-U/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/1cfPiofNy-U/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/1cfPiofNy-U/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'UNF Games',
        liveBroadcastContent: 'none',
        publishTime: '2022-05-07T17:01:03Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'lHPJxl9eb2TfCs24IkG76bNSCRI',
      id: { kind: 'youtube#video', videoId: 'XjAsXFHv3r8' },
      snippet: {
        publishedAt: '2022-04-06T07:26:03Z',
        channelId: 'UCFgdHGyl4cojPReGqAoSrGQ',
        title: 
          'Clash of Titans―final frames | Ronnie O&#39;Sullivan vs Mark Williams | 2022 Tour Championship',
        description: 
          'Enjoy possibly the best snooker match of the season so far (from frame 13 to the end). Stephen Hendry: "Highest standard of ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/XjAsXFHv3r8/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/XjAsXFHv3r8/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/XjAsXFHv3r8/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Cesar Muroya',
        liveBroadcastContent: 'none',
        publishTime: '2022-04-06T07:26:03Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'seaj7IH9Gv_oOGYztqIJKOAUWZY',
      id: { kind: 'youtube#video', videoId: 'Poch59woZtA' },
      snippet: {
        publishedAt: '2021-08-19T09:15:01Z',
        channelId: 'UCFgdHGyl4cojPReGqAoSrGQ',
        title: 
          '&quot;The most intense match&quot; | Mark Allen vs Reanne Evans | 2021 British Open',
        description: 
          'Stephen Hendry: "Both players have shown tremendous character in the most intense match probably I\'ve ever witnessed." 35:11 ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Poch59woZtA/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Poch59woZtA/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/Poch59woZtA/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Cesar Muroya',
        liveBroadcastContent: 'none',
        publishTime: '2021-08-19T09:15:01Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'Gbmkr6ypvC3Eutdt-Efg0DaYtoI',
      id: { kind: 'youtube#video', videoId: 'qbVahZgpmeU' },
      snippet: {
        publishedAt: '2022-04-19T07:08:21Z',
        channelId: 'UCFgdHGyl4cojPReGqAoSrGQ',
        title: 
          'The Rocket in Unpredictable Mode―final frames | Ronnie O&#39;Sullivan vs Mark Selby | 2020 WSC SF',
        description: 
          'Enjoy one of the most captivating semi-finals for snooker fans in which arch-rivals O\'Sullivan and Selby face off. Ronnie O\'Sullivan ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/qbVahZgpmeU/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/qbVahZgpmeU/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/qbVahZgpmeU/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Cesar Muroya',
        liveBroadcastContent: 'none',
        publishTime: '2022-04-19T07:08:21Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'Kbr1ZrWVIAZ6Hm0_Lw_-bmmYOgw',
      id: { kind: 'youtube#video', videoId: '35bidOr1iWI' },
      snippet: {
        publishedAt: '2020-05-19T18:30:00Z',
        channelId: 'UCjvGPQTRr2eIEhthL5y31VQ',
        title: 'Oreo Surprise | Cooking With Lynja Ep.9',
        description: 
          'Today Lynja shows us the ins and outs of her favorite oreo pudding recipe, Oreo Surprise! #Oreo #Oreos.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/35bidOr1iWI/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/35bidOr1iWI/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/35bidOr1iWI/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Cooking With Lynja',
        liveBroadcastContent: 'none',
        publishTime: '2020-05-19T18:30:00Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '8Hi8YVwgeKHki36M_mMhd7xblAI',
      id: { kind: 'youtube#video', videoId: 'V54kqpy1Q-Q' },
      snippet: {
        publishedAt: '2022-01-28T16:00:11Z',
        channelId: 'UC0pQ5Y01l36_HImxEE1YB3A',
        title: 
          'Unreal Engine 5 Landscape Beginner Tutorial - Learn to create Open Worlds (Free Material available)',
        description: 
          'Learn to create a game in Unreal Engine 5: https://www.unfgames.com/action-game Learn to create Environments in Unreal here: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/V54kqpy1Q-Q/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/V54kqpy1Q-Q/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/V54kqpy1Q-Q/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'UNF Games',
        liveBroadcastContent: 'none',
        publishTime: '2022-01-28T16:00:11Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'tkTAnPZ-6nI033VwY4VQs3lPhdM',
      id: { kind: 'youtube#video', videoId: 'iadZ3YwbwB4' },
      snippet: {
        publishedAt: '2022-07-15T01:10:12Z',
        channelId: 'UCj1A0UdoDY7jpc85MoCidaQ',
        title: 'Wondershare UniConverter - Your Complete Video Toolbox',
        description: 
          'AI Enhanced UniConverter V15.5: https://bit.ly/3vsSwOw Update to UniConverter 15 now: https://bit.ly/3LaGk9Z Subscribe to our ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/iadZ3YwbwB4/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/iadZ3YwbwB4/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/iadZ3YwbwB4/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Wondershare UniConverter Video Toolbox',
        liveBroadcastContent: 'none',
        publishTime: '2022-07-15T01:10:12Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'MIEHQMvZv2PQ4dLb5Dxhzl26UTg',
      id: { kind: 'youtube#video', videoId: 'UMwn-baYNJM' },
      snippet: {
        publishedAt: '2020-10-21T11:00:10Z',
        channelId: 'UCFgdHGyl4cojPReGqAoSrGQ',
        title: 
          'Battle of the Sexes | Reanne Evans vs Shaun Murphy | 2019 Champion of Champions - Last 16',
        description: 
          'A fantastic comeback from Reanne Evans, showing great technique and a firm temper at crucial moments of the match, making ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/UMwn-baYNJM/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/UMwn-baYNJM/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/UMwn-baYNJM/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Cesar Muroya',
        liveBroadcastContent: 'none',
        publishTime: '2020-10-21T11:00:10Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'Uzs8wPSjQvfEoV5GcMjPt9dT1Pg',
      id: { kind: 'youtube#video', videoId: 'Xw8LKYAJbnk' },
      snippet: {
        publishedAt: '2022-05-05T04:10:01Z',
        channelId: 'UCFmMw7yTuLTCuMhpZD5dVsg',
        title: 
          '¡EL CELESTE IGUALÓ CON CRUZADOS Y QUEDÓ COMPLICADO! | Sporting Cristal 1-1 U. Católica | RESUMEN',
        description: 
          'Disfruta la CONMEBOL Libertadores por #ESPNenStarPlus ingresando a este link: http://dis.la/ESPNenStarPlus_YT CONMEBOL ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Xw8LKYAJbnk/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Xw8LKYAJbnk/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/Xw8LKYAJbnk/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'ESPN Fans',
        liveBroadcastContent: 'none',
        publishTime: '2022-05-05T04:10:01Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'L8s3SixbvlO7KenaFeBRFXSxbLA',
      id: { kind: 'youtube#video', videoId: 'bBbKePvN94M' },
      snippet: {
        publishedAt: '2020-05-20T20:20:52Z',
        channelId: 'UCS2qj9HWadVLPSOh1y5yJcg',
        title: 'PrePass Versus Other Weigh Station Bypass Services',
        description: 
          'Mary and Hank are professional truck drivers who drive through weigh stations and ports of entry. Mary uses PrePass while Hank ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/bBbKePvN94M/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/bBbKePvN94M/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/bBbKePvN94M/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'PrePass Marketing',
        liveBroadcastContent: 'none',
        publishTime: '2020-05-20T20:20:52Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'DGhWTc0yz_pYvPnzXBJYcRScRQM',
      id: { kind: 'youtube#video', videoId: 'QVw6Asiiyew' },
      snippet: {
        publishedAt: '2022-07-14T11:30:06Z',
        channelId: 'UCeY0bbntWzzVIaj2z3QigXg',
        title: 
          'A Group of Los Angeles Renters Fight Back After Being Priced Out Of Their Homes',
        description: 
          'Costs of living have been surging across the U.S. with rent being up as much as 15% to 50%. NBC News\' George Solis has more ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/QVw6Asiiyew/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/QVw6Asiiyew/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/QVw6Asiiyew/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'NBC News',
        liveBroadcastContent: 'none',
        publishTime: '2022-07-14T11:30:06Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'wVuOTKlAcAalkDPbEQZzLHfyorY',
      id: { kind: 'youtube#video', videoId: 'K97kglKj5pU' },
      snippet: {
        publishedAt: '2020-07-14T11:00:10Z',
        channelId: 'UC4rlAVgAK0SGk-yTfe48Qpw',
        title: 'To Wake Up Easier, Clench Your Fists And Say “Yeah&quot;',
        description: 
          'It\'s morning. The alarm rings. You wake up feeling tired and push the snooze button. Ten minutes later, it rings again. You\'re ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/K97kglKj5pU/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/K97kglKj5pU/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/K97kglKj5pU/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'BRIGHT SIDE',
        liveBroadcastContent: 'none',
        publishTime: '2020-07-14T11:00:10Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'fRKtfTF3LKlmFNeiVm0Yb6gU9Gk',
      id: { kind: 'youtube#video', videoId: 'FJIAzuSaasE' },
      snippet: {
        publishedAt: '2020-03-10T03:00:00Z',
        channelId: 'UC4rlAVgAK0SGk-yTfe48Qpw',
        title: '8-Minute Home Workout to Get Rid of Hip Dips',
        description: 
          'How to get rid of hip dips? Toned hips and thighs are a key part of a perfect fit that\'s why so many people try to burn hip fat. In this ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/FJIAzuSaasE/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/FJIAzuSaasE/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/FJIAzuSaasE/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'BRIGHT SIDE',
        liveBroadcastContent: 'none',
        publishTime: '2020-03-10T03:00:00Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'kXPv02NoMOTDgnGf6gIfUptHbyw',
      id: { kind: 'youtube#video', videoId: 'zKPffi58OXY' },
      snippet: {
        publishedAt: '2021-08-03T22:47:52Z',
        channelId: 'UCiWLfSweyRNmLpgEHekhoAg',
        title: 
          'Woj reacts to Steph Curry’s extension, Melo signing with Lakers | SportsCenter',
        description: 
          'Adrian Wojnarowski joins SportsCenter to discuss the latest developments in NBA free agency. 0:00 Stephen Curry agreeing to a ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/zKPffi58OXY/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/zKPffi58OXY/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/zKPffi58OXY/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'ESPN',
        liveBroadcastContent: 'none',
        publishTime: '2021-08-03T22:47:52Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'hVZKMaisaPl04MxEToI808OiFow',
      id: { kind: 'youtube#video', videoId: 'BMadvm4wioc' },
      snippet: {
        publishedAt: '2021-05-01T15:00:08Z',
        channelId: 'UCSWZxpzUTkriCZRe0Nl0UqA',
        title: '12 Coolest Gadgets That Are Worth Seeing',
        description: 'Coolest gadgets you can actually buy ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/BMadvm4wioc/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/BMadvm4wioc/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/BMadvm4wioc/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'YouFact Tech',
        liveBroadcastContent: 'none',
        publishTime: '2021-05-01T15:00:08Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'a3hqdTCfPX6AweMLFBrWJr9WV6E',
      id: { kind: 'youtube#video', videoId: 'mMmFMVH6FTY' },
      snippet: {
        publishedAt: '2019-03-30T11:00:04Z',
        channelId: 'UC4rlAVgAK0SGk-yTfe48Qpw',
        title: 'How Much Can a Mosquito Drink?',
        description: 
          'No one likes to wake up to their squeaking or find nasty scratches as souvenirs the next morning. But it\'s not just the itching that ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/mMmFMVH6FTY/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/mMmFMVH6FTY/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/mMmFMVH6FTY/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'BRIGHT SIDE',
        liveBroadcastContent: 'none',
        publishTime: '2019-03-30T11:00:04Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '5pwtth9Yy1U_ZyBJzRPKjp5FY0Q',
      id: { kind: 'youtube#video', videoId: 'trGWdJGJV6A' },
      snippet: {
        publishedAt: '2022-06-16T13:43:17Z',
        channelId: 'UCknLrEdhRCp1aegoMqRaCZg',
        title: 
          'Turkey’s double-dealing: Is Erdogan trying to blackmail the West? | To the Point',
        description: 
          'Russia\'s grinding onslaught in eastern Ukraine is taking a bloody toll, Ukraine\'s President says it will go down in history as one of ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/trGWdJGJV6A/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/trGWdJGJV6A/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/trGWdJGJV6A/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'DW News',
        liveBroadcastContent: 'none',
        publishTime: '2022-06-16T13:43:17Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'wrC7Mt8zwO9T7Z40OkrujFh8fDE',
      id: { kind: 'youtube#video', videoId: 'JLZ1ncPei9Y' },
      snippet: {
        publishedAt: '2022-04-29T14:00:15Z',
        channelId: 'UCknLrEdhRCp1aegoMqRaCZg',
        title: 'How Germany aims for independence from Russian energy | DW News',
        description: 
          'When Russia threatened to turn off the gas taps if Europe didn\'t start paying for its energy in rubles, the continent held its breath.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/JLZ1ncPei9Y/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/JLZ1ncPei9Y/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/JLZ1ncPei9Y/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'DW News',
        liveBroadcastContent: 'none',
        publishTime: '2022-04-29T14:00:15Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'QcgpsyrWVCsf3SGBx0EHZAZv1A4',
      id: { kind: 'youtube#video', videoId: 'u5b-RKw8DIQ' },
      snippet: {
        publishedAt: '2022-01-03T18:17:32Z',
        channelId: 'UCeY0bbntWzzVIaj2z3QigXg',
        title: 'New York Attorney General Subpoenas Donald Trump Jr., Ivanka Trump',
        description: 
          'New York Attorney General Letitia James has issued civil subpoenas for former President Donald Trump\'s children, Donald Trump ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/u5b-RKw8DIQ/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/u5b-RKw8DIQ/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/u5b-RKw8DIQ/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'NBC News',
        liveBroadcastContent: 'none',
        publishTime: '2022-01-03T18:17:32Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'RbiZw3K6oicxQB0bpwAm24Uuo7E',
      id: { kind: 'youtube#video', videoId: '7C2BFK-gqEE' },
      snippet: {
        publishedAt: '2022-05-19T02:39:49Z',
        channelId: 'UCFmMw7yTuLTCuMhpZD5dVsg',
        title: 
          '¡GOLAZO DE CHANCALAY Y TRIUNFAZO DE LA ACADEMIA CON UNO MENOS! | Racing 1-0 Melgar | RESUMEN',
        description: 
          'Disfruta la CONMEBOL Sudamericana por #ESPNenStarPlus ingresando a este link: http://dis.la/ESPNenStarPlus_YT ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/7C2BFK-gqEE/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/7C2BFK-gqEE/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/7C2BFK-gqEE/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'ESPN Fans',
        liveBroadcastContent: 'none',
        publishTime: '2022-05-19T02:39:49Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'V6UzrtZQHGToLC4r-Ep-ecPbqoc',
      id: { kind: 'youtube#video', videoId: 'CDO_l4wX9Qs' },
      snippet: {
        publishedAt: '2020-01-19T17:00:04Z',
        channelId: 'UC4rlAVgAK0SGk-yTfe48Qpw',
        title: 'That&#39;s Why Smartphones Are Rectangular',
        description: 
          'I bet you\'re so used to a smartphone in your hand that you\'ve never even asked yourself a question: why in the world is it ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/CDO_l4wX9Qs/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/CDO_l4wX9Qs/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/CDO_l4wX9Qs/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'BRIGHT SIDE',
        liveBroadcastContent: 'none',
        publishTime: '2020-01-19T17:00:04Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'vb5FKwpSq9dhlJ6nZh9GOgGBft8',
      id: { kind: 'youtube#video', videoId: 'vNEa35MGCQo' },
      snippet: {
        publishedAt: '2022-02-24T10:10:42Z',
        channelId: 'UCknLrEdhRCp1aegoMqRaCZg',
        title: 'Ukraine latest: Russia launches massive invasion | DW Breaking News',
        description: 
          'Russian tanks have entered Ukraine in the Luhansk region as well as from Crimea, which Russia annexed in 2014, Ukraine\'s ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/vNEa35MGCQo/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/vNEa35MGCQo/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/vNEa35MGCQo/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'DW News',
        liveBroadcastContent: 'none',
        publishTime: '2022-02-24T10:10:42Z'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: 'd1XlkamuQrE7HdxGtaZjO0IAS0Y',
      id: { kind: 'youtube#video', videoId: 'g4JPCHhSNhc' },
      snippet: {
        publishedAt: '2022-01-16T19:53:51Z',
        channelId: 'UCFmMw7yTuLTCuMhpZD5dVsg',
        title: 
          '¡LOS REDS GOLEARON Y QUEDARON A 11 DE LA CIMA EN LA PREMIER! | Liverpool 3-0 Brentford | RESUMEN',
        description: 
          'Disfruta la Premier League por #ESPNenStarPlus ingresando a este link: http://dis.la/ESPNenStarPlus_YT Premier League ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/g4JPCHhSNhc/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/g4JPCHhSNhc/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/g4JPCHhSNhc/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'ESPN Fans',
        liveBroadcastContent: 'none',
        publishTime: '2022-01-16T19:53:51Z'
      }
    }
              ]
  
  
    // })


</script>

<template>
  <v-app>
    <Navbar />
    <div class="flex h-screen w-screen bg-miPrimary">
      <div class="w-20">
        <Sidebar2 />
      </div>
      <main class="flex-1  p-2 sm:px-6 lg:px-8">
        <Tags />
        <VideoList :videos="videos" />
      </main>
    </div>
  </v-app>
</template>

<!-- <template>
  <v-app>
    <Navbar />
    <div class="h-screen w-screen px-4 sm:px-6 lg:px-8">
      <Sidebar2 class="bg-purple-400" />
      <main class="bg-green-400">
        <Tags />
        <VideoList :videos="videos" />
      </main>
    </div>
  </v-app>
  </template> -->
