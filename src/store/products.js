const initialState = {
  products: [
    {
      count: 0,
      category: 'FOOD',
      name: ' Beef and Barley Soup',
      description:
        'This warm, comforting soup was our top-rated meal of 2017, proving that simple ingredients can produce super flavorful results. This recipe consists of ingredients you can find year-round, so you can make this dish anytime you crave warmth and comfort.',
      price: '15 JD',
      inventory: 5000,
      imgUrl:
        'https://1m8t7f33dnra3sfk6v2rjurs-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/20171120-Beef-and-Barley-Soup-1200x500.jpg',
    },
    {
      count: 0,
      category: 'FOOD',
      name: ' Maple-Dijon Panko Salmon ',
      description:
        'If we had to pick a signature dish for Cook Smarts, we would pick this one. It is everything that defines Cook Smarts – easy to make, uses ingredients you have in your pantry, healthy and flavorful, and comforting but unique enough to make dinnertime memorable',
      price: '17 JD',
      inventory: 350,
      imgUrl:
        'https://1m8t7f33dnra3sfk6v2rjurs-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/20170524-KateW-Favorite-Meal.jpg',
    },
    {
      count: 0,
      category: 'FOOD',
      name: 'Sausage and Shrimp Gumbo & Creamy Chard and Mushroom Stroganoff ',
      description:
        'the Shrimp & Sausage Gumbo is a hearty, flavorful stew that combines shrimp, andouille sausage, and a delicious medley of vegetables.',
      price: '30 JD',
      inventory: 35,
      imgUrl:
        'https://1m8t7f33dnra3sfk6v2rjurs-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/20150518-Sausage-and-Shrimp-Gumbo-Blog-Photo.jpg',
    },
    {
      count: 0,
      category: 'ELECTRONICS',
      name: 'Galaxy Z Flip3 5G',
      description:
        'ROM memory Part of the indicated memory space is occupied by preinstalled content. For this device, the space available to the user is approximately 87% of the total memory capacity indicated.',
      price: '950 JD',
      inventory: 3,
      imgUrl:
        'https://images.samsung.com/levant/smartphones/galaxy-z-flip3-5g/buy/zflip3_carousel_colorcombokv_ex_pc.jpg?imwidth=768',
    },
    {
      count: 0,
      category: 'ELECTRONICS',
      name: 'Side-by-Side Refrigerator, 634L Net Capacity',
      description:
        'Twin Cooling Plus,Ice & Water Dispenser (Plumbed), 5 Smart Conversion Modes,Digital Inverter Compressor',
      price: '3000 JD',
      inventory: 3,
      imgUrl:
        'https://images.samsung.com/is/image/samsung/p6pim/levant/feature/116500711/levant-feature-more-space---freshness-396061839?$FB_TYPE_K_JPG$',
    },
    {
      count: 0,
      category: 'ELECTRONICS',
      name: 'Neo QLED TV',
      description: 'Resolution 8K , DEVICE QN800A ,SIZE 65"',
      price: '4000 JD',
      inventory: 3,
      imgUrl:
        'https://images.samsung.com/is/image/samsung/assets/levant/tvs/neo-tv/1440x450_TV_2.jpg?imwidth=1536',
    },
    {
      count: 0,
      category: 'CARS',
      name: 'GEELY AZKARRA 2022',
      description:
        'Sunroof Remote Keyless Electric mirror Power Steering check Air Conditioning  Remote Keyless',
      price: '27,900 JOD',
      inventory: 2,
      imgUrl:
        'https://media.hatla2eestatic.com/uploads/ncarmodel/8068/big-up_5910b46121b737a8d9aed9f916bd8dda.png',
    },
    {
      count: 0,
      category: 'CARS',
      name: 'Mercedes E 200 2020',
      description: 'Sunroof Remote Keyless Electric mirror',
      price: '51,500 JOD',
      inventory: 1,
      imgUrl:
        'https://media.hatla2eestatic.com/uploads/car/2021/08/21/4156097/full_up_fb67589870223358bee5398b72aa8567.jpg',
    },
    {
      count: 0,
      category: 'CARS',
      name: 'Mercedes E 250 2010',
      description: 'Power Steering check Air Conditioning  Remote Keyless ',
      price: '23,800 JOD',
      inventory: 2,
      imgUrl:
        'https://media.hatla2eestatic.com/uploads/car/2021/08/21/4156350/full_up_008c04d80d52c1422c4c101f8cedad98.jpg',
    },
  ],
  activeProducts: [],
};

export default function getItems(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      const activeCategory = state.products.filter((item) => {
        return item.category === payload;
      });
      return {
        products: state.products,
        activeProducts: activeCategory,
      };

    case 'reduce_inventot':
      const afterAdd = state.products.map((element) => {
        if (element.name == payload.name && element.inStock > 0) {
          element.inStock = element.inStock - 1;
        }

        return element;
      });
      return {
        products: afterAdd,
        activeProducts: state.activeProducts,
      };

    case 'GET ':
      return {
        products: payload,
        activeProducts: state.activeProducts,
      };

    default:
      return state;
  }
}
