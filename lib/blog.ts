export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "perfect-brew",
    title: "The Art of the Perfect Brew",
    date: "April 15, 2024",
    category: "Tips",
    image: "/images/category-assam.png",
    excerpt: "Discover the secrets behind brewing the most authentic and aromatic cup of Assam tea every single time.",
    content: `
      <p>Brewing tea is more than just a morning ritual; it is an art form that has been perfected over centuries in the mist-covered gardens of Assam. To truly experience the bold, malty notes of our Narayani Family Blend, one must understand the delicate balance of time, temperature, and technique.</p>
      
      <h2>1. The Water Quality</h2>
      <p>Always start with fresh, cold water. Avoid re-boiling water as it loses oxygen, which can make your tea taste flat. For Assam tea, you want water that has just reached a rolling boil (100°C).</p>
      
      <h2>2. The Measurement</h2>
      <p>Consistency is key. We recommend one teaspoon (approximately 2.5g) of tea leaves per cup. If you prefer a stronger 'Kadak' brew, increase the tea amount rather than the steeping time to avoid bitterness.</p>
      
      <h2>3. The Steeping Time</h2>
      <p>Assam tea is known for its strength. Steep for 3 to 5 minutes depending on your preference. If you are using our Instant Jaggery Premixes, this step is handled for you, ensuring a perfect balance in every cup.</p>
      
      <blockquote>"A cup of tea is an excuse to share great stories and a legacy of warmth."</blockquote>
      
      <p>Whether you enjoy it black or with a splash of milk, remember that the best tea is the one that brings you comfort. At Narayani Tea, we ensure that every leaf is chosen to provide that consistent warmth you deserve.</p>
    `
  },
  {
    slug: "jaggery-future",
    title: "Why Jaggery is the Future of Chai",
    date: "April 10, 2024",
    category: "Health",
    image: "/images/category-jaggery.png",
    excerpt: "Explore the health benefits and traditional wisdom of replacing refined sugar with natural jaggery in your tea.",
    content: `
      <p>For decades, refined sugar has been the default sweetener for Indian Chai. However, a silent revolution is brewing. At Narayani Tea, we believe the future of tea is golden—the color of pure, unrefined Jaggery (Gud).</p>
      
      <h2>A Nutritional Powerhouse</h2>
      <p>Unlike white sugar, which provides empty calories, jaggery is packed with essential minerals like iron, magnesium, and potassium. It acts as a natural digestive aid, making your post-meal cup of tea even more beneficial.</p>
      
      <h2>The Mineral Rich Profile</h2>
      <p>Jaggery is known to help cleanse the liver and boost immunity. By incorporating it into our instant premixes, we ensure you get these benefits without the hassle of traditional preparation, which often curdles milk if not done correctly.</p>
      
      <h2>Flavor Complexity</h2>
      <p>Sugar only adds sweetness. Jaggery adds a deep, caramel-like complexity that complements the bold notes of Assam tea perfectly. It transforms a simple drink into a wholesome experience.</p>
      
      <p>Switching to Narayani Jaggery Tea isn't just a choice for your palate; it's a choice for your well-being. Experience the guilt-free indulgence of traditional wisdom combined with modern convenience.</p>
    `
  },
  {
    slug: "morning-spices",
    title: "5 Spices for Your Morning Cup",
    date: "April 05, 2024",
    category: "Lifestyle",
    image: "/images/tradition.png",
    excerpt: "Enhance your daily tea ritual with these five essential spices that offer both flavor and wellness benefits.",
    content: `
      <p>In Indian households, the spice box (Masala Dabba) is a treasure trove of wellness. Adding just a pinch of the right spice to your morning tea can transform your mood and health. Here are the five essentials we swear by at Narayani Tea.</p>
      
      <h2>1. Ginger (Adrak)</h2>
      <p>The ultimate immunity booster. Ginger adds a refreshing zing and is excellent for digestion and respiratory health. Our Ginger Jaggery Tea is a fan favorite for this very reason.</p>
      
      <h2>2. Cardamom (Elaichi)</h2>
      <p>Known as the queen of spices, Cardamom adds a sweet, floral aroma that calms the mind. It's a natural mouth freshener and helps in detoxification.</p>
      
      <h2>3. Holy Basil (Tulsi)</h2>
      <p>An adaptogen that helps the body cope with stress. A few leaves in your brew can significantly enhance the 'Health First' promise we live by.</p>
      
      <h2>4. Cinnamon (Dalchini)</h2>
      <p>Cinnamon adds a subtle sweetness without the calories and is known to help regulate blood sugar levels.</p>
      
      <h2>5. Black Pepper (Kali Mirch)</h2>
      <p>Don't be fooled by its bite; black pepper enhances the absorption of other nutrients and is a great metabolism booster.</p>
      
      <p>Can't decide? Our Masala Jaggery Tea combines these traditions into one perfect blend, ensuring you start your day with the best of nature's pharmacy.</p>
    `
  }
];
