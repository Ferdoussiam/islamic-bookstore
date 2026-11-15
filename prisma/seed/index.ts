import { PrismaClient, Language } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...\n");

  // ─── Categories ──────────────────────────────────
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "quran" },
      update: {},
      create: {
        name: "Quran",
        slug: "quran",
        description:
          "The Holy Quran — translations, tafsir, and Quranic studies.",
        image: "/images/books/quran-category.jpg",
        sortOrder: 1,
      },
    }),
    prisma.category.upsert({
      where: { slug: "hadith" },
      update: {},
      create: {
        name: "Hadith",
        slug: "hadith",
        description:
          "Collections and commentaries of the Prophet's ﷺ sayings.",
        image: "/images/books/hadith-category.jpg",
        sortOrder: 2,
      },
    }),
    prisma.category.upsert({
      where: { slug: "seerah" },
      update: {},
      create: {
        name: "Seerah",
        slug: "seerah",
        description:
          "Biography of Prophet Muhammad ﷺ and Islamic history.",
        image: "/images/books/seerah-category.jpg",
        sortOrder: 3,
      },
    }),
    prisma.category.upsert({
      where: { slug: "fiqh" },
      update: {},
      create: {
        name: "Fiqh",
        slug: "fiqh",
        description:
          "Islamic jurisprudence — rulings on worship, transactions, and daily life.",
        image: "/images/books/fiqh-category.jpg",
        sortOrder: 4,
      },
    }),
    prisma.category.upsert({
      where: { slug: "kids" },
      update: {},
      create: {
        name: "Kids",
        slug: "kids",
        description:
          "Islamic books for children — stories, activities, and learning.",
        image: "/images/books/kids-category.jpg",
        sortOrder: 5,
      },
    }),
  ]);

  const [quran, hadith, seerah, fiqh, kids] = categories;
  console.log(`✅ Created ${categories.length} categories`);

  // ─── Books ───────────────────────────────────────
  const books = [
    {
      title: "The Noble Quran — English Translation",
      slug: "the-noble-quran-english-translation",
      author: "Dr. Muhammad Muhsin Khan & Dr. Muhammad Taqi-ud-Din Al-Hilali",
      publisher: "Darussalam",
      isbn: "978-9960740799",
      language: Language.ENGLISH,
      description:
        "The Noble Quran, also known as the Hilali-Khan translation, is one of the most widely read English translations of the Quran. This edition presents the Arabic text alongside a clear, accessible English rendering. It includes extensive commentary drawn from Tafsir At-Tabari, Tafsir Al-Qurtubi, and Tafsir Ibn Kathir, providing rich context for each verse. The translation is known for its faithfulness to the original Arabic and its effort to convey the meanings in simple, modern English. This hardcover edition features a beautiful gold-embossed cover, high-quality paper, and a comprehensive index for easy reference.",
      price: 29.99,
      salePrice: 24.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=The+Noble\\nQuran",
      pages: 1120,
      stock: 50,
      featured: true,
      categoryId: quran.id,
    },
    {
      title: "Tafsir Ibn Kathir (Abridged)",
      slug: "tafsir-ibn-kathir-abridged",
      author: "Ibn Kathir",
      translator: "Safiur-Rahman Al-Mubarakpuri",
      publisher: "Darussalam",
      isbn: "978-9960892740",
      language: Language.ENGLISH,
      description:
        "Tafsir Ibn Kathir is the most renowned and accepted explanation of the Quran in the entire world. This abridged 10-volume set has been translated into English for the first time by a group of scholars under the supervision of Shaykh Safiur-Rahman Al-Mubarakpuri. The tafsir covers the entire Quran and draws upon the hadith, sayings of the companions, and classical Arabic linguistics to explain each verse. Ibn Kathir's methodology emphasizes explaining the Quran by the Quran itself, then by the Sunnah, then by the statements of the Sahabah. This edition is accessible for English-speaking Muslims while maintaining scholarly rigor.",
      price: 89.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=Tafsir\\nIbn+Kathir",
      pages: 5600,
      stock: 25,
      featured: true,
      categoryId: quran.id,
    },
    {
      title: "Sahih Al-Bukhari",
      slug: "sahih-al-bukhari",
      author: "Imam Muhammad ibn Ismail Al-Bukhari",
      translator: "Dr. Muhammad Muhsin Khan",
      publisher: "Darussalam",
      isbn: "978-9960717319",
      language: Language.ENGLISH,
      description:
        "Sahih Al-Bukhari is universally regarded as the most authentic book after the Holy Quran. Compiled by Imam Bukhari over sixteen years, this collection contains 7,563 ahadith (with repetitions) carefully selected from over 600,000 narrations. Every hadith in this collection has been meticulously verified through its chain of narrators (isnad). This 9-volume English-Arabic edition includes the full Arabic text with vowel marks, an accurate English translation, and detailed footnotes. Topics covered include faith, knowledge, prayer, fasting, pilgrimage, trade, marriage, medicine, and much more. An indispensable reference for every Muslim household.",
      price: 109.99,
      salePrice: 94.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=Sahih\\nAl-Bukhari",
      pages: 4800,
      stock: 20,
      featured: true,
      categoryId: hadith.id,
    },
    {
      title: "Riyad us-Saliheen",
      slug: "riyad-us-saliheen",
      author: "Imam Abu Zakariya Yahya ibn Sharaf An-Nawawi",
      translator: "Ustadha Aisha Bewley",
      publisher: "Turath Publishing",
      isbn: "978-1906949150",
      language: Language.ENGLISH,
      description:
        "Riyad us-Saliheen, meaning 'Gardens of the Righteous,' is one of the most widely studied hadith compilations in the Islamic world. Imam An-Nawawi carefully selected approximately 1,900 hadith from the six major collections, organizing them into chapters that cover every aspect of a Muslim's spiritual and daily life. Topics range from sincerity and repentance to patience, gratitude, remembrance of Allah, kindness to parents, and the etiquettes of eating, sleeping, and travel. Each chapter begins with relevant Quranic verses followed by carefully chosen hadith. This edition features a fresh, clear English translation with brief explanatory notes.",
      price: 22.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=Riyad\\nus-Saliheen",
      pages: 860,
      stock: 40,
      featured: false,
      categoryId: hadith.id,
    },
    {
      title: "The Sealed Nectar (Ar-Raheeq Al-Makhtum)",
      slug: "the-sealed-nectar",
      author: "Safiur-Rahman Al-Mubarakpuri",
      publisher: "Darussalam",
      isbn: "978-9960899558",
      language: Language.ENGLISH,
      description:
        "The Sealed Nectar (Ar-Raheeq Al-Makhtum) is an award-winning biography of the Prophet Muhammad ﷺ that received first prize at a worldwide competition on the Seerah held by the Muslim World League in 1979. The book presents a comprehensive and authoritative account of the Prophet's life from birth to death, covering the pre-Islamic Arabian peninsula, the early revelation, the persecution in Makkah, the migration to Madinah, the major battles, the Treaty of Hudaybiyyah, the conquest of Makkah, and the farewell pilgrimage. Written in an engaging narrative style, it draws from authentic sources and provides maps of key battles. A must-read for understanding the life of the greatest human being.",
      price: 14.99,
      salePrice: 11.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=The+Sealed\\nNectar",
      pages: 476,
      stock: 60,
      featured: true,
      categoryId: seerah.id,
    },
    {
      title: "Muhammad: His Life Based on the Earliest Sources",
      slug: "muhammad-his-life-martin-lings",
      author: "Martin Lings (Abu Bakr Siraj ad-Din)",
      publisher: "Inner Traditions",
      isbn: "978-1594771538",
      language: Language.ENGLISH,
      description:
        "Martin Lings' biography of the Prophet Muhammad ﷺ is widely regarded as one of the finest works of Seerah literature in the English language. Drawing primarily from the earliest Arabic sources — particularly Ibn Ishaq, Ibn Hisham, and the hadith collections — Lings crafts a narrative that reads like a novel while remaining scrupulously faithful to historical sources. His literary elegance and spiritual sensitivity bring to life the world of 7th-century Arabia, the character of the Prophet, and the dramatic events of early Islam. This book has introduced millions of English-speaking readers to the beauty and depth of the Prophet's life and is praised by scholars and general readers alike.",
      price: 18.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=Muhammad\\nMartin+Lings",
      pages: 384,
      stock: 35,
      featured: false,
      categoryId: seerah.id,
    },
    {
      title: "Fiqh Us-Sunnah",
      slug: "fiqh-us-sunnah",
      author: "Sayyid Sabiq",
      translator: "Muhammad Sa'eed Dabas & Jamal al-Din M. Zarabozo",
      publisher: "American Trust Publications",
      isbn: "978-0892590100",
      language: Language.ENGLISH,
      description:
        "Fiqh Us-Sunnah is a landmark work of Islamic jurisprudence that presents Islamic rulings based directly on the Quran and authentic Sunnah, rather than adhering strictly to any single school of thought. Originally written in Arabic by the renowned Egyptian scholar Sayyid Sabiq, this 5-volume set covers purification, prayer, fasting, zakat, hajj, marriage, divorce, inheritance, commercial transactions, and criminal law. What makes this work unique is its approach of presenting the evidences from the Quran and Sunnah for each ruling, along with the views of the major schools (Hanafi, Maliki, Shafi'i, Hanbali) where they differ. An essential reference for students of knowledge.",
      price: 49.99,
      salePrice: 42.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=Fiqh\\nUs-Sunnah",
      pages: 1400,
      stock: 30,
      featured: false,
      categoryId: fiqh.id,
    },
    {
      title: "The Reliance of the Traveller (Umdat al-Salik)",
      slug: "reliance-of-the-traveller",
      author: "Ahmad ibn Naqib al-Misri",
      translator: "Nuh Ha Mim Keller",
      publisher: "Amana Publications",
      isbn: "978-0915957729",
      language: Language.ENGLISH,
      description:
        "The Reliance of the Traveller is a classic manual of Islamic Sacred Law (Sharia) according to the Shafi'i school of jurisprudence. Translated and edited by the renowned scholar Nuh Ha Mim Keller, this bilingual Arabic-English edition is the first Islamic legal work in a European language to receive the certification of Al-Azhar University. The book covers every aspect of Islamic law including purification, prayer, zakat, fasting, hajj, trade, inheritance, marriage, and personal conduct. It also includes extensive appendices on topics such as Islamic spirituality (tasawwuf), the science of hadith, and biographical entries of major scholars. A comprehensive reference that belongs in every serious Islamic library.",
      price: 34.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=Reliance+of\\nthe+Traveller",
      pages: 1232,
      stock: 15,
      featured: true,
      categoryId: fiqh.id,
    },
    {
      title: "My First Quran Storybook",
      slug: "my-first-quran-storybook",
      author: "Saniyasnain Khan",
      publisher: "Goodword Books",
      isbn: "978-8178988030",
      language: Language.ENGLISH,
      description:
        "My First Quran Storybook is a beautifully illustrated collection of 42 cherished stories from the Holy Quran, retold in simple, age-appropriate language for children ages 4–10. Each story is brought to life with vibrant, full-color illustrations that capture the imagination of young readers. The stories cover the lives of prophets including Adam, Nuh, Ibrahim, Musa, Isa, and Muhammad ﷺ, as well as important Quranic events and lessons. Each story concludes with a moral lesson that children can apply to their daily lives. This hardcover edition features sturdy pages perfect for little hands and makes an ideal gift for Eid, birthdays, or as a bedtime reading companion.",
      price: 16.99,
      salePrice: 13.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=My+First\\nQuran+Storybook",
      pages: 320,
      stock: 45,
      featured: false,
      categoryId: kids.id,
    },
    {
      title: "Goodnight Stories from the Quran",
      slug: "goodnight-stories-from-the-quran",
      author: "Saniyasnain Khan",
      publisher: "Goodword Books",
      isbn: "978-8178988399",
      language: Language.ENGLISH,
      description:
        "Goodnight Stories from the Quran is a treasury of inspiring and beautifully told bedtime stories drawn from the Holy Quran. Designed for children ages 3–8, this collection presents Quranic narratives in simple, gentle language perfect for winding down at the end of the day. Each story is accompanied by stunning, colorful illustrations that bring the sacred narratives to life. From the creation of the heavens and earth to the stories of the great prophets, every page offers wisdom, wonder, and a sense of connection to Islamic heritage. The book includes a parent's note suggesting how to make the most of reading time, and each story ends with a brief prayer (dua). This beloved book has become a staple in Muslim homes around the world.",
      price: 14.99,
      coverImage: "https://placehold.co/400x600/065f46/fefdfb?text=Goodnight\\nStories",
      pages: 232,
      stock: 55,
      featured: true,
      categoryId: kids.id,
    },
  ];

  for (const book of books) {
    await prisma.book.upsert({
      where: { slug: book.slug },
      update: {},
      create: {
        title: book.title,
        slug: book.slug,
        author: book.author,
        translator: book.translator ?? null,
        publisher: book.publisher,
        isbn: book.isbn,
        language: book.language,
        description: book.description,
        price: book.price,
        salePrice: book.salePrice ?? null,
        coverImage: book.coverImage,
        images: [],
        pages: book.pages,
        stock: book.stock,
        featured: book.featured,
        published: true,
        categoryId: book.categoryId,
      },
    });
    console.log(`  📚 ${book.title}`);
  }

  console.log(`\n✅ Created ${books.length} books`);
  console.log("\n🎉 Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seeding failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
