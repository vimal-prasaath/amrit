import eyecare from "assets/images/banners/home/neuro.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/neuro.png";

export const data = {
  id: "neurology",
  label: "Neurology",
  banner: ["Department of Neurology"],
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
    mainHeader: "Comprehensive Neurology Services",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Neurology at Amrit Hospital provides expert diagnosis and treatment for neurological conditions. Our team utilizes the latest technology to address disorders of the brain, spine, and nervous system. We are dedicated to delivering high-quality, individualized care to enhance neurological health and function. Services include advanced imaging, neurological evaluations, and tailored therapeutic interventions.",
  },
};
