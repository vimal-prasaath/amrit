import eyecare from "assets/images/banners/home/ent.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/ent.png";

export const data = {
  id: "ent",
  label: "ENT",
  banner: ["Department of ENT"],
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
    mainHeader: "ENT (Ear, Nose, Throat)",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of ENT at Amrit Hospital offers specialized care for conditions affecting the ear, nose, and throat. Utilizing advanced diagnostic tools and treatment methods, we address both common and complex ENT issues. Our focus is on delivering precise and effective care, from routine evaluations to advanced surgical interventions, ensuring tailored solutions and exceptional outcomes for each patient.",
  },
};
