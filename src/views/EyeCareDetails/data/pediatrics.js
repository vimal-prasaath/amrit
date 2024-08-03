import eyecare from "assets/images/banners/home/pedia.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/pedia.png";

export const data = {
  id: "pediatrics",
  label: "Paediatrics",
  banner: [
    "Expert Paediatrics Care",
    "Nurturing Wellness",
    "Brightening Futures",
  ],
  bannerImg: eyecare,
  aboutImg: aboutus,
  about: [
    {
      text: "40+",
      subText: "Years of Experience",
    },
    {
      text: "2 Lac+",
      subText: "Surgeries",
    },
    {
      text: "4.8 Lac+",
      subText: "Happy Patients",
    },
    {
      text: "25000+",
      subText: "Specs Removed",
    },
  ],
  facilityImg: facility,
  infoImg: info,
  info: {
    heder: "Paediatric CONGENITAL HEART SURGERY",
    subheader: "Transforming Hearts, Saving Lives",
    point1: "Advanced Surgical Techniques, Minimally Invasive Procedures",
    point2: "Expert Paediatric Surgeons, Swift Recovery",
  },
  facility: {
    mainHeader: "Build Your Child a Healthy Future",
    subHeader: "Care at Every Stage of Childhood",
    content:
      "Worried about your child's health and development? Seeking compassionate and expert care for their unique needs? We are dedicated to nurturing their well-being at every stage. Experience the peace of mind that comes with exceptional care, ensuring your child thrives in every aspect of life",
  },
  serviceHeader: "Our Paediatrics Services",
  services: [
    {
      id: "generalPaediatrics",
      label: "General Paediatrics",
      content:
        "Comprehensive care for children, from routine check-ups to treating acute and chronic illnesses. We ensure your child's well-being at every stage of development.",
    },
    {
      id: "paediatricsSurgery",
      label: "Paediatrics Surgery",
      content:
        "Advanced & minimally invasive surgical procedures tailored specifically for children. You can trust our expert surgeons for compassionate and effective care.",
    },
    {
      id: "paediatricsAndNeonatalICU",
      label: "Paediatrics and Neonatal ICU",
      content:
        "State-of-the-art ICU facilities for infants and children requiring intensive care, with specialized medical teams available around the clock.",
    },
    {
      id: "childPsychology",
      label: "Child Psychology",
      content:
        "Expert psychological care for your child’s mental and emotional well-being. Our specialists help children overcome challenges and thrive.",
    },
    {
      id: "childRehabilitation",
      label: "Child Rehabilitation",
      content:
        "Specialized rehabilitation services to aid in your child’s recovery from injury or illness, promoting physical and cognitive development through therapy programs.",
    },
    {
      id: "paediatricsNutrition",
      label: "Paediatrics Nutrition",
      content:
        "Expert guidance on nutrition to ensure your child’s healthy growth. Our nutritionists work closely with families to create balanced, child-friendly dietary plans.",
    },
  ],
};
