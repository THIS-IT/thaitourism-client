export interface CarouselImage {
  url: string;
  title: string;
  description: string;
}

export interface CarouselItem {
  image: CarouselImage[];
  province: string;
}

export const carouselImagesByProvince: CarouselItem[] = [
  {
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
    province: 'Chonburi',
  },
  {
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
    province: 'Chiang Mai',
  },
  {
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
    province: 'Phuket',
  },
  {
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
    province: 'Bangkok',
  },
  {
    province: 'Chiang Rai',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Songkhla',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Surat Thani',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Krabi',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Udon Thani',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Ubon Ratchathani',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Khon Kaen',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Nakhon Si Thammarat',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Yala',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
  {
    province: 'Rayong',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'หาดป่าตอง',
        description: 'ชายหาดชื่อดังของภูเก็ต',
      },
      {
        url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
        title: 'แหลมพรหมเทพ',
        description: 'จุดชมวิวพระอาทิตย์ตก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'เมืองเก่าภูเก็ต',
        description: 'สถาปัตยกรรมชิโนโปรตุกีส',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เกาะพีพี',
        description: 'ทะเลสวยน้ำใส',
      },
    ],
  },
];
