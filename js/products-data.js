/**
 * Herbalife products — the ONE place to edit your product list.
 *
 * Each category has:  id, title, icon (Font Awesome class), products[]
 * Each product has:   id (unique, lowercase, no spaces), name, image, desc
 * Optional:           details: ['point one', 'point two']   -> shown as "Key points"
 *
 * Images live in the photo/ folder.
 */
const PRODUCT_CATEGORIES = [
  {
    id: "shakes",
    title: "Shakes",
    icon: "fa-solid fa-blender",
    products: [
      { id: "formula-1-vanilla-shake", name: "Formula 1 Vanilla Shake", image: "photo/formula1.webp",
        desc: "Delicious meal for healthy nutrition and weight management." },
      { id: "chocolate-shake", name: "Chocolate Shake", image: "photo/chocolate.webp",
        desc: "Rich chocolate protein mix." },
      { id: "mango-shake", name: "Mango Shake", image: "photo/mango.webp",
        desc: "Refreshing mango flavor." },
      { id: "strawberry-shake", name: "Strawberry Shake", image: "photo/strawberry.webp",
        desc: "Sweet strawberry taste." },
      { id: "dinoshake", name: "Dinoshake", image: "photo/dino.webp",
        desc: "High protein shake for kids." },
      { id: "shakemate", name: "Shakemate", image: "photo/shakemate.webp",
        desc: "Perfect blend companion for shakes." }
    ]
  },
  {
    id: "vitamins-tablets",
    title: "Vitamins Tablets",
    icon: "fa-solid fa-capsules",
    products: [
      { id: "sleep-enhance", name: "Sleep Enhance", image: "photo/sleep.webp",
        desc: "For Better Sleep." },
      { id: "skin-booster", name: "Skin Booster", image: "photo/skin.webp",
        desc: "Makes skin glow and look healthy." },
      { id: "cell-activator", name: "Cell Activator", image: "photo/cell.webp",
        desc: "Antioxidant support for a healthy ageing." },
      { id: "herbalife-calcium-tablets", name: "Herbalife Calcium Tablets", image: "photo/calcium.webp",
        desc: "Support your bones as you age." },
      { id: "joint-support", name: "Joint Support", image: "photo/joint.webp",
        desc: "Support your joints as you age." },
      { id: "multivitamin-tablets", name: "Multivitamin Tablets", image: "photo/multivitamin.webp",
        desc: "Daily essential nutrients." },
      { id: "active-fiber", name: "Active Fiber", image: "photo/fiber.webp",
        desc: "Helps improve digestion and weight balance." }
    ]
  },
  {
    id: "beauty-products",
    title: "Beauty Products",
    icon: "fa-solid fa-spa",
    products: [
      { id: "facial-cleanser", name: "Facial Cleanser", image: "photo/cleanser.webp",
        desc: "Feel fresh on every wash." },
      { id: "facial-serum", name: "Facial Serum", image: "photo/serum.webp",
        desc: "A synergy of Ayurveda's beauty oils to nourish and nurture the skin." },
      { id: "moisturizer", name: "Moisturizer", image: "photo/moisturizer.webp",
        desc: "An effective blend of authentic Ayurveda formulation and botanicals to nourish, smoothen and retain moisture in the skin." },
      { id: "facial-toner", name: "Facial Toner", image: "photo/toner.webp",
        desc: "With the refreshing feel of Mandarin splash, experience the goodness of Aloe and cucumber." }
    ]
  },
  {
    id: "teas-and-beverages",
    title: "Teas & Beverages",
    icon: "fa-solid fa-mug-saucer",
    products: [
      { id: "afresh-energy-drink", name: "Afresh Energy Drink", image: "photo/afresh.webp",
        desc: "Boost your energy and metabolism." },
      { id: "aloe-vera-juice", name: "Aloe Vera Juice", image: "photo/aloe.webp",
        desc: "Supports digestion and hydration." }
    ]
  },
  {
    id: "protein-and-fitness",
    title: "Protein & Fitness",
    icon: "fa-solid fa-dumbbell",
    products: [
      { id: "personalized-protein-powder", name: "Personalized Protein Powder", image: "photo/protein-powder.webp",
        desc: "Boost your daily protein intake." },
      { id: "rebuild-strength", name: "Rebuild Strength", image: "photo/rebuild.webp",
        desc: "Post-workout recovery drink." },
      { id: "h24-hydrate", name: "H24 Hydrate", image: "photo/hydrate.webp",
        desc: "Electrolyte drink for hydration." }
    ]
  },
  {
    id: "weight-management",
    title: "Weight Management",
    icon: "fa-solid fa-weight-scale",
    products: [
      { id: "active-fiber-complex", name: "Active Fiber Complex", image: "photo/fiber.webp",
        desc: "Supports digestive health and weight control." },
      { id: "herbal-control", name: "Herbal Control", image: "photo/control.webp",
        desc: "Boost your metabolism while feeling energetic and alert." }
    ]
  },
  {
    id: "immunity-and-health",
    title: "Immunity & Health",
    icon: "fa-solid fa-shield-heart",
    products: [
      { id: "simply-probiotic", name: "Simply Probiotic", image: "photo/simply.webp",
        desc: "2 billion ways to love your gut." },
      { id: "omega-3-capsules", name: "Omega-3 Capsules", image: "photo/omega.webp",
        desc: "Supports heart and brain health." }
    ]
  },
];
