import banner from "assets/images/banners/home/ortho.png";
import aboutus from "assets/images/banners/about/about.png";
import facility from "assets/images/banners/facility/ortho.png";
import info from "assets/images/banners/info/ortho.png";

export const data = {
  id: "ortho",
  label: "Orthopedic",
  banner: ["Expert Orthopedic Care", "Restoring Mobility, Enhancing Lives"],
  bannerSize: ["4.375rem", "2.375rem"],

  bannerImg: banner,
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
      text: "25000+",
      subText: "Specs Removed",
    },
  ],
  facilityImg: facility,
  infoImg: info,
  info: {
    heder: "SMART KNEE REPLACEMENT",
    subheader: "Get Back to Routine in 2-3 Weeks",
    point1: "Painless Surgery, Low Complication",
    point2: "Quick Recovery, Swift Discharge",
  },
  facility: {
    mainHeader: "Regain Your Quality of Life",
    subHeader: "Move Towards a Pain-Free Future",
    content:
      "Are you finding it difficult to move freely? Is your quality of life suffering due to persistent pain or discomfort? We can help you move with confidence and ease again! Experience the relief you've been dreaming of and embrace a future without limits.",
  },
  serviceHeader: "Our Orthopedic Services",
  services: [
    {
      id: "jointReplacement",
      label: "Joint Replacement Surgery",
      content:
        "Advanced & minimally invasive joint replacement surgeries to relieve pain and restore mobility, ensuring you return to your normal life swiftly and comfortably.",
    },
    {
      id: "spineSurgery",
      label: "Spine Surgery",
      content:
        "Delivering comprehensive spine surgery with orthopedic and neurological expertise, ensuring outstanding standards of care for effective and lasting results.",
    },
    {
      id: "totalKneeReplacement",
      label: "Total Knee Replacement",
      content:
        "Offering top-tier total knee replacement surgery, where damaged bone is replaced with a durable artificial joint made of metal alloys and polymers.",
    },
    {
      id: "fractureTreatment",
      label: "Fracture Treatment",
      content:
        "Providing expert fracture care, from sports injuries to complex spinal fractures. We focus on faster recovery, and comprehensive care.",
    },
  ],
};
