const initialMessages = [
  { id: '1', type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur.' },
  {
    id: '2',
    type: 'received',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
  { id: '3', type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur.' },
  {
    id: '4',
    type: 'received',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
  { id: '5', type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur.' },
  {
    id: '6',
    type: 'received',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
  { id: '7', type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur.' },
  {
    id: '8',
    type: 'received',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const data = [
  {
    crop: 'Wheat',
    title: 'Powdery Mildew',
    content:
      'Powdery mildew is a common fungal disease affecting wheat crops, particularly during the early tillering stage. Farmers may observe white, powdery patches on the upper leaf surfaces, which later spread to stems and leaf sheaths. If not treated promptly, this can severely affect grain quality and yield. To manage this condition, apply Propiconazole 25% EC at a dosage of 250 ml per acre, diluted in 200 liters of water. Ensure even spray coverage across affected foliage. It is recommended to treat at the first sign of infection, ideally in dry weather conditions. Avoid application before rainfall or during high humidity periods.',
  },
  {
    crop: 'Wheat',
    title: 'Yellow Rust',
    content:
      'Yellow rust, also known as stripe rust, appears as yellowish-orange stripes of spores on the leaves and leaf sheaths. It spreads rapidly under cool and humid conditions, especially in early winter. Effective control involves spraying Tebuconazole 25.9% EC at a dosage of 300 ml per acre. Application should begin when the initial rust spots appear, and repeated after 12–15 days if conditions persist. Timely application can prevent heavy losses and reduce the risk of epidemic outbreaks.',
  },
  {
    crop: 'Rice',
    title: 'Bacterial Leaf Blight (BLB)',
    highlight: true,
    content:
      'Bacterial Leaf Blight is one of the most damaging rice diseases, especially in monsoon-affected regions. Initial symptoms include yellowing of leaf tips and water-soaked lesions that expand quickly. For effective management, use a combination of Streptomycin Sulfate and Tetracycline at a rate of 100 grams per acre. Early intervention is crucial, particularly during the active tillering stage. Ensure proper drainage and avoid excessive nitrogen fertilization, which can promote disease development.',
  },
  {
    crop: 'General',
    title: 'General Guidelines',
    content:
      'Yellow rust, also known as stripe rust, appears as yellowish-orange stripes of spores on the leaves and leaf sheaths. It spreads rapidly under cool and humid conditions, especially in early winter. Effective control involves spraying Tebuconazole 25.9% EC at a dosage of 300 ml per acre. Application should begin when the initial rust spots appear, and repeated after 12–15 days if conditions persist. Timely application can prevent heavy losses and reduce the risk of epidemic outbreaks.',
  },
  {
    crop: 'Cotton',
    title: 'Bollworm',
    content:
      'Yellow rust, also known as stripe rust, appears as yellowish-orange stripes of spores on the leaves and leaf sheaths. It spreads rapidly under cool and humid conditions, especially in early winter. Effective control involves spraying Tebuconazole 25.9% EC at a dosage of 300 ml per acre. Application should begin when the initial rust spots appear, and repeated after 12–15 days if conditions persist. Timely application can prevent heavy losses and reduce the risk of epidemic outbreaks.',
  },
  {
    crop: 'Maize',
    title: 'Downy Mildew',
    content: 'Downy mildew appears as pale green to yellow streaks...',
  },
  {
    crop: 'Rice',
    title: 'Sheath Blight',
    content:
      'Yellow rust, also known as stripe rust, appears as yellowish-orange stripes of spores on the leaves and leaf sheaths. It spreads rapidly under cool and humid conditions, especially in early winter. Effective control involves spraying Tebuconazole 25.9% EC at a dosage of 300 ml per acre. Application should begin when the initial rust spots appear, and repeated after 12–15 days if conditions persist. Timely application can prevent heavy losses and reduce the risk of epidemic outbreaks.',
  },
  {
    crop: 'Wheat',
    title: 'Leaf Spot',
    content:
      'Yellow rust, also known as stripe rust, appears as yellowish-orange stripes of spores on the leaves and leaf sheaths. It spreads rapidly under cool and humid conditions, especially in early winter. Effective control involves spraying Tebuconazole 25.9% EC at a dosage of 300 ml per acre. Application should begin when the initial rust spots appear, and repeated after 12–15 days if conditions persist. Timely application can prevent heavy losses and reduce the risk of epidemic outbreaks.',
  },
  {
    crop: 'Cotton',
    title: 'Whitefly',
    content:
      'Yellow rust, also known as stripe rust, appears as yellowish-orange stripes of spores on the leaves and leaf sheaths. It spreads rapidly under cool and humid conditions, especially in early winter. Effective control involves spraying Tebuconazole 25.9% EC at a dosage of 300 ml per acre. Application should begin when the initial rust spots appear, and repeated after 12–15 days if conditions persist. Timely application can prevent heavy losses and reduce the risk of epidemic outbreaks.',
  },
];
const menuItems = [
  {
    title: 'Personal Information',
    icon: 'person-outline',
    nav_link: 'personal_information',
  },
  {
    title: 'Subscription Plan',
    icon: 'card-outline',
    nav_link: 'current_plan',
  },
  {
    title: 'Change Password',
    icon: 'lock-closed-outline',
    nav_link: 'change_password',
  },
  {
    title: 'Privacy Policy',
    icon: 'document-text-outline',
    nav_link: 'privacy_policy',
  },
  {
    title: 'Terms & Conditions',
    icon: 'document-text-outline',
    nav_link: 'terms_and_conditions',
  },
];

const plans = [
  { title: 'Monthly', price: '$9.99', discount: '' },
  { title: 'Quarterly', price: '$24.99', discount: 'Save 15%' },
  { title: 'Biannual', price: '$47.99', discount: 'Save 20%' },
  { title: 'Annual', price: '$89.99', discount: 'Save 25%' },
];
export { data, initialMessages, menuItems, plans };
