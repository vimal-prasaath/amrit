import eyecare from "assets/images/banners/home/internalmeds.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/internalMed.png";

export const data = {
  id: "internalMed",
  label: "Internal Medicine",
  banner: ["Department of Internal Medicine"],
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
    mainHeader: "Department of Internal Medicine ",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Internal Medicine at Amrit Hospital specializes in diagnosing and managing a wide range of adult health conditions. Utilizing advanced diagnostic technology and tailored treatments, we address both chronic and acute illnesses. We offer comprehensive care, including preventive services and management of complex conditions, to ensure optimal patient outcomes.",
  },
};
