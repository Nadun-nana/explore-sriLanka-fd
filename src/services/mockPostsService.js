// Mock data for destination posts
const mockPosts = [
  {
    _id: 'post1',
    title: 'Beautiful Beaches of Mirissa',
    body: 'Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. It is approximately 150 kilometers south of Colombo and is situated at an elevation of 4 meters above sea level.\n\nThe beach and nightlife of Mirissa make it an attractive holiday destination. It is also famous for whale watching, having one of the longest beaches in Sri Lanka, and being one of the most popular destinations in the country.',
    location: 'Southern Province',
    images: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586211082529-c2a98d21a718?q=80&w=1470&auto=format&fit=crop'
    ],
    createdAt: '2023-05-15T08:30:00.000Z'
  },
  {
    _id: 'post2',
    title: 'Exploring Sigiriya Rock Fortress',
    body: 'Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 meters (590 ft) high.\n\nAccording to the ancient Sri Lankan chronicle the Culavamsa, this site was selected by King Kashyapa (477–495 AD) for his new capital. He built his palace on the top of this rock and decorated its sides with colorful frescoes. On a small plateau about halfway up the side of this rock, he built a gateway in the form of an enormous lion.',
    location: 'Central Province',
    images: [
      'https://images.unsplash.com/photo-1586211082529-c2a98d21a718?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580803834205-0e64baf9d13d?q=80&w=1470&auto=format&fit=crop'
    ],
    createdAt: '2023-06-20T10:15:00.000Z'
  },
  {
    _id: 'post3',
    title: 'Tea Plantations of Nuwara Eliya',
    body: 'Nuwara Eliya is a city in the tea country hills of central Sri Lanka. The naturally landscaped Hakgala Botanical Gardens displays roses and tree ferns, and shelters monkeys and blue magpies. Nearby Seetha Amman Temple, a colorful Hindu shrine, is decorated with religious figures. Densely forested Galway\'s Land National Park is a sanctuary for endemic and migratory bird species, including bulbuls and flycatchers.\n\nThe town\'s architecture reflects its colonial history, with many buildings retaining features from the British colonial period. The cool climate and scenic beauty make it a popular destination for both locals and tourists.',
    location: 'Central Province',
    images: [
      'https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1575986767340-5d17ae0de1d9?q=80&w=1470&auto=format&fit=crop'
    ],
    createdAt: '2023-07-10T14:45:00.000Z'
  },
  {
    _id: 'post4',
    title: 'Ancient City of Polonnaruwa',
    body: 'Polonnaruwa is the main town of Polonnaruwa District in North Central Province, Sri Lanka. The modern town of Polonnaruwa is also known as New Town, and the other part of Polonnaruwa remains as the royal ancient city of the Kingdom of Polonnaruwa.\n\nThe second most ancient of Sri Lanka\'s kingdoms, Polonnaruwa was first established by the Chola dynasty after their successful invasion of the country\'s then capital, Anuradhapura, in the 10th century. The Ancient City of Polonnaruwa has been declared a World Heritage Site.',
    location: 'North Central Province',
    images: [
      'https://images.unsplash.com/photo-1590123715937-e3a7fb4d6aeb?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1470&auto=format&fit=crop'
    ],
    createdAt: '2023-08-05T09:20:00.000Z'
  },
  {
    _id: 'post5',
    title: 'Galle Fort: A Colonial Gem',
    body: 'Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka.\n\nThe fort has a colorful history, and today has a multi-ethnic and multi-religious population. The Sri Lankan government and many Dutch people who still own some of the properties inside the fort are looking at making this one of the modern wonders of the world.',
    location: 'Southern Province',
    images: [
      'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1470&auto=format&fit=crop'
    ],
    createdAt: '2023-09-12T16:30:00.000Z'
  },
  {
    _id: 'post6',
    title: 'Wildlife Safari in Yala National Park',
    body: 'Yala National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. The blocks have individual names such as, Ruhuna National Park (block 1), and Kumana National Park or \'Yala East\' for the adjoining area. It is situated in the southeast region of the country, and lies in Southern Province and Uva Province.\n\nThe park covers 979 square kilometres (378 sq mi) and is located about 300 kilometres (190 mi) from Colombo. Yala was designated as a wildlife sanctuary in 1900, and, along with Wilpattu was one of the first two national parks in Sri Lanka, having been designated in 1938.',
    location: 'Southern Province',
    images: [
      'https://images.unsplash.com/photo-1581335438722-9aa7f6ae3d5d?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1470&auto=format&fit=crop'
    ],
    createdAt: '2023-10-25T11:10:00.000Z'
  }
];

// Mock API functions
export const fetchPosts = () => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(mockPosts);
    }, 800);
  });
};

export const fetchPostById = (id) => {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      const post = mockPosts.find(post => post._id === id);
      if (post) {
        resolve(post);
      } else {
        reject(new Error('Post not found'));
      }
    }, 500);
  });
};

export default {
  fetchPosts,
  fetchPostById
};
