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
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'หาดพัทยา',
        description: 'บรรยากาศริมทะเลและแสงแดด',
      },
      {
        url: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
        title: 'เกาะล้าน',
        description: 'น้ำทะเลใสและหาดทรายขาว',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
        title: 'ตลาดน้ำ 4 ภาค',
        description: 'สัมผัสวิถีชีวิตริมคลอง',
      },
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'เขาชีจรรย์',
        description: 'พระพุทธรูปแกะสลักบนหน้าผา',
      },
    ],
    province: 'Chonburi',
  },
  {
    image: [
      {
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'วัดพระธาตุดอยสุเทพ',
        description: 'วัดคู่บ้านคู่เมืองเชียงใหม่',
      },
      {
        url: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
        title: 'ถนนนิมมานเหมินท์',
        description: 'แหล่งชิคของเชียงใหม่',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/animal-1867121_1280.jpg',
        title: 'ดอยอินทนนท์',
        description: 'ยอดเขาสูงสุดของไทย',
      },
      {
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        title: 'สวนสัตว์เชียงใหม่',
        description: 'แหล่งท่องเที่ยวสำหรับครอบครัว',
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
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        title: 'วัดพระแก้ว',
        description: 'วัดสำคัญกลางกรุงเทพฯ',
      },
      {
        url: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
        title: 'แม่น้ำเจ้าพระยา',
        description: 'ล่องเรือชมวิวเมือง',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
        title: 'ถนนข้าวสาร',
        description: 'แหล่งท่องเที่ยวยอดนิยม',
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'ตลาดนัดจตุจักร',
        description: 'ตลาดนัดที่ใหญ่ที่สุดในไทย',
      },
    ],
    province: 'Bangkok',
  },
  {
    province: 'Chiang Rai',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1578898887931-c7e8c5bd22c3',
        title: 'วัดร่องขุ่น',
        description: 'วัดศิลปะสีขาวอันโดดเด่น',
      },
      {
        url: 'https://images.unsplash.com/photo-1628351305351-b3a83cb0b8f5',
        title: 'ภูชี้ฟ้า',
        description: 'จุดชมทะเลหมอกสุดฮิต',
      },
    ],
  },
  {
    province: 'Songkhla',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1611312442552-dc0ac7dc1969',
        title: 'หาดสมิหลา',
        description: 'หาดทรายขาวและรูปปั้นนางเงือก',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2017/04/06/22/11/thailand-2200845_1280.jpg',
        title: 'เขาตังกวน',
        description: 'วิวเมืองสงขลาจากมุมสูง',
      },
    ],
  },
  {
    province: 'Surat Thani',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1562161580-596a2513eb10',
        title: 'เกาะสมุย',
        description: 'เกาะยอดนิยมของนักท่องเที่ยว',
      },
      {
        url: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
        title: 'น้ำตกหน้าเมือง',
        description: 'ธรรมชาติที่เงียบสงบ',
      },
    ],
  },
  {
    province: 'Krabi',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715',
        title: 'อ่าวไร่เลย์',
        description: 'ทะเลสีฟ้าและหน้าผาหินปูน',
      },
      {
        url: 'https://images.unsplash.com/photo-1519881401466-13063e57d7ed',
        title: 'เกาะห้อง',
        description: 'ทะเลสงบและเวิ้งอ่าวสุดปัง',
      },
    ],
  },
  {
    province: 'Udon Thani',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1570001240264-0e9b6f2a626d',
        title: 'ทะเลบัวแดง',
        description: 'บัวแดงบานเต็มบึง',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/lotus-3080470_1280.jpg',
        title: 'วัดโพธิสมภรณ์',
        description: 'วัดเก่าแก่ในเมืองอุดร',
      },
    ],
  },
  {
    province: 'Ubon Ratchathani',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1635430265944-b12b1650b869',
        title: 'สามพันโบก',
        description: 'แกรนด์แคนยอนเมืองไทย',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2018/09/21/11/07/statue-3692374_1280.jpg',
        title: 'วัดหนองป่าพง',
        description: 'สถานที่ปฏิบัติธรรมเงียบสงบ',
      },
    ],
  },
  {
    province: 'Khon Kaen',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1624435663479-efbff9814a16',
        title: 'บึงแก่นนคร',
        description: 'สวนสาธารณะกลางเมือง',
      },
      {
        url: 'https://images.unsplash.com/photo-1558430519-3be5e6e36d0e',
        title: 'พระธาตุขามแก่น',
        description: 'พระธาตุคู่เมืองขอนแก่น',
      },
    ],
  },
  {
    province: 'Nakhon Si Thammarat',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1600917381687-bfc6810bd716',
        title: 'วัดพระมหาธาตุ',
        description: 'วัดสำคัญประจำภาคใต้',
      },
      {
        url: 'https://images.unsplash.com/photo-1625660837643-dc0120fcfb49',
        title: 'อุทยานแห่งชาติเขาหลวง',
        description: 'ธรรมชาติสวยงามและอากาศดี',
      },
    ],
  },
  {
    province: 'Yala',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1605723281157-28345a10c960',
        title: 'ทะเลหมอกอัยเยอร์เวง',
        description: 'จุดชมทะเลหมอกชื่อดัง',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2021/09/01/06/46/sunrise-6589157_1280.jpg',
        title: 'น้ำตกธารโต',
        description: 'น้ำตกธรรมชาติในป่า',
      },
    ],
  },
  {
    province: 'Rayong',
    image: [
      {
        url: 'https://images.unsplash.com/photo-1591733470052-d1f748eecb4b',
        title: 'เกาะเสม็ด',
        description: 'หาดทรายขาว น้ำทะเลใส',
      },
      {
        url: 'https://cdn.pixabay.com/photo/2018/01/03/11/02/beach-3053164_1280.jpg',
        title: 'แหลมแม่พิมพ์',
        description: 'ชายหาดยาวและเงียบสงบ',
      },
    ],
  },
];
