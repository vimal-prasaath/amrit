import eyecare from "assets/images/banners/home/gen.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/gensur.png";

export const data = {
  id: "generalSurgery",
  label: "General Surgery and Laparoscopic",
  banner: ["Department of General Surgery", "and Laparoscopic"],
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
    mainHeader: "Advanced and Minimally Invasive Surgeries",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of General and Laparoscopic Surgery at Amrit Hospital provides expert care for a wide range of surgical conditions. We specialize in both traditional and minimally invasive techniques, ensuring precise and effective treatment for diverse surgical needs. Our services include comprehensive diagnostics, innovative laparoscopic procedures, and personalized care plans to support optimal recovery and long-term health.",
  },
};
