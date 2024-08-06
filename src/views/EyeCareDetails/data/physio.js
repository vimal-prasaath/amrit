import eyecare from "assets/images/banners/home/physio.png";
import aboutus from "assets/images/banners/about/optho.png";
import facility from "assets/images/banners/facility/optho.png";
import info from "assets/images/banners/info/physio.png";

export const data = {
  id: "physio",
  label: "Physio",
  banner: ["Department of Physio"],
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
    mainHeader: "Holistic Physiotherapy Care",
    // subHeader: "Expert Care for Women's Health",
    content:
      "The Department of Physiotherapy at Amrit Hospital offers comprehensive rehabilitation services to support recovery and enhance mobility. Our expert team uses advanced techniques and personalized treatment plans to address musculoskeletal and neurological conditions. We are committed to helping patients achieve optimal function and quality of life through tailored exercises, manual therapy, and pain management strategies.",
  },
};
