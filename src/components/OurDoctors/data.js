import d1 from "assets/images/doctors/1.jpg";
import d23 from "assets/images/doctors/23.jpg";
import d2 from "assets/images/doctors/2.jpg";

import d3 from "assets/images/doctors/3.jpg";
import d4 from "assets/images/doctors/4.jpg";
import d5 from "assets/images/doctors/5.jpg";
import d6 from "assets/images/doctors/6.jpg";
import d7 from "assets/images/doctors/7.jpg";
import d8 from "assets/images/doctors/8.jpg";
import d9 from "assets/images/doctors/9.jpg";
import d10 from "assets/images/doctors/10.jpg";

import d11 from "assets/images/doctors/11.jpg";
import d12 from "assets/images/doctors/12.jpg";
import d13 from "assets/images/doctors/13.jpg";
import d14 from "assets/images/doctors/14.jpg";
import d15 from "assets/images/doctors/15.jpg";
import d16 from "assets/images/doctors/16.jpg";
import d17 from "assets/images/doctors/17.jpg";
// import d18 from "assets/images/doctors/18.jpg";
import d19 from "assets/images/doctors/19.jpg";
import d20 from "assets/images/doctors/20.jpg";
import d21 from "assets/images/doctors/21.jpg";
import d22 from "assets/images/doctors/22.jpg";
import d24 from "assets/images/doctors/24.jpg";
import d25 from "assets/images/doctors/25.jpg";
import d26 from "assets/images/doctors/26.jpg";
import d27 from "assets/images/doctors/27.jpg";

export const departmentConstants = {
  OPTHOMOLOGY: "opthomology",
  ORTHO: "ortho",
  PEDIATRICS: "pediatrics",
  GYNO: "gyno",
  DERMA: "dermatology",
  INTERNAL_MEDICINE: "internalMedicine",
  DIBETOLOGY: "diabetology",
  GEN_SURGERY: "generalSurgery",
  ENT: "ent",
  CARDIO: "cardiology",
  NEPHRO: "nephrology",
  NEURO: "neurology",
  PHYSIO: "physiotherapy",
  GASTRO: "gastroenterology",
  RADIO: "radiology",
  CC: "criticalCare",
};

export const data = [
  {
    name: "Dr. M. Sohanraj",
    specialist: "Senior Ophthalmology",
    hospitals: "Amrit Hospitals",
    img: d23,
    id: departmentConstants.OPTHOMOLOGY,
    url: "/department-internal/opthomology/smileProSurgery",
  },
  {
    name: "Dr. Lalit Kumar S",
    specialist: "Chief Cataract, Cornea, Refractive Surgeon",
    hospitals: "Amrit Hospital",
    img: d16,
    id: departmentConstants.OPTHOMOLOGY,
    url: "/department-internal/opthomology/cataract",
  },
  {
    name: "Dr. Vimala Sohanraj",
    specialist: "Obstetrics & Gynaecology",
    hospitals: "Amrit Hospitals",
    img: d9,
    id: departmentConstants.GYNO,
    url: "/department-internal/gyno/childBirth",
  },
  {
    name: "Dr. Shalini Lalit Kumar",
    specialist: "Consultant Obstetrics & Gynaecology",
    hospitals: "Amrit hospitals",
    img: d20,
    id: departmentConstants.GYNO,
    url: "/department-internal/gyno/childBirth",
  },

  {
    name: "Dr. Sonal Rajesh Kumar",
    specialist: "Consultant Physician",
    hospitals: "Amrit Hospitals",
    img: d21,
    id: departmentConstants.INTERNAL_MEDICINE,
    otherDepart: [departmentConstants.DIBETOLOGY],
    url: "/department-internal/general/internalMedicine",
  },
  {
    name: "Dr. Chetan Kumar",
    specialist: "Consultant Pediatrician & Neonatologist",
    hospitals: "Amrit Hospitals",
    img: d12,
    id: departmentConstants.PEDIATRICS,
    url: "department-internal/pediatrics/generalPaediatrics",
  },
  {
    name: "Dr. S. Rajesh Kumar",
    specialist: "FVRS Vitreo - Retinal surgeon",
    hospitals: "Amrit Hospitals",
    img: d1,
    id: departmentConstants.OPTHOMOLOGY,
    url: "/department-internal/opthomology/retina",
  },
  {
    name: "Dr. Rakesh Kothari",
    specialist: "Consultant pediatrician & Neonatologist",
    hospitals: "Amrit Hospitals",
    img: d13,
    id: departmentConstants.PEDIATRICS,
    url: "/department-internal/pediatrics/generalPaediatrics",
  },

  {
    name: "Dr. B. Hugmi",
    specialist: "Internal medicine, Diabetology, Endocrine",
    hospitals: "Amrit Medical Centre",
    img: d2,
    id: departmentConstants.INTERNAL_MEDICINE,
    url: "/department-internal/general/internalMedicine",
  },
  {
    name: "Dr. Ashish Chopra",
    specialist: "Consultant Cardiologist",
    hospitals: "Amrit Hospitals",
    img: d19,
    id: departmentConstants.CARDIO,
    url: "department-internal/general/cardiology",
  },
  {
    name: "Dr. Elizabeth",
    specialist: "Consultant physiotherapist",
    hospitals: "Amrit medical centre",
    img: d22,
    id: departmentConstants.PHYSIO,
    url: "/department-internal/general/physiotherapy",
  },

  {
    name: "Dr. S Rajesh MBBS, DA, DNB, FIPM",
    specialist:
      "Senior Consultant Anaesthesiologist & Intensivist, Interventional pain management specialist",
    hospitals: "Amrit medical centre",
    img: d15,
    id: departmentConstants.CC,
    url: "/department-internal/general/criticalCare",
  },
  {
    name: "Dr. Gowri",
    specialist: "Consultant Pathologist",
    hospitals: "Amrit Hospitals",
    img: d14,
    id: departmentConstants.GEN_SURGERY,
    url: "/department-internal/general/generalSurgery",
  },

  {
    name: "Dr. Syed",
    specialist: "Consultant Anaesthetic",
    hospitals: "Amrit Hospitals",
    img: d11,
    id: departmentConstants.CC,
    url: "/department-internal/general/criticalCare",
  },
  {
    name: "Dr. Roshan Kumar",
    specialist: "Consultant Pulmonologist",
    hospitals: "Amrit Hospitals",
    img: d10,
    id: departmentConstants.GEN_SURGERY,
    url: "/department-internal/general/generalSurgery",
  },
  {
    name: "Dr. Vikas Chandrakant",
    specialist: "General & Laparoscopic surgeon",
    hospitals: "Amrit Hospitals",
    img: d5,
    id: departmentConstants.GEN_SURGERY,
    url: "/department-internal/general/generalSurgery",
  },
  {
    name: "Dr. Madhavi Yadav",
    specialist: "ENT surgeon",
    hospitals: "Amrit medical centre",
    img: d8,
    id: departmentConstants.ENT,
    url: "/department-internal/general/ent",
  },
  {
    name: "Dr. Bharat L",
    specialist: "Knee & Hip Replacement surgeon",
    hospitals: "Amrit Hospitals",
    img: d6,
    id: departmentConstants.ORTHO,
    url: "/department-internal/ortho/totalKneeReplacement",
  },
  {
    name: "Dr. Suraj J. Babar",
    specialist: "Sports, Implant Orthopaedic surgeon",
    hospitals: "Amrit Hospitals",
    img: d7,
    id: departmentConstants.ORTHO,
    url: "/department-internal/ortho/jointReplacement",
  },

  {
    name: "Dr. D. Rajasekaran",
    specialist: "General physician",
    hospitals: "Amrit Hospitals",
    img: d4,
    id: departmentConstants.INTERNAL_MEDICINE,
    url: "/department-internal/general/internalMedicine",
  },
  {
    name: "Dr. O. Chandrakant",
    specialist: "General & Laparoscopic surgeon",
    hospitals: "Amrit Hospitals",
    img: d3,
    id: departmentConstants.GEN_SURGERY,
    url: "/department-internal/general/generalSurgery",
  },

  {
    name: "Dr. Vigneswaran.p",
    specialist: "Pediatric Orthopaedics Deformity correction",
    hospitals: "Amrit Medical centre",
    img: d17,
    id: departmentConstants.ORTHO,
    url: "/department-internal/ortho/jointReplacement",
  },
  {
    name: "Dr. Roopesh Jain",
    specialist: "Diabetologist, MBBS, MDRC",
    hospitals: "Amrit Medical centre",
    img: d24,
    id: departmentConstants.DIBETOLOGY,
    url: "/department-internal/general/diabetology",
  },
  {
    name: "Prof.Dr.S.Vinothkanna",
    specialist: "Senior Consultant Neurologist, MD.,DM.,(Neuro)",
    hospitals: "Amrit Medical centre",
    img: d25,
    id: departmentConstants.NEURO,
    url: "department-internal/general/neurology",
  },
  {
    name: "Dr. Hassan",
    specialist: "Consultant Radiologist",
    hospitals: "Amrit Medical centre",
    img: d26,
    id: departmentConstants.RADIO,
    url: "department-internal/general/radiology",
  },
  {
    name: "Dr. Aditya Shah",
    specialist: "D.M., Medical Gastroenterology M.D., General Medicine",
    hospitals: "Amrit Medical centre",
    img: d27,
    id: departmentConstants.GASTRO,
    url: "department-internal/general/gastroenterology",
  },
  {
    name: "Dr. Raghul M",
    specialist: "Pediatric Surgeon MS, DNB, FMAS",
    hospitals: "Amrit Medical centre",
    img: d27,
    id: departmentConstants.PEDIATRICS,
    url: "department-internal/pediatrics/paediatricsSurgery",
  },
];
