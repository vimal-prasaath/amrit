import eyecare from "assets/images/banners/home/cardio.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/cardio.png";

export const data = {
  id: "cardio",
  label: "Cardiology",
  banner: ["Department of Cardiology"],
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
    mainHeader: "Comprehensive Cardio Care",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Cardiology at Amrit Hospital provides expert care for heart and vascular conditions. With state-of-the-art diagnostic tools and treatments, we manage both acute and chronic cardiovascular issues. Our commitment is to deliver precise, effective care tailored to each patient’s needs, from routine evaluations to complex interventions, ensuring optimal heart health and well-being.",
  },
};
