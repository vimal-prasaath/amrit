import eyecare from "assets/images/banners/home/derma.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/derma.png";

export const data = {
  id: "dermatology",
  label: "Dermatology",
  banner: ["Department of Dermatology"],
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
      text: "25,000+",
      subText: "Removed",
    },
  ],
  facilityImg: facility,
  infoImg: info,
  info: {
    heder: "Super Speciality",
    // subheader: "Expert Care for a Safe Delivery",
    // point1: "EXPERT SURGEONS , ADVANCED TECHNIQUES",
    // point2: "SAFE RECOVERY, COMPASSIONATE CARE",
  },
  facility: {
    mainHeader: "Comprehensive Dermatology Care",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Dermatology and Cosmetology at Amrit Hospital specializes in treating a variety of skin, hair, and nail disorders. Using advanced technology and precise treatments, we address both acute and chronic conditions. Our aim is to provide exceptional care and achieve the best patient outcomes. We offer thorough diagnosis and treatment for conditions, including those linked to systemic illnesses and occupational dermatoses, ensuring each patient receives personalized and comprehensive care.",
  },
};
