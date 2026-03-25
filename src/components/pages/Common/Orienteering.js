import SEO from '../../Common/SEO';

const blogPosts = [
  {
    title: "What is Orienteering? A Beginner's Guide",
    content:
      "Welcome to our orienteering blog! Whether you're a seasoned orienteer or just curious about the sport, this is the place for you. Orienteering involves navigating through diverse terrains using a map and compass. It's not just about speed; it's also about strategy and precision. In this post, we'll cover the basics to get you started.",
    tips: ['Start with local events.', 'Practice map reading.', 'Learn to use a compass.'],
  },
  {
    title: 'Essential Gear for Orienteering Beginners',
    content:
      "To get started with orienteering, you'll need some basic equipment. Here's a list of essential gear to ensure you're prepared for your first adventure.",
    items: [
      { label: 'Map and Compass', text: 'The backbone of orienteering.' },
      { label: 'Comfortable Footwear', text: 'Sturdy, waterproof shoes.' },
      { label: 'Clothing', text: 'Wear layers and be prepared for weather changes.' },
      { label: 'Hydration', text: 'Carry water and snacks.' },
      { label: 'Safety Gear', text: 'Whistle, first aid kit.' },
    ],
  },
  {
    title: 'Improving Your Orienteering Skills',
    content:
      'Like any sport, orienteering requires practice and skill development. Here are some training tips to help you improve your navigation and physical fitness.',
    items: [
      { label: 'Map Study', text: 'Spend time familiarizing yourself with different types of maps.' },
      { label: 'Compass Drills', text: 'Practice using your compass in various conditions.' },
      { label: 'Fitness', text: 'Incorporate running and hiking into your routine.' },
      { label: 'Mock Courses', text: 'Set up practice courses to simulate race conditions.' },
      {
        label: 'Join Clubs',
        text: 'Participate in local orienteering clubs and events for hands-on experience.',
      },
    ],
  },
];

const BlogPost = ({ title, content, tips, items }) => (
  <article className="blog-post">
    <h2>{title}</h2>
    <p>{content}</p>
    {tips && (
      <>
        <h3>Tips:</h3>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </>
    )}
    {items && (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.label}:</strong> {item.text}
          </li>
        ))}
      </ul>
    )}
  </article>
);

const Orienteering = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Orienteering Blog',
    description: 'Blog about orienteering, navigation sports, and outdoor activities.',
    author: {
      '@type': 'Person',
      name: 'Dariusz Szyca',
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.content.substring(0, 150),
    })),
  };

  return (
    <>
      <SEO
        title="Orienteering"
        description="Discover orienteering - a navigation sport combining running and map reading. Tips for beginners, essential gear, and training advice."
        url="/orienteering"
        keywords="Orienteering, Navigation Sport, Map Reading, Compass, Outdoor Sports, Trail Running, Adventure Sports"
        type="article"
        structuredData={structuredData}
      />
      <section className="page-section" id="orienteering">
        <div className="container">
          <h1>Orienteering</h1>
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}

          <article className="blog-post">
            <h2>My Experience at the "Jaszczur" Orienteering Event</h2>
            <p>
              Last weekend, I participated in the XYZ Orienteering Event, and it was an incredible
              experience. The terrain was challenging, with steep hills and dense forests. My strategy
              was to take it slow and steady, ensuring I hit every checkpoint accurately.
            </p>
            <h3>Preparation:</h3>
            <p>How I trained and planned.</p>
            <h3>The Course:</h3>
            <p>Description of the terrain and challenges.</p>
            <h3>Race Strategy:</h3>
            <p>My approach to navigation and pacing.</p>
            <h3>Lessons Learned:</h3>
            <p>Tips and takeaways from the experience.</p>
          </article>

          <article className="blog-post">
            <h2>Orienteering Fun for the Whole Family</h2>
            <p>
              Orienteering is a great way to get the whole family involved in outdoor fun. Here are
              some tips to make it enjoyable for all ages:
            </p>
            <ul>
              <li>
                <strong>Kid-Friendly Courses:</strong> Look for events with beginner courses.
              </li>
              <li>
                <strong>Educational Aspect:</strong> Teach kids about maps and nature.
              </li>
              <li>
                <strong>Make it a Game:</strong> Turn navigation into a fun treasure hunt.
              </li>
              <li>
                <strong>Pack Snacks and Water:</strong> Keep everyone fueled and hydrated.
              </li>
              <li>
                <strong>Celebrate Success:</strong> Reward efforts with a family picnic or outing.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Orienteering;
