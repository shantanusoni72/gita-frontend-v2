export const getJsonLd = (chapterNumber: string, verseNumber: string) => ({
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": "https://bhagavadgita.io",
        name: "Home",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": `https://bhagavadgita.io/chapter/${chapterNumber}?page=1`,
        name: `Bhagavad Gita Chapter ${chapterNumber}`,
        image: "https://bhagavadgita.io/static/images/sribhagavadgita.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@id": `https://bhagavadgita.io/chapter/${chapterNumber}/verse/${verseNumber}`,
        name: `Bhagavad Gita Chapter ${chapterNumber} Verse ${verseNumber}`,
        image: "https://bhagavadgita.io/static/images/sribhagavadgita.jpg",
      },
    },
  ],
});
