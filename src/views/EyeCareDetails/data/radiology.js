import eyecare from "assets/images/banners/home/radio.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/gyno.png";

export const data = {
  id: "radiology",
  label: "Radiology",
  banner: ["Department of Radiology"],
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
    mainHeader: "Cutting Edge Radiology Services",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Radiology at Amrit Hospital offers advanced imaging services to diagnose and monitor various medical conditions. Using cutting-edge technology, including MRI, CT scans, and ultrasound, our team provides precise and detailed diagnostic insights. We are committed to delivering accurate results and effective imaging solutions to support comprehensive patient care and treatment planning.",
  },
};
