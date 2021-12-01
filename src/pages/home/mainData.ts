import artists from '../../assets/home/artists.png';
import news from '../../assets/home/news.png';
import streaming from '../../assets/home/streaming.png';
import bigbro from '../../assets/home/bigbro.png';
import gun from '../../assets/home/gun.jpg';

interface MainCardType {
  index: number;
  artistNo?: number;
  type: 'artist' | 'main';
  url?: string | undefined;
  description?: string;
  title?: string;
  src?: string;
}

interface MainCardTypes extends Array<MainCardType> {}

type simple = MainCardType[];

export const mainData: simple = [
  {
    index: 1,
    type: 'artist',
    title: 'ARTIST OF MONTH',
    url: '/artists',
    description: '박 태 민',
    src: artists
  },
  {
    index: 2,
    type: 'main',
    title: 'NEWS',
    url: '/news',
    src: news
  },
  {
    index: 3,
    type: 'main',
    title: 'STREAMING',
    url: '/streaming',
    src: streaming
  }
];

export const artistData: simple = [
  {
    index: 1,
    artistNo: 1,
    type: 'artist',
    title: 'ARTIST',
    description: 'GUN.AA',
    src: gun
  },
  {
    index: 2,
    artistNo: 3,
    type: 'artist',
    title: 'ARTIST',
    description: 'BIG BRO( 빅 브로)',
    src: bigbro
  },
  {
    index: 3,
    artistNo: 6,
    type: 'artist',
    title: 'ARTIST',
    description: '박 태 민',
    src: artists
  }
];
