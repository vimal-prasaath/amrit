import eyecare from "assets/images/banners/home/gastro.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/gastro.png";

export const data = {
  id: "gastroenterology",
  label: "Gastroenterology",
  banner: ["Department of Gastroenterology"],
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
    mainHeader: "Expert Gastroenterology Care",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Gastroenterology at Amrit Hospital offers specialized care for a wide range of digestive disorders. We use state-of-the-art diagnostic tools and treatments to manage conditions affecting the stomach, intestines, liver, and pancreas. Our goal is to provide comprehensive, patient-centered care to improve digestive health and overall well-being. We offer advanced endoscopic procedures, liver function tests, and personalized treatment plans.",
  },
};
