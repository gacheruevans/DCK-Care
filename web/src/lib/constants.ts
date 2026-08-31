// Site-wide constants for DCK Care Ltd

export const SITE = {
  name: "DCK Care Ltd",
  tagline: "Delivering the care you deserve",
  description:
    "DCK Care Ltd provides professional home care services in Nottingham, UK. We offer supported living, dementia care, homecare, companionship, and more — all delivered with compassion and expertise.",
  phone: "0115 989 9122",
  email: "admin@dckcareltd.co.uk",
  address: "Lamorna Court, 35 Wollaton Rd, Beeston, Nottingham NG9 2NG, UK",
  url: "https://dckcareltd.co.uk",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Supported Living", href: "/services/supported-living" },
      {
        label: "Physical Disability Support",
        href: "/services/physical-disability-support",
      },
      { label: "Dementia Care", href: "/services/dementia-care" },
      { label: "Homecare", href: "/services/homecare" },
      { label: "Companionship", href: "/services/companionship" },
      { label: "Post Surgical Care", href: "/services/post-surgical-care" },
      { label: "Live-in Care", href: "/services/live-in-care" },
      { label: "Complex Care", href: "/services/complex-care" },
      { label: "Medication Support", href: "/services/medication-support" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
] as const;

export const SERVICES = [
  {
    slug: "supported-living",
    title: "Supported Living",
    shortDescription:
      "We offer around-the-clock care, ensuring you and your loved ones receive reliable support whenever needed.",
    description:
      "Our supported living services provide 24/7 care and assistance, enabling individuals to live as independently as possible within their own homes or supported accommodation. We focus on empowering people to make their own choices while having the safety net of professional support always available.",
    icon: "🏠",
    color: "#0D7377",
    features: [
      "24/7 care and support availability",
      "Personalised care plans",
      "Independent living skills development",
      "Community integration support",
      "Daily living assistance",
      "Emotional and social wellbeing support",
    ],
  },
  {
    slug: "physical-disability-support",
    title: "Physical Disability Support",
    shortDescription:
      "Our caregivers assist with daily tasks like mobility, eating, exercise, and grooming for those with physical challenges.",
    description:
      "We provide compassionate, professional support for individuals living with physical disabilities. Our trained caregivers assist with mobility, personal care, daily activities, and exercise routines — all designed to maintain and improve quality of life while respecting dignity and independence.",
    icon: "♿",
    color: "#14919B",
    features: [
      "Mobility assistance and transfers",
      "Personal care and grooming support",
      "Exercise and physiotherapy support",
      "Adaptive equipment guidance",
      "Meal preparation and feeding assistance",
      "Transportation and errands",
    ],
  },
  {
    slug: "dementia-care",
    title: "Dementia Care",
    shortDescription:
      "Our skilled caregivers provide exceptional support for dementia patients and their families.",
    description:
      "Our specialist dementia care team provides compassionate, person-centred support for individuals living with Alzheimer's, vascular dementia, and other forms of cognitive decline. We work closely with families to create safe, stimulating environments that foster happiness and maintain dignity.",
    icon: "🧠",
    color: "#065A5E",
    features: [
      "Specialist dementia-trained caregivers",
      "Cognitive stimulation activities",
      "Safe environment management",
      "Family support and guidance",
      "Behavioural support strategies",
      "Memory care programmes",
    ],
  },
  {
    slug: "homecare",
    title: "Homecare",
    shortDescription:
      "DCK Care Ltd provides home care from as little as 1 hour to 24 hours a day as desired by our clients.",
    description:
      "Our flexible homecare services are designed to meet your exact needs, whether you require a brief daily visit or round-the-clock support. From personal care to household tasks, meal preparation to medication management, our trained caregivers deliver professional, compassionate care in the comfort of your own home.",
    icon: "🏡",
    color: "#E8913A",
    features: [
      "Flexible care hours (1-24 hours daily)",
      "Personal care assistance",
      "Meal preparation and nutrition support",
      "Light housekeeping",
      "Medication reminders and administration",
      "Shopping and errands",
    ],
  },
  {
    slug: "companionship",
    title: "Companionship",
    shortDescription:
      "We provide care and companionship, whether it's a trip to the store, a walk in the park, or simply being by your side.",
    description:
      "Loneliness and isolation can significantly impact health and wellbeing. Our companionship services provide meaningful social interaction, whether it's enjoying a cup of tea, taking a walk, attending appointments, or simply having someone to talk to. Our companions are carefully matched to each client's interests and personality.",
    icon: "🤝",
    color: "#0D7377",
    features: [
      "Social visits and conversation",
      "Accompaniment to appointments",
      "Walks and outdoor activities",
      "Shopping trips and errands",
      "Hobby and interest engagement",
      "Emotional support and wellbeing",
    ],
  },
  {
    slug: "post-surgical-care",
    title: "Post Surgical Care",
    shortDescription:
      "Whether major or minor surgery, our able carers will give you the support you need until you recover.",
    description:
      "Recovery after surgery requires proper rest, care, and support. Our post-surgical care services ensure you have professional assistance during your recovery period, from wound care and medication management to mobility support and meal preparation. We help you heal faster in the comfort of your own home.",
    icon: "🩺",
    color: "#14919B",
    features: [
      "Wound care and monitoring",
      "Medication management",
      "Mobility and rehabilitation support",
      "Nutritious meal preparation",
      "Personal hygiene assistance",
      "Progress monitoring and reporting",
    ],
  },
  {
    slug: "live-in-care",
    title: "Live-in Care",
    shortDescription:
      "For clients needing 24-hour care, we offer customisable live-in care packages where a caregiver resides with the client.",
    description:
      "Live-in care provides a dedicated caregiver who resides with you, offering continuous support and companionship around the clock. This is an excellent alternative to residential care, allowing you to remain in your familiar surroundings while receiving comprehensive professional care tailored to your needs.",
    icon: "🏠",
    color: "#065A5E",
    features: [
      "Dedicated live-in caregiver",
      "24-hour availability and support",
      "Alternative to residential care",
      "Personalised daily routines",
      "Household management",
      "Companionship and emotional support",
    ],
  },
  {
    slug: "complex-care",
    title: "Complex Care",
    shortDescription:
      "DCK Care helps individuals with complex disabilities thrive through Positive Behaviour and Active Support.",
    description:
      "Our complex care services are designed for individuals with multiple or challenging care needs, including learning disabilities, autism, and complex physical conditions. Using Positive Behaviour Support (PBS) and Active Support methodologies, we empower individuals to participate fully in their communities and lead fulfilling lives.",
    icon: "💪",
    color: "#E8913A",
    features: [
      "Positive Behaviour Support (PBS)",
      "Active Support methodology",
      "Learning disability expertise",
      "Autism-informed care",
      "Community participation support",
      "Skill development programmes",
    ],
  },
  {
    slug: "medication-support",
    title: "Medication Support",
    shortDescription:
      "We have staff well trained to administer medication as required by our clients.",
    description:
      "Proper medication management is crucial for health and wellbeing. Our trained caregivers provide reliable medication support, from gentle reminders to full administration, ensuring prescriptions are taken correctly and on time. We work closely with healthcare professionals to maintain accurate records and monitor for any concerns.",
    icon: "💊",
    color: "#0D7377",
    features: [
      "Medication reminders and prompts",
      "Supervised medication administration",
      "Prescription management",
      "Pharmacy liaison and collection",
      "Medication record keeping",
      "Healthcare professional coordination",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Jack Deane",
    location: "Nottingham",
    quote:
      "I had an excellent experience with DCK Care Ltd! Their team was professional, attentive, and highly efficient in delivering the services I needed. They went above and beyond to ensure that everything was handled smoothly, and their communication was top-notch throughout. I'd highly recommend them to anyone looking for reliable and quality service.",
    rating: 5,
  },
  {
    name: "Rebecca Croft",
    location: "Long Eaton",
    quote:
      "DCK Care Ltd provided great service overall. The team was friendly, and they made sure my needs were met. They quickly resolved any issues and kept me updated throughout. I appreciate their dedication to customer satisfaction and will definitely consider them for future services.",
    rating: 5,
  },
  {
    name: "Jane Hetherwort",
    location: "Beeston",
    quote:
      "DCK Care Ltd exceeded my expectations! Their attention to detail and personalised approach made the entire process seamless. The staff was knowledgeable, professional, and genuinely cared about ensuring I was satisfied. I highly recommend their services to anyone looking for a hassle-free experience.",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is home care support?",
    answer:
      "Home care support services are professional assistance provided to individuals in their own homes. These services help maintain independence, health, and quality of life for those who are elderly, recovering from illness or surgery, living with chronic conditions, or disabled. Services include personal care, companionship, household support, healthcare assistance, and specialist care.",
  },
  {
    question: "Do you provide professional home care?",
    answer:
      "Yes. At DCK Care, we provide comprehensive professional home care services that go beyond basic support. We specialise in Positive Behaviour Support (PBS) and Active Support to help individuals with complex disabilities thrive in their communities. Our services include personal care, medication management, meal preparation, emotional support, and community engagement.",
  },
  {
    question: "How do I get started with DCK Care?",
    answer:
      "Getting started is simple. Contact us by phone on 0115 989 9122 or email admin@dckcareltd.co.uk. We'll discuss your specific needs and preferences, help you select the right care services, and then create a fully customised care plan designed to meet your unique requirements. Our team guides you every step of the way.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "DCK Care Ltd primarily serves the Nottingham area and surrounding regions. If you're unsure whether we cover your area, please don't hesitate to contact us and we'll be happy to discuss your requirements.",
  },
  {
    question: "Are your caregivers trained and qualified?",
    answer:
      "Absolutely. All our caregivers are carefully selected, thoroughly trained, and equipped with the skills and expertise needed to meet a wide range of client needs. Our team holds relevant qualifications and undergoes continuous professional development to maintain the highest standards of care.",
  },
] as const;

export const TRUST_STATS = [
  { label: "24/7 Care", value: "24/7", description: "Round the clock support" },
  {
    label: "Professional Team",
    value: "100%",
    description: "Trained & qualified carers",
  },
  {
    label: "Services Offered",
    value: "9+",
    description: "Comprehensive care options",
  },
  {
    label: "Based In",
    value: "Nottingham",
    description: "Serving the local community",
  },
] as const;
