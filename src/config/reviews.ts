/**
 * GOOGLE REVIEWS
 * ----------------------------------------------------------------------
 * Real customer reviews copied from the business's own Google Business
 * Profile listing (Shri Maayaas Fashion Designers, Madurai). This is a
 * "most relevant" sample of the full review set, not the complete list —
 * `totalReviews` reflects the count shown on the Google listing itself.
 *
 * Do not fabricate or edit review content. If new reviews need to be
 * added or the aggregate rating changes, copy them from the live Google
 * listing the same way.
 */
export interface Review {
  name: string
  quote: string
  date: string
  isLocalGuide?: boolean
  reviewCount: number
  photoCount?: number
  /** Original review was cut short by Google's "…More" truncation. */
  truncated?: boolean
  reaction?: { emoji: string; count: number }
}

export const reviewsSummary = {
  rating: 4.5,
  totalReviews: 42,
  categories: [
    { label: 'aari work', count: 2 },
    { label: 'alterations', count: 5 },
    { label: 'stitching', count: 9 },
    { label: 'trendy outfits', count: 2 },
  ],
}

export const reviews: Review[] = [
  {
    name: 'Muthulakshmi Saravanan',
    quote:
      'Aari work is excellent, with great attention to detail. They are very friendly and patient, making alterations until the blouse fits perfectly.',
    date: '4 months ago',
    isLocalGuide: true,
    reviewCount: 13,
    photoCount: 2,
  },
  {
    name: 'Shrihamshini Sudhakar',
    quote:
      'Though I appreciate the effort and hard work put into the work, I am extremely disappointed with the overall experience. The stitching and aari work were extremely poor and nowhere close to the reference design I shared. Zero…',
    date: '3 months ago',
    reviewCount: 1,
    truncated: true,
  },
  {
    name: 'B srinivasan',
    quote:
      'It was very great experience with srimaayas when my dresses found proper fittings and No words to explain ......',
    date: '2 months ago',
    reviewCount: 1,
  },
  {
    name: 'Shraddha Shetty',
    quote:
      'I have got two blouses made from her, and both of them lived up to the expections. Even after giving a little unusual design, she and her team made sure it was made how I wanted it to be. They do adjustments till you are not satisfied. Really good experience, very approachable and skillful women.',
    date: '9 months ago',
    reviewCount: 3,
    reaction: { emoji: '❤️', count: 1 },
  },
  {
    name: 'R Gurushivachandran',
    quote:
      'I really like the dress which you stitched for my daughter . The clothes fit so well and they look amazing on a curvy figure. I really appreciate this option and the quality of the goods is so great that I will order product in the future. Thank you so much for making me feel beautiful!',
    date: 'a year ago',
    reviewCount: 1,
    photoCount: 1,
  },
  {
    name: 'dhivz kewl',
    quote:
      "I seen her online reviews contacted her and gave my daughter's silk skirt for stitching. I had no idea how to stitch it asked her suggestions mam gave many suggestions so calmly explaining minute stuffs in detail i was so happy and…",
    date: '2 years ago',
    reviewCount: 6,
    photoCount: 1,
    truncated: true,
    reaction: { emoji: '🙏', count: 1 },
  },
  {
    name: 'Christina Grace',
    quote:
      'Very poor stitching. Highly disappointed. Had given one blouse for me and a patu paavadai for my daughter along with a measurement dress. It was nothing like the same measurements. Very very loose. It was really very stressful talking to the…',
    date: '2 years ago',
    isLocalGuide: true,
    reviewCount: 42,
    photoCount: 3,
    truncated: true,
  },
  {
    name: 'Madhu Mathi',
    quote: 'Very unprofessional. Exorbitant pricing. Worst timeline. Very disappointing.',
    date: 'Edited 2 months ago',
    reviewCount: 2,
  },
  {
    name: 'Jeyashri hari krishanan',
    quote:
      'I am very happy for your work. Really i satisfied ur work and apporaches . Usha mam ur customers service the way u give respect me is really nice...',
    date: 'a year ago',
    isLocalGuide: true,
    reviewCount: 8,
    photoCount: 36,
    truncated: true,
  },
  {
    name: 'Padmajaa R',
    quote:
      "Usha is incredibly detail-oriented, handling almost all the shopping, selecting the perfect materials, and seamlessly incorporating every suggestion I made. The best part about Maya's Fashion is the trial room, which makes it easy to try on…",
    date: '2 years ago',
    reviewCount: 8,
    photoCount: 3,
    truncated: true,
    reaction: { emoji: '❤️', count: 1 },
  },
  {
    name: 'Aishwarya Jeyashankar',
    quote: 'Perfect tailor with perfect fit but somewhat costly',
    date: 'Edited 4 months ago',
    reviewCount: 10,
  },
  {
    name: 'Thenmozhi abi',
    quote:
      'Really got satisfied with her perfection & resemblance of the model sent to her. Taking efforts and asking suggestions for each & every thing like choosing bead colour, size and everything. Thank you so much for making exited for my big day 🥰',
    date: '3 years ago',
    reviewCount: 3,
    photoCount: 4,
    reaction: { emoji: '❤️', count: 1 },
  },
]
