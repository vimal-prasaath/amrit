import eyecare from "assets/images/banners/home/dieb.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/diab.png";

export const data = {
  id: "diabetology",
  label: "Diabetology",
  banner: ["Department of Diabetology "],
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
    mainHeader: "Advanced Diabetology Care",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Diabetology at Amrit Hospital focuses on the comprehensive management of diabetes and related conditions. Leveraging cutting-edge technology and personalized treatment plans, we address both Type 1 and Type 2 diabetes. We offer expert care including glucose monitoring, lifestyle management, and preventive strategies to ensure effective and sustained control of diabetes.",
  },
};
