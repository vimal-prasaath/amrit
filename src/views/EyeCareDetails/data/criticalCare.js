import eyecare from "assets/images/banners/home/cc.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/cc.png";

export const data = {
  id: "cc",
  label: "Critical Care",
  banner: ["Department of Critical Care"],
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
    mainHeader: "Intensive and Critical Care",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Critical Care at Amrit Hospital provides expert management for patients with severe and life-threatening conditions. Our team uses state-of-the-art technology and intensive monitoring to deliver comprehensive care. We focus on stabilizing patients and supporting their recovery through personalized treatment plans and multidisciplinary care, ensuring optimal outcomes in critical situations.",
  },
};
