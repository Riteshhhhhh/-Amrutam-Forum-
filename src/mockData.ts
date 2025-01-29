export const mockPosts = [
  {
    id: '1',
    author: {
      id: 'user1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      isDoctor: false,
    },
    content: 'What are some natural remedies for chronic migraines? I\'ve been experiencing them more frequently lately and would prefer to try natural solutions before medication.\n\nI\'ve noticed they often occur in the afternoon, but I\'m not sure what triggers them.',
    timestamp: '2 hours ago',
    likes: 24,
    liked: false,
    comments: [
      {
        id: 'c1',
        author: {
          id: 'doc1',
          name: 'Dr. Michael Chen',
          avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          isDoctor: true,
        },
        content: 'Consider keeping a migraine diary to identify triggers. Some natural remedies include:\n\n- Staying hydrated\n- Practicing stress reduction techniques\n- Ensuring regular sleep patterns\n- Avoiding caffeine and processed foods\n\nIf symptoms persist, please schedule an appointment for a thorough evaluation.',
        timestamp: '1 hour ago',
      }
    ],
    saved: false,
    type: 'question',
  },
  {
    id: '2',
    author: {
      id: 'doc2',
      name: 'Dr. Emily Williams',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
      isDoctor: true,
    },
    content: 'The importance of gut health cannot be overstated. Recent research shows that our gut microbiome affects everything from our immune system to our mental health.\n\nHere are some key ways to maintain a healthy gut:\n\n1. Eat a diverse range of foods\n2. Include fermented foods in your diet\n3. Avoid artificial sweeteners\n4. Get enough sleep\n5. Stay hydrated\n\nWhat steps do you take to maintain your gut health?',
    timestamp: '5 hours ago',
    likes: 156,
    liked: false,
    comments: [],
    saved: false,
    type: 'thought',
  },
  {
    id: '3',
    author: {
      id: 'user3',
      name: 'David Kumar',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      isDoctor: false,
    },
    content: 'Has anyone tried Ayurvedic remedies for seasonal allergies? I\'m looking for natural alternatives to antihistamines.',
    timestamp: '3 hours ago',
    likes: 8,
    liked: false,
    comments: [
      {
        id: 'c2',
        author: {
          id: 'doc3',
          name: 'Dr. Priya Sharma',
          avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
          isDoctor: true,
        },
        content: 'Yes, there are several effective Ayurvedic approaches for allergies. Consider trying local honey, turmeric with black pepper, and neti pot nasal irrigation. These can help build immunity and reduce symptoms naturally.',
        timestamp: '2 hours ago',
      }
    ],
    saved: false,
    type: 'question',
  },
  {
    id: '4',
    author: {
      id: 'doc4',
      name: 'Dr. James Wilson',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
      isDoctor: true,
    },
    content: 'Exercise is medicine! 🏃‍♂️\n\nNew studies show that even short bursts of physical activity can have significant health benefits. Here are some quick ways to incorporate movement into your daily routine:\n\n• Take the stairs instead of the elevator\n• Have walking meetings\n• Do desk stretches\n• 5-minute dance breaks\n\nRemember: consistency over intensity!',
    timestamp: '1 day ago',
    likes: 234,
    liked: false,
    comments: [
      {
        id: 'c3',
        author: {
          id: 'user4',
          name: 'Lisa Chen',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
          isDoctor: false,
        },
        content: 'This is so helpful! I\'ve started doing 10-minute yoga sessions during my work breaks and it\'s made a huge difference in my energy levels.',
        timestamp: '20 hours ago',
      }
    ],
    saved: false,
    type: 'thought',
  }
];