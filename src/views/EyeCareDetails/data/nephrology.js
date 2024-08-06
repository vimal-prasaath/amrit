import eyecare from "assets/images/banners/home/nephro.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/nephro.png";

export const data = {
  id: "nephrology",
  label: "Nephrology",
  banner: ["Department of Nephrology"],
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
    mainHeader: "Advanced Nephrology Care",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Nephrology at Amrit Hospital offers specialized care for kidney and urinary tract conditions. Utilizing advanced diagnostic and treatment technologies, we address both acute and chronic renal issues with precision.Our goal is to provide comprehensive, personalized care to enhance kidney function and overall health, from early detection to advanced treatments and dialysis support.",
  },
};
