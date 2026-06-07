import { TourPackage, Blog, Testimonial } from '../models/types';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'ladakh-odyssey',
    title: 'Ultimate Ladakh Odyssey',
    slug: 'ultimate-ladakh-odyssey',
    duration: '7 Days / 6 Nights',
    price: 34500,
    location: 'Leh, Nubra Valley & Pangong Lake',
    description: 'Experience the magic of Ladakh as you explore ancient monasteries, ride double-humped camels in the high-altitude desert of Nubra, and witness the changing colors of the breathtaking Pangong Lake.',
    image: '/extra/ladakh-main.jpeg',
    images: [
      '/extra/ladakh-pangong.jpeg',
      '/extra/basgo-ladakh.jpeg',
      '/extra/ladakh-thiksey.jpeg',
      '/extra/ladakh-nubra.jpeg'
    ],
    category: 'ladakh',
    featured: true,
    difficulty: 'Moderate',
    bestTime: 'May to October',
    itinerary: [
      { day: 1, title: 'Arrival in Leh & Acclimatization', description: 'Arrive at Leh Kushok Bakula Rimpochee Airport. Transfer to your hotel. Complete rest is mandatory on this day for acclimatization to the high altitude (11,500 ft). Evening visit to Leh Palace and Shanti Stupa.' },
      { day: 2, title: 'Leh Sham Valley Sightseeing', description: 'Visit the Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib, and the confluence of Indus & Zanskar Rivers at Nimo. Visit the 11th-century Alchi Monastery.' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La', description: 'Drive to Nubra Valley via Khardung La, one of the world\'s highest motorable passes at 17,582 ft. Visit Diskit Monastery and enjoy a double-humped camel ride on the sand dunes of Hunder.' },
      { day: 4, title: 'Nubra Valley to Pangong Lake via Shyok Route', description: 'Drive to Pangong Lake (13,930 ft) via the scenic Shyok River route. Behold the beautiful turquoise lake extending into China. Overnight stay in luxury camps.' },
      { day: 5, title: 'Pangong Lake to Leh via Chang La', description: 'Witness a glorious sunrise by the lake. Drive back to Leh crossing the Chang La pass (17,586 ft). Evening free for shopping in Leh Main Bazaar.' },
      { day: 6, title: 'Monastery Tour & Local Sightseeing', description: 'Visit Thiksey Monastery (resembling Tibet\'s Potala Palace), Hemis Monastery (largest in Ladakh), and the historic Shey Palace.' },
      { day: 7, title: 'Departure from Leh', description: 'Early morning transfer to Leh Airport for your flight back home with unforgettable memories.' }
    ],
    included: [
      'Assistance on arrival & departure',
      '6 Nights accommodation in premium hotels/luxury camps',
      'Breakfast & Dinner daily (MAP Plan)',
      'All transfers & sightseeing by private private SUV (Xylo/Innova)',
      'Inner Line Permits for restricted areas',
      'Oxygen cylinder in vehicle for emergencies',
      'Welcome drinks on arrival'
    ],
    excluded: [
      'Airfare/Train tickets',
      'Lunch, snacks & mineral water',
      'Camel ride, ATV ride & river rafting charges',
      'Guide fees, entry fees to monasteries & monuments',
      'Travel insurance',
      'Any personal expenses'
    ]
  },
  {
    id: 'ladakh-bike-expedition',
    title: 'Ladakh Highway Bike Expedition',
    slug: 'ladakh-highway-bike-expedition',
    duration: '10 Days / 9 Nights',
    price: 42000,
    location: 'Manali - Leh - Srinagar Circuit',
    description: 'The ultimate bucket-list adventure. Ride across five high-altitude passes, navigate river crossings, and cruise through the legendary Gata Loops on a Royal Enfield.',
    image: '/extra/bike-ladakh.jpeg',
    images: [
      '/extra/ladakh-bike-pangong.jpeg',
      '/extra/bike-ladkah-leh.jpeg',
      '/extra/bikker.jpeg'
    ],
    category: 'ladakh',
    featured: true,
    difficulty: 'Challenging',
    bestTime: 'June to September',
    itinerary: [
      { day: 1, title: 'Assemble in Manali & Briefing', description: 'Arrive in Manali. Meet your fellow riders, receive your Royal Enfield bike, and attend the safety briefing and test ride.' },
      { day: 2, title: 'Manali to Jispa via Atal Tunnel', description: 'Ride through the engineering marvel Atal Tunnel, crossing into Lahaul Valley. Ride along the Bhaga River to Jispa.' },
      { day: 3, title: 'Jispa to Sarchu via Baralacha La', description: 'Cross the Baralacha La pass (16,040 ft). Sarchu marks the border between Himachal Pradesh and Ladakh. Camp overnight.' },
      { day: 4, title: 'Sarchu to Leh via Gata Loops', description: 'Climb the 21 hairpin bends of Gata Loops, cross Nakee La (15,547 ft) and Lachung La (16,616 ft). Ride across the flat More Plains before entering Leh.' },
      { day: 5, title: 'Rest & Local Exploration in Leh', description: 'A day of rest for you and the bikes. Explore local markets, visit the Shanti Stupa, and prepare for the rides ahead.' },
      { day: 6, title: 'Leh to Nubra Valley (Khardung La)', description: 'Ride up to Khardung La, one of the world\'s highest motorable passes. Descend into Nubra Valley and ride on the sand dunes.' },
      { day: 7, title: 'Nubra to Pangong Lake via Shyok', description: 'A thrilling ride along the Shyok River over dirt tracks and water crossings to reach the mesmerizing Pangong Lake.' },
      { day: 8, title: 'Pangong to Leh via Chang La', description: 'Cross the Chang La pass, return to Leh, and enjoy a celebration dinner.' },
      { day: 9, title: 'Leh to Kargil via Magnetic Hill', description: 'Ride on the smooth Srinagar-Leh highway. Visit Magnetic Hill, Lamayuru Moonland, and the Kargil War Memorial in Drass.' },
      { day: 10, title: 'Kargil to Srinagar & Departure', description: 'Cross Zoji La pass (11,575 ft), pass through Sonamarg, and drop off bikes in Srinagar. Tour concludes.' }
    ],
    included: [
      'Royal Enfield 500cc / Himalayan bike including fuel',
      '9 Nights stay in twin-sharing hotels/camps',
      'Breakfast and Dinner throughout',
      'Backup vehicle for luggage & mechanic support',
      'Rider leader & tour coordinator',
      'Helmets & riding gear (basic)',
      'Permits and entry tokens'
    ],
    excluded: [
      'Security deposit for the bike',
      'Damage expenses of the bike, if any',
      'Airfare to Manali and from Srinagar',
      'Personal riding gear (boots, gloves)',
      'Lunches and snacks'
    ]
  },
  {
    id: 'spiti-explorer',
    title: 'Spiti Valley Ultimate Jeep Safari',
    slug: 'spiti-valley-ultimate-jeep-safari',
    duration: '8 Days / 7 Nights',
    price: 28500,
    location: 'Shimla - Kaza - Chandratal - Manali',
    description: 'Journey through the Middle Land. Spiti Valley is a cold desert mountain valley, filled with ancient Tibetan culture, high-altitude villages, pristine lakes, and extreme roads.',
    image: '/extra/spiti-tour.jpeg',
    images: [
      '/extra/spiti-ladakh.jpeg',
      '/extra/tour-ladakh-spiti.jpeg'
    ],
    category: 'spiti',
    featured: true,
    difficulty: 'Challenging',
    bestTime: 'June to September',
    itinerary: [
      { day: 1, title: 'Shimla to Kalpa via Sangla', description: 'Start early from Shimla. Drive along the Sutlej river. Enter Kinnaur Valley. Reach Kalpa, famous for apple orchards and the majestic Kinner Kailash view.' },
      { day: 2, title: 'Kalpa to Kaza via Nako & Tabo', description: 'Drive through the rugged landscapes. Visit Nako lake and monastery. Visit Tabo Monastery, a UNESCO World Heritage site founded in 996 AD, often called the "Ajanta of the Himalayas". Reach Kaza.' },
      { day: 3, title: 'Kaza Local - Key Monastery & Kibber', description: 'Explore the spectacular Key Monastery perched on a hilltop. Drive to Kibber, one of the highest inhabited villages in the world, and cross the Chicham Bridge.' },
      { day: 4, title: 'Langza, Hikkim & Komic High Villages', description: 'Visit Langza (famous for marine fossils and giant Buddha statue), Hikkim (world\'s highest post office - write a postcard!), and Komic (world\'s highest village connected by motorable road).' },
      { day: 5, title: 'Kaza to Pin Valley & Mud Village', description: 'Explore Pin Valley National Park, the land of the Snow Leopard. Visit the beautiful Mud Village, the last village in Pin Valley.' },
      { day: 6, title: 'Kaza to Chandratal Lake', description: 'Drive towards Kunzum Pass (14,930 ft) and take a detour to the crescent-shaped Chandratal Lake (Lake of the Moon). Stay in deluxe camps nearby.' },
      { day: 7, title: 'Chandratal to Manali via Rohtang Pass', description: 'Navigate the rough gravel tracks of Chhatru and Gramphu. Cross the Rohtang Pass or Atal Tunnel to reach Manali. Evening at leisure.' },
      { day: 8, title: 'Departure from Manali', description: 'Depart from Manali with incredible memories of the mystical Spiti Valley.' }
    ],
    included: [
      'Travel by 4x4 SUV/Tempo Traveller from Shimla to Manali',
      '7 Nights accommodation in hotels/homestays/camps',
      'MAP food plan (Breakfast & Dinner)',
      'Local guidance and driver charges',
      'Permissions & green tax'
    ],
    excluded: [
      'Flights/trains to Shimla or from Manali',
      'Lunches, laundry, and drinks',
      'Monument entry fees',
      'Anything not mentioned in inclusion list'
    ]
  },
  {
    id: 'kashmir-paradise',
    title: 'Kashmir Luxury Paradise Tour',
    slug: 'kashmir-luxury-paradise-tour',
    duration: '6 Days / 5 Nights',
    price: 24500,
    location: 'Srinagar, Gulmarg, Pahalgam & Sonamarg',
    description: 'Immerse yourself in "Heaven on Earth". Experience a serene shikara ride on Dal Lake, stay in a luxury carved wooden houseboat, ski on the meadows of Gulmarg, and hike in the valleys of Pahalgam.',
    image: '/extra/kasmir-package.jpeg',
    images: [
      '/extra/kashmir.jpeg',
      '/extra/kashmir-valley.jpeg',
      '/extra/tour-kashmir.jpeg'
    ],
    category: 'kashmir',
    featured: true,
    difficulty: 'Easy',
    bestTime: 'Year-round (April to October for greenery, Dec to March for Snow)',
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar & Houseboat Stay', description: 'Arrive at Srinagar Airport. Transfer to a premium wooden Houseboat on Dal Lake. Enjoy a 1-hour relaxing Shikara Ride in the evening. Overnight in Houseboat.' },
      { day: 2, title: 'Srinagar Local Sightseeing', description: 'Explore Shalimar Bagh, Nishat Bagh, and Chashme Shahi (famous Mughal gardens), and visit the Shankaracharya Temple on the hilltop offering panoramic views of Srinagar.' },
      { day: 3, title: 'Srinagar to Gulmarg Day Trip', description: 'Drive to Gulmarg, the "Meadow of Flowers". Take the famous Gulmarg Gondola Cable Car Ride (Asia\'s highest and longest) up to Phase 1 & 2 for spectacular views of snow-capped mountains.' },
      { day: 4, title: 'Srinagar to Pahalgam', description: 'Drive to Pahalgam, the "Valley of Shepherds". En route visit saffron fields and Avantipura ruins. Check into your hotel. Visit Betaab Valley and Aru Valley in the afternoon.' },
      { day: 5, title: 'Sonamarg Day Trip', description: 'Drive to Sonamarg, the "Meadow of Gold". Take a pony ride to the Thajiwas Glacier. Marvel at the alpine scenery and gushing Sindh River. Return to Srinagar.' },
      { day: 6, title: 'Departure from Srinagar', description: 'Transfer to Srinagar Airport for your onward journey, carrying the sweet fragrance of Kashmir.' }
    ],
    included: [
      '1 Night in Premium Houseboat, 4 Nights in Luxury Hotels',
      'Daily breakfast and dinner (Veg & Non-Veg options)',
      'All transfers & sightseeing by private sedan or SUV',
      '1-Hour Shikara ride on Dal Lake',
      'Toll taxes, driver allowance, and parking fees'
    ],
    excluded: [
      'Gondola tickets in Gulmarg (needs to be pre-booked online)',
      'Local union cabs in Pahalgam & Sonamarg for valley points',
      'Pony rides, sports activities (Skiing, rafting)',
      'Lunch, tea, tips'
    ]
  },
  {
    id: 'ladakh-adventure-trip',
    title: 'Ladakh Adventure Trip',
    slug: 'ladakh-adventure-trip',
    duration: '6 Days / 5 Nights',
    price: 10500,
    location: 'Leh, Khardung La, Nubra Valley & Pangong Lake',
    description: 'Explore Ladakh with scenic rides, guided sightseeing, comfortable stays and local experiences. This curated route balances riding days with sightseeing, trekking moments and acclimatization.',
    image: '/extra/car-trip-ladakh.jpeg',
    images: [
      '/extra/ladakh-nubra.jpeg',
      '/extra/ladakh-pangong.jpeg',
      '/extra/chngthnag-ladakh.jpeg',
      '/extra/road-ladakh.jpeg'
    ],
    category: 'ladakh',
    featured: true,
    difficulty: 'Moderate',
    bestTime: 'May to October',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Acclimatization',
        description: 'Airport pick up and transfer to hotel, rest till afternoon for acclimatization and in the evening visit Shanti Stupa, Leh Palace and Leh Market. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Local Sightseeing: Sangam, Pathar Sahib, Magnetic Hill & Hall of Fame',
        description: 'After breakfast, meet our team. Today we explore the western part of Ladakh. Visit the Hall of Fame (museum run by the Indian Army), proceed to Pathar Sahib Gurudwara (sacred Sikh site), Magnetic Hill, and finally Sangam (confluence of the Indus and Zanskar rivers). Return to Leh for overnight stay.'
      },
      {
        day: 3,
        title: 'Leh to Nubra Valley via Khardung La Pass (128 KM)',
        description: 'After breakfast, drive to Nubra Valley via Khardung La Pass (one of the highest motorable roads in the world at 18,380 ft). Arrive in Hunder in the evening. En route visit Diskit Monastery and the giant Maitreya Buddha statue. Enjoy riding double-humped Bactrian camels on the Hunder sand dunes. Overnight at camp/hotel.'
      },
      {
        day: 4,
        title: 'Nubra Valley to Pangong Lake via Shyok Route (170 KM)',
        description: 'After breakfast, drive to Pangong Lake (4,300 m) via the Shyok Valley route. Start early (around 9 AM) to cross seasonal water crossings before the water level rises. Pass through changing landscapes and villages, reach Pangong by evening, stop at the shooting point for photos, and check in. Overnight at camp.'
      },
      {
        day: 5,
        title: 'Pangong Lake to Leh via Chang La Pass (150 KM)',
        description: 'Drive back to Leh via Chang La Pass (5,350 m), one of the world\'s highest motorable roads. Enjoy panoramic views of the mountains and Sakti village while descending. Overnight at hotel in Leh.'
      },
      {
        day: 6,
        title: 'Departure from Leh',
        description: 'Early morning transfer to Leh airport after breakfast. Fly back home with sweet memories of Ladakh.'
      }
    ],
    included: [
      'Accommodation in Hotels / Camps / Cottages (Triple sharing)',
      'Medical Kit with oxygen cylinder for emergencies',
      'Daily Breakfast and Dinner (MAP Plan)',
      'Inner Line Permits for restricted areas',
      'Airport drop assistance',
      'Tour Marshal, backup vehicle and mechanic support'
    ],
    excluded: [
      'Any domestic or international airfare and airport taxes',
      'Any kind of personal/travel/medical insurance',
      'Double-humped camel safari rides at Hunder sand dunes',
      'Lunch, tea, snacks and mineral water',
      'Entrance fees to monasteries, monuments, and museums',
      'Tips to guides, drivers, and hotel staff',
      'Any unforeseen expenses due to natural calamities, landslides, road blocks, or flight cancellations',
      'Anything not specifically mentioned under inclusions'
    ],
    bike: '<div class="table-container"><table class="modern-table"><thead><tr><th>S.NO</th><th>Bike Option</th><th>Price / Pax (INR)</th></tr></thead><tbody><tr><td>01</td><td>Own Bike</td><td>10,500/-</td></tr><tr><td>02</td><td>Standard 500 CC (Dual Rider)</td><td>13,500/-</td></tr><tr><td>03</td><td>Himalayan 411 CC (Dual Rider)</td><td>15,500/-</td></tr><tr><td>04</td><td>Standard 500 CC (Solo Rider)</td><td>17,500/-</td></tr><tr><td>05</td><td>Himalayan 411 CC (Solo Rider)</td><td>19,500/-</td></tr></tbody></table></div>'
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'ladakh-acclimatization-guide',
    title: 'How to Acclimatize in Ladakh: The Ultimate High-Altitude Health Guide',
    slug: 'how-to-acclimatize-in-ladakh-health-guide',
    snippet: 'Planning a trip to Leh Ladakh? Read our comprehensive medical and practical guide on how to prevent Acute Mountain Sickness (AMS), stay healthy, and enjoy your high-altitude Himalayan adventure.',
    content: `
      <h2>Understanding High Altitude in Leh Ladakh</h2>
      <p>Leh is situated at a staggering altitude of approximately <strong>3,500 meters (11,500 feet)</strong> above sea level. At this elevation, the atmospheric pressure drops significantly, resulting in fewer oxygen molecules per breath. For travelers arriving by air, this transition is instantaneous and puts immense physiological stress on the body. Understanding how to manage this transition is not just a recommendation—it is a critical safety measure to ensure your Himalayan vacation is memorable for the right reasons.</p>

      <h3>What is Acute Mountain Sickness (AMS)?</h3>
      <p>Acute Mountain Sickness (AMS) is the body's natural response to rapid exposure to low atmospheric pressure. It typically manifests within 6 to 24 hours of arrival. Symptoms range from mild discomfort to severe medical emergencies. Key indicators of AMS include:</p>
      <ul>
        <li>Persistent throbbing headache (usually behind the eyes or temples)</li>
        <li>Nausea, vomiting, or loss of appetite</li>
        <li>Dizziness, lightheadedness, or instability while walking</li>
        <li>Fatigue, weakness, and general lethargy</li>
        <li>Disturbed sleep or insomnia</li>
        <li>Shortness of breath during minor physical activity</li>
      </ul>

      <h3>The Golden Rule: Mandatory 36 to 48 Hours of Complete Rest</h3>
      <p>If you fly directly into Leh Kushok Bakula Rimpochee Airport from Delhi or other cities, you MUST dedicate your first 36 to 48 hours to complete inactivity. Do not walk around the market, do not attempt to visit nearby viewpoints, and do not carry heavy luggage. Your day should consist of resting in bed, reading, and letting your cardiovascular system adapt to the oxygen deficiency. Even if you feel energetic upon landing, the sudden drop in air pressure catches up within hours. Pre-plan this rest window into your itinerary.</p>

      <h3>Hydration and Nutrition: Fueling Acclimatization</h3>
      <p>Proper hydration is your best defense against high-altitude sickness. The climate of Ladakh is extremely dry, causing rapid fluid loss through respiration. Follow these guidelines:</p>
      <ul>
        <li><strong>Drink 4 to 5 Liters of Water Daily:</strong> Supplement this with oral rehydration salts (ORS), local herbal tea, or coconut water.</li>
        <li><strong>Eat Carb-Rich Meals:</strong> Carbohydrates require less oxygen to digest than proteins or fats, providing quick energy. Enjoy local staple foods like Thukpa and warm stews.</li>
        <li><strong>Try Garlic Soup:</strong> Known locally as a traditional remedy, garlic is believed to increase blood circulation and enhance oxygen absorption.</li>
        <li><strong>Avoid Alcohol, Caffeine, and Smoking:</strong> These substances are natural dehydrators and respiratory depressants. Consuming them within the first few days significantly increases the risk of severe AMS.</li>
      </ul>

      <h3>Preventive Medicine: Diamox vs. Natural Adaptation</h3>
      <p>Many travelers choose to take <strong>Acetazolamide (Diamox)</strong>, a carbonic anhydrase inhibitor that accelerates breathing and aids acclimatization. If you plan to use Diamox, consult your doctor beforehand. The standard course begins 24 hours before ascending and continues for the first two days at high altitude. Common side effects include frequent urination and tingling sensations in the fingers and toes. For those preferring natural adaptation, a slower road journey via Srinagar offers a more gradual ascent than flying.</p>

      <h3>Emergency Protocols: What to Do if Symptoms Worsen</h3>
      <p>If mild symptoms progress to a severe cough, extreme breathlessness even while resting, confusion, or loss of coordination, these may be signs of life-threatening conditions like HAPE (High Altitude Pulmonary Edema) or HACE (High Altitude Cerebral Edema). In such cases:</p>
      <ol>
        <li><strong>Administer Oxygen Immediately:</strong> All Golo Holidays vehicles are equipped with portable oxygen cylinders to provide immediate relief.</li>
        <li><strong>Descend to Lower Altitude:</strong> If possible, move the patient to a lower elevation. However, since Leh is the lowest hub in the immediate area, seek local medical assistance first.</li>
        <li><strong>Visit the SNM Hospital in Leh:</strong> The local hospital is fully equipped with state-of-the-art oxygen wards and medical staff specializing in altitude sickness.</li>
      </ol>
    `,
    image: '/extra/ladakh.jpeg',
    date: 'May 12, 2026',
    author: 'Tashi Golo',
    tags: ['Ladakh', 'Travel Tips', 'Health & Safety', 'Leh'],
    category: 'Ladakh',
    readTime: '6 Min Read'
  },
  {
    id: 'kashmir-best-time-to-visit',
    title: 'Best Time to Visit Kashmir: A Complete Season-by-Season Travel Guide',
    slug: 'best-time-to-visit-kashmir-seasons-guide',
    snippet: 'Discover the best month to visit Kashmir. From spring tulip blooms and lush green summer valleys to golden autumn chinars and winter ski fields in Gulmarg, here is your ultimate Kashmir seasonal guide.',
    content: `
      <h2>Kashmir: The Year-Round Paradise on Earth</h2>
      <p>Kashmir is a destination that transforms completely with every passing season. From the vibrant flower carpets of spring and lush alpine meadows of summer to the golden foliage of autumn and deep snow blankets of winter, there is no "wrong" time to visit. However, the best time to plan your Kashmir tour depends entirely on what kind of landscapes and experiences you wish to collect.</p>

      <h3>Spring (March to May) – The Season of Blooms and Fragrance</h3>
      <p>Spring is when the Kashmir valley wakes up from its winter slumber. The snow melts from the lower valleys, giving way to fresh green grass and blooming orchards. The temperature ranges from a pleasant <strong>15°C to 25°C</strong> during the day, though nights remain chilly.</p>
      <ul>
        <li><strong>The Tulip Festival:</strong> April is the only month to witness the famous Indira Gandhi Memorial Tulip Garden in Srinagar, where millions of tulips bloom against the backdrop of the Zabarwan mountains.</li>
        <li><strong>Wildflowers & Almond Blossoms:</strong> The valley is filled with almond blossoms (Badamwari) and fields of wildflowers, making it a photographer's dream.</li>
        <li><strong>Best for:</strong> Flower lovers, honeymooners, and travelers seeking cool, comfortable sightseeing weather.</li>
      </ul>

      <h3>Summer (June to August) – Alpine Lakes and Lush Meadows</h3>
      <p>As the plains of India swelter under intense heatwaves, Kashmir offers the perfect cool escape. Summer temperatures range from <strong>20°C to 30°C</strong>. This is the prime trekking season, as high-altitude alpine passes clear of snow.</p>
      <ul>
        <li><strong>Meadows of Gulmarg & Pahalgam:</strong> The world-famous meadows are incredibly lush, perfect for pony rides, golfing, and picnics.</li>
        <li><strong>High-Altitude Trekking:</strong> The legendary Kashmir Great Lakes Trek and Tarsar Marsar Trek are fully accessible.</li>
        <li><strong>Amarnath Yatra:</strong> Thousands of pilgrims undertake the sacred cave pilgrimage during July and August.</li>
        <li><strong>Best for:</strong> Trekkers, adventure enthusiasts, and families seeking a summer vacation.</li>
      </ul>

      <h3>Autumn (September to November) – The Golden Chinar Foliage</h3>
      <p>In autumn, Kashmir undergoes a dramatic color shift. The leaves of the majestic Chinar trees turn from green to fiery yellow, orange, and finally a deep rust-red. The air is crisp, dry, and cool, with daytime temperatures hovering between <strong>12°C to 20°C</strong>.</p>
      <ul>
        <li><strong>Chinar Leaves:</strong> Walking through the Mughal Gardens or the university campus in Srinagar feels like stepping into a romantic movie scene with golden leaves carpeting the floor.</li>
        <li><strong>Saffron Harvesting:</strong> In late October, the town of Pampore turns purple as the saffron crocuses are harvested.</li>
        <li><strong>Best for:</strong> Couples, photographers, and those looking for a peaceful holiday with fewer tourist crowds and lower prices.</li>
      </ul>

      <h3>Winter (December to February) – The Winter Wonderland</h3>
      <p>If you dream of seeing deep blankets of powder snow, winter is the time to visit. Temperatures drop between <strong>-5°C to 8°C</strong>. The valleys are blanketed in pure white, and frozen lakes look magical under the winter sun.</p>
      <ul>
        <li><strong>Adventure Sports in Gulmarg:</strong> Gulmarg becomes one of Asia’s premier skiing and snowboarding hubs. The Gulmarg Gondola carries skiers up to Phase 2 (13,780 ft) for deep powder runs.</li>
        <li><strong>Cozy Houseboat Stays:</strong> Relax in hand-carved wooden houseboats equipped with traditional coal-heaters (Bukharis) and sip piping hot local pink salt tea (Noon Chai) or sweet almond Kahwa.</li>
        <li><strong>Best for:</strong> Snow lovers, skiers, and winter adventurers.</li>
      </ul>

      <h3>Seasonal Travel Summary Matrix</h3>
      <table class="table table-bordered mt-3 text-charcoal">
        <thead>
          <tr class="bg-light">
            <th>Season</th>
            <th>Months</th>
            <th>Key Attraction</th>
            <th>Ideal Gear</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Spring</strong></td>
            <td>March - May</td>
            <td>Tulip Garden, Srinagar Gardens</td>
            <td>Light jackets, sweaters</td>
          </tr>
          <tr>
            <td><strong>Summer</strong></td>
            <td>June - August</td>
            <td>Lush Meadows, High Lakes Trekking</td>
            <td>Light cotton, light cardigan</td>
          </tr>
          <tr>
            <td><strong>Autumn</strong></td>
            <td>September - November</td>
            <td>Golden Chinar Foliage, Saffron Harvest</td>
            <td>Warm jackets, woolens</td>
          </tr>
          <tr>
            <td><strong>Winter</strong></td>
            <td>December - February</td>
            <td>Skiing, Snowfall, Frozen Lakes</td>
            <td>Thermals, Down jackets, boots</td>
          </tr>
        </tbody>
      </table>
    `,
    image: '/extra/winter-kashmir.jpeg',
    date: 'April 20, 2026',
    author: 'Zeba Khan',
    tags: ['Kashmir', 'Destinations', 'Seasons', 'Houseboat'],
    category: 'Kashmir',
    readTime: '7 Min Read'
  },
  {
    id: 'spiti-vs-ladakh',
    title: 'Spiti Valley vs Ladakh: Which Himalayan Cold Desert is Right for You?',
    slug: 'spiti-valley-vs-ladakh-comparison',
    snippet: 'Stuck between a trip to Ladakh or Spiti Valley? We compare road conditions, accessibility, accommodation comfort, budget, culture, and difficulty to help you choose your next adventure.',
    content: `
      <h2>Comparing Two Iconic High-Altitude Regions</h2>
      <p>Both Ladakh and Spiti Valley are renowned high-altitude cold deserts situated in the rain shadow of the Indian Himalayas. They both feature stark bare mountains, deep blue rivers, ancient Tibetan Buddhist monasteries, and friendly local cultures. However, despite these similarities, the logistics, travel experiences, road conditions, and accommodation options of these two destinations are vastly different. Choosing between them is a matter of matching your appetite for adventure with your comfort preferences.</p>

      <h3>1. Getting There: Accessibility & Travel Logistics</h3>
      <p>The most immediate difference between the two regions is how you access them. This dictates the duration of your trip and the level of physical fatigue you might experience:</p>
      <ul>
        <li><strong>Ladakh (Leh):</strong> Highly accessible. Leh has a commercial airport (Kushok Bakula Rimpochee Airport) with daily flights from Delhi, Mumbai, and Srinagar. You can land directly in the heart of Ladakh in just over an hour. Alternatively, you can take scenic road routes via Manali or Srinagar.</li>
        <li><strong>Spiti Valley:</strong> Far more remote. There is no airport in Spiti. To reach the capital town of Kaza, you must embark on a multi-day road journey. The typical circuit starts from Shimla (ascending gradually over 2 days) or Manali (crossing the Kunzum Pass). A trip to Spiti requires a minimum of 8 to 10 days of pure road travel.</li>
      </ul>

      <h3>2. Road Conditions and Driving Difficulty</h3>
      <p>For motorcyclists and road-trippers, the quality of the roads is a defining factor:</p>
      <ul>
        <li><strong>Ladakh:</strong> The roads are managed extensively by the Border Roads Organisation (BRO). The Srinagar-Leh and Manali-Leh highways, as well as roads to Pangong Lake and Nubra Valley, are largely smooth, double-lane asphalt. While there are rugged patches on high passes, it is highly suitable for comfortable SUV rides and standard motorcycle tours.</li>
        <li><strong>Spiti Valley:</strong> Renowned for having some of the most challenging roads in the world. The stretch from Kaza to Manali (via Batal, Chhatru, and Gramphu) is practically a dirt track composed of loose gravel, boulders, and active water crossings fed by melting glaciers. It requires high-ground-clearance 4x4 vehicles and experienced riders. It is a raw, jarring adventure.</li>
      </ul>

      <h3>3. Altitude and Acclimatization Profiles</h3>
      <p>Altitude sickness is a reality in both regions, but the risk profile differs based on how you travel:</p>
      <ul>
        <li><strong>Ladakh:</strong> Flying directly to Leh (11,500 ft) causes a sudden altitude jump. A mandatory 36-hour rest period is required to prevent Acute Mountain Sickness (AMS).</li>
        <li><strong>Spiti Valley:</strong> If you travel via the Shimla route, the ascent is gradual (Shimla to Sarahan, Sangla, Kalpa, and then Kaza). This natural, slow climb allows your body to acclimatize progressively, meaning AMS is far less common upon arriving in Kaza (12,500 ft).</li>
      </ul>

      <h3>4. Accommodation and Comfort Levels</h3>
      <p>Your comfort preferences will heavily influence your choice between these two cold deserts:</p>
      <ul>
        <li><strong>Ladakh:</strong> Highly developed tourism infrastructure. You will find premium 3-star and 4-star hotels in Leh, luxury glamping sites with running hot water and heaters by Pangong Lake, and excellent dining options serving international cuisines. It is ideal for families, couples, and luxury seekers.</li>
        <li><strong>Spiti Valley:</strong> Authentic and rustic. High-end hotels are virtually non-existent in Spiti. Instead, the stay experience revolves around cozy local homestays in villages like Mud, Kibber, or Langza. You eat traditional home-cooked meals with local families and utilize basic amenities. It is perfect for backpackers and cultural purists.</li>
      </ul>

      <h3>Head-to-Head Comparison Matrix</h3>
      <table class="table table-bordered mt-3 text-charcoal">
        <thead>
          <tr class="bg-light">
            <th>Feature</th>
            <th>Leh Ladakh</th>
            <th>Spiti Valley</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Airport</strong></td>
            <td>Yes (Leh Airport)</td>
            <td>No (Nearest is Bhuntar/Shimla)</td>
          </tr>
          <tr>
            <td><strong>Road Quality</strong></td>
            <td>Good, mostly smooth asphalt</td>
            <td>Rough, gravel tracks, water crossings</td>
          </tr>
          <tr>
            <td><strong>Best for</strong></td>
            <td>Families, Groups, Bikers, Luxury Seekers</td>
            <td>Backpackers, Off-roaders, Cultural Explorers</td>
          </tr>
          <tr>
            <td><strong>Stays</strong></td>
            <td>Luxury hotels, Premium camps</td>
            <td>Local homestays, basic guesthouses</td>
          </tr>
          <tr>
            <td><strong>Crowd Level</strong></td>
            <td>High (during peak summer)</td>
            <td>Low, remote and peaceful</td>
          </tr>
        </tbody>
      </table>

      <h3>The Verdict: Which One Should You Choose?</h3>
      <p>Choose <strong>Ladakh</strong> if you want grand Himalayan scenery but prefer comfortable beds, hot running water, flight connectivity, and structured itineraries. Ladakh offers spectacular views of massive lakes and sand dunes with minimal physical hardship.</p>
      <p>Choose <strong>Spiti Valley</strong> if you want to escape the crowds, enjoy raw off-road driving adventures, interact deeply with local families in high-altitude homestays, and explore a pristine, untouched Himalayan culture that has remained unchanged for centuries.</p>
    `,
    image: '/extra/spiti-blog.jpeg',
    date: 'May 05, 2026',
    author: 'Rigzin Dorjey',
    tags: ['Adventure', 'Spiti Valley', 'Ladakh', 'Comparison'],
    category: 'Spiti Valley',
    readTime: '8 Min Read'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aravind Swamy',
    location: 'Chennai, India',
    rating: 5,
    comment: 'Our Ladakh trip with Golo Holidays was absolutely flawless! From airport pickup to acclimatization guidance, every detail was handled professionally. The SUV driver was extremely skilled on the narrow mountain passes.',
    packageTaken: 'Ultimate Ladakh Odyssey'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    location: 'London, UK',
    rating: 5,
    comment: 'The Spiti Jeep Safari was a life-changing experience. Golo Holidays arranged the most welcoming homestays in Komic and Mud village. We learned so much about the local Spitian culture. Highly recommended!',
    packageTaken: 'Spiti Valley Ultimate Jeep Safari'
  },
  {
    id: '3',
    name: 'Priyanka Sen',
    location: 'Kolkata, India',
    rating: 5,
    comment: 'Houseboat stay in Dal Lake, gondola ride in Gulmarg, and the stunning views of Betaab Valley—everything was perfectly curated. The hospitality shown by our tour coordinator Zeba was top-notch.',
    packageTaken: 'Kashmir Luxury Paradise Tour'
  }
];

export const FAQS = [
  {
    question: 'Do I need a permit to visit Ladakh?',
    answer: 'Yes, domestic and international tourists need Inner Line Permits (ILP) to visit restricted areas of Ladakh like Pangong Lake, Nubra Valley, Turtuk, and Tso Moriri. Golo Holidays takes care of obtaining all permits, which are included in your package cost.'
  },
  {
    question: 'How do I manage mobile connectivity in Ladakh?',
    answer: 'Only post-paid mobile connections work in Ladakh. BSNL, Airtel, and Jio post-paid cards provide the best coverage. Prepaid connections from other states do not work at all due to security regulations. Most hotels in Leh offer Wi-Fi, though speed can vary.'
  },
  {
    question: 'What is the best way to prevent AMS?',
    answer: 'The most effective prevention is mandatory complete bed rest for at least 24 to 36 hours upon arrival in Leh. Avoid heavy exercise, stay hydrated by drinking lots of water, and avoid alcohol. If you are flying in, you can consult a doctor about taking Diamox starting the day before your flight.'
  },
  {
    question: 'Is Spiti Valley safe for children and senior citizens?',
    answer: 'Spiti Valley involves long, bumpy road travel (8 to 10 hours daily) and stays at very high altitudes (above 12,000 ft) without quick access to major hospitals. Therefore, it is generally recommended for children above 8 years and healthy adults. For seniors, we recommend a customized slower itinerary.'
  },
  {
    question: 'What clothing should I carry for Kashmir?',
    answer: 'For spring and summer (April to August), carry light woolens for the evening and cottons for daytime. For autumn (Sept to Nov), heavy woolens are required. For winter (Dec to March), heavy thermal wear, down jackets, gloves, snow boots, and caps are essential.'
  }
];
