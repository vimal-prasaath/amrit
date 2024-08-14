import child from "assets/images/banners/gynoInternal/childbirth.jpg";
import critical from "assets/images/banners/gynoInternal/24hrcriticalcare.jpg";
import infert from "assets/images/banners/gynoInternal/infertilitytreatment.jpg";
import tube from "assets/images/banners/gynoInternal/tubectomy.jpg";
import hyst from "assets/images/banners/gynoInternal/histerectomy.jpg";
import lap from "assets/images/banners/gynoInternal/laproscopicsterilization.jpg";
import lapHy from "assets/images/banners/gynoInternal/laproscopichysterectoy.jpg";
import lapCy from "assets/images/banners/gynoInternal/laproscopicovariencystectomy.jpg";

import poly from "assets/images/banners/gynoInternal/papsmear.jpg";
import papSmear from "assets/images/banners/gynoInternal/papsmear.jpg";
import labservice from "assets/images/banners/gynoInternal/24hrlabservice&dedicatedultrasound.jpg";
import pc from "assets/images/banners/gynoInternal/psycologicalcouncelling.jpg";
import vacc from "assets/images/banners/gynoInternal/vaccination.jpg";

export const list = [
  {
    id: "childBirth",
    label: "Child Birth (Normal/Cesarean)",
    content: "datamap",
  },
  {
    id: "criticalCare",
    label: "24 Hrs Critical Care (Mother & Child)",
    content: "datamap",
  },
  {
    id: "infertilityTreatment",
    label: "Infertility Treatment",
    content: "datamap",
  },
  {
    id: "tubectomy",
    label: "Tubectomy (Family Planning)",
    content: "datamap",
  },
  {
    id: "hysterectomy",
    label: "Hysterectomy",
    content: "datamap",
  },
  {
    id: "laparoscopicSterilisation",
    label: "Laparoscopic Sterilisation",
    content: "datamap",
  },
  {
    id: "laparoscopicHysterectomy",
    label: "Laparoscopic Hysterectomy",
    content: "datamap",
  },
  {
    id: "laparoscopicOvarianCystectomy",
    label: "Laparoscopic Ovarian Cystectomy",
    content: "datamap",
  },
  {
    id: "polypectomy",
    label: "Polypectomy, D&C",
    content: "datamap",
  },
  {
    id: "vaccinations",
    label: "Vaccinations",
    content: "datamap",
  },
  {
    id: "papSmear",
    label: "Pap Smear",
    content: "datamap",
  },
  {
    id: "labServicesAndUltrasound",
    label: "24 Hrs Lab Service & Dedicated Ultrasound",
    content: "datamap",
  },
  {
    id: "psychologicalCounselling",
    label: "Psychological Counselling",
    content: "datamap",
  },
];

export const internalData = [
  {
    id: "childBirth",
    label: "Child Birth (Normal / Cesarean)",
    img: child,
    data: [
      {
        header: "Understanding Normal Child Birth and a Cesarean Section",
        content:
          "Childbirth is the process of delivering a baby through either Normal Vaginal Delivery or Cesarean Section (C-Section). In normal delivery, the baby passes through the birth canal, while a C-Section involves a surgical incision.",
        points: null,
      },
      {
        header: "Which Type of Child Birth is Right for You?",
        content:
          "Childbirth options are tailored to the health and circumstances of mother and baby:",
        points: [
          "Healthy Pregnancy: Normal delivery for uncomplicated pregnancies, with shorter recovery.",
          "Medical Indications: C-Section for fetal distress or breech presentation.",
          "Personal Preference: C-Section for personal reasons or past experiences.",
        ],
      },
      {
        header: "How Are Normal Delivery and C-Section Done?",
        content:
          "The delivery method is chosen based on medical advice and personal preference:",
        points: [
          "Normal Vaginal Delivery: Managed with labor monitoring, pain relief options, and guidance.",
          "Cesarean Section (C-Section): Surgical incision in the abdomen and uterus with anesthesia for comfort and safety.",
        ],
      },
    ],
  },
  {
    id: "criticalCare",
    label: "24 Hours Critical Care",
    img: critical,

    data: [
      {
        header: "What is 24 Hours Critical Care?",
        content:
          "24 Hrs Critical Care provides continuous, specialized medical attention for both mothers and their newborns, ensuring their safety and well-being around the clock.",
        points: null,
      },
      {
        header: "Who Benefits from 24 Hours Critical Care Services?",
        content:
          "24 Hrs Critical Care ensures continuous, specialized medical attention for mothers and newborns, ensuring safety and well-being:",
        points: [
          "High-Risk Pregnancies: Close monitoring and intervention for complications.",
          "Critical Newborn Care: Specialized attention for serious health conditions.",
          "Emergency Situations: Immediate care for unexpected complications during or after delivery.",
        ],
      },
      {
        header: "How is 24 Hours Critical Care Service Provided?",
        content: "Our 24 Hrs Critical Care includes:",
        points: [
          "Continuous Monitoring: Advanced equipment for vital signs.",
          "Expert Medical Team: Specialists available 24/7.",
          "Immediate Response: Rapid intervention for emergencies.",
          "Comprehensive Support: Medical and emotional care for mother and newborn.",
        ],
      },
    ],
  },
  {
    id: "infertilityTreatment",
    label: "Infertility Treatment",
    img: infert,
    data: [
      {
        header: "What is Infertility Treatment?",
        content:
          "Infertility Treatment provides specialized medical support to address challenges in conceiving. Our comprehensive approach includes follicular scans and ovulation monitoring to enhance your chances of conception.",
        points: null,
      },
      {
        header: "Who Benefits from Infertility Treatment?",
        content:
          "Infertility Treatment is designed for individuals or couples facing difficulties in conceiving. It is especially beneficial if you:",
        points: [
          "Have Difficulty Conceiving: Trying to conceive without success.",
          "Need Detailed Monitoring: Requiring precise tracking of your ovulation and follicular health.",
          "Seek Expert Guidance: Needing specialized fertility support.",
        ],
      },
      {
        header: "How is Infertility Treatment Done?",
        content: "Our infertility treatment includes:",
        points: [
          "Follicular Scans: Monitoring follicle development.",
          "Ovulation Tracking: Optimizing conception timing.",
          "Personalized Care: Customized treatment plans.",
          "Expert Support: Guidance from fertility specialists.",
        ],
      },
    ],
  },
  {
    id: "tubectomy",
    label: "Tubectomy (Family Planning)",
    img: tube,

    data: [
      {
        header: "What is Tubectomy?",
        content:
          "Tubectomy is a permanent and reliable family planning method that involves surgically closing the fallopian tubes to prevent pregnancy. This procedure offers a long-term solution for those who have decided they do not wish to have more children.",
        points: null,
      },
      {
        header: "Who Benefits from Tubectomy?",
        content:
          "Tubectomy is suitable for individuals or couples who are certain they no longer wish to conceive. It is especially ideal if you:",
        points: [
          "Seek Permanent Contraception: If you want a long-term solution for family planning without the need for ongoing birth control methods.",
          "Have Completed Family Planning: If you feel your family is complete and you wish to avoid future pregnancies.",
          "Desire a Low-Maintenance Option: If you prefer a one-time procedure over daily or monthly contraception.",
        ],
      },
      {
        header: "How is Tubectomy Done?",
        content: "Our Tubectomy involves:",
        points: [
          "Minimally Invasive Technique: Often performed using laparoscopic methods for smaller incisions and quicker recovery.",
          "Fallopian Tube Closure: The fallopian tubes are sealed or blocked to prevent eggs from traveling to the uterus.",
          "Permanent Solution: Provides a long-lasting method of contraception with a high success rate.",
          "Expert Care: Performed by experienced surgeons to ensure safety and effectiveness.",
        ],
      },
    ],
  },
  {
    id: "hysterectomy",
    label: "Hysterectomy",
    img: hyst,

    data: [
      {
        header: "What is Hysterectomy?",
        content:
          "Hysterectomy is a surgical procedure to remove the uterus, which can be performed using minimally invasive or traditional techniques. This procedure is designed to address a range of gynecological conditions, such as fibroids, endometriosis, or cancer, providing relief from symptoms and improving overall health.",
        points: null,
      },
      {
        header: "Who Benefits from Hysterectomy?",
        content:
          "Hysterectomy is suitable for individuals experiencing significant gynecological issues. It is particularly ideal if you:",
        points: [
          "Have Persistent Symptoms: If you suffer from severe symptoms like heavy bleeding, chronic pain, or pelvic pressure that has not improved with other treatments.",
          "Need Surgical Intervention: If non-surgical treatments have failed or are not appropriate for your condition.",
          "Require Comprehensive Treatment: If your condition necessitates the removal of the uterus for effective management or to prevent the progression of disease.",
        ],
      },
      {
        header: "How Hysterectomy is Done?",
        content:
          "Hysterectomy can be performed using different techniques depending on your specific needs:",
        points: [
          "Minimally Invasive: Laparoscopic or robotic-assisted hysterectomy involves small incisions and advanced technology for quicker recovery and less discomfort.",
          "Traditional Approach: Abdominal hysterectomy involves a larger incision but may be necessary for certain conditions or if a more extensive procedure is required.",
          "Tailored Procedure: The choice of technique is based on the patient’s medical condition, overall health, and the specific reasons for the surgery.",
          "Expert Care: Conducted by skilled surgeons with a focus on safety, precision, and patient recovery.",
        ],
      },
    ],
  },
  {
    id: "laparoscopicSterilisation",
    label: "Laparoscopic Sterilisation",
    img: lap,

    data: [
      {
        header: "What is Laparoscopic Sterilisation?",
        content:
          "Laparoscopic Sterilization is a minimally invasive surgical procedure designed for permanent contraception. This procedure involves blocking or sealing the fallopian tubes to prevent pregnancy, offering a reliable and effective method of family planning with a focus on reduced recovery time and minimal discomfort.",
        points: null,
      },
      {
        header: "Is Laparoscopic Sterilisation Right for You?",
        content:
          "Laparoscopic Sterilization is ideal for individuals seeking a permanent solution to birth control. It is particularly suitable if you:",
        points: [
          "Desire Permanent Contraception: Ideal for those who have decided they do not wish to have more children.",
          "Prefer Minimally Invasive Options: Suitable if you want a procedure with less recovery time and discomfort compared to traditional methods.",
          "Have Completed Family Planning: Great for individuals who have fulfilled their family planning goals and are looking for a reliable, long-term solution.",
        ],
      },
      {
        header: "How Laparoscopic Sterilisation is Done?",
        content:
          "Laparoscopic Sterilization is performed through small incisions in the abdomen using a laparoscope, a thin tube with a camera. The procedure involves:",
        points: [
          "Minimally Invasive: Utilizes small incisions, typically around 1 cm, resulting in less pain and faster recovery.",
          "Precision Technique: Advanced laparoscopic tools are used to block or seal the fallopian tubes effectively.",
          "Quick Recovery: Most patients experience a swift recovery, often resuming normal activities within a few days.",
          "Expert Care: Performed by skilled surgeons with a focus on patient comfort and safety.",
        ],
      },
    ],
  },
  {
    id: "laparoscopicHysterectomy",
    label: "Laparoscopic Hysterectomy",
    img: lapHy,

    data: [
      {
        header: "What is Laparoscopic Hysterectomy?",
        content:
          "Laparoscopic Hysterectomy is a modern, minimally invasive surgical procedure for removing the uterus. Using advanced laparoscopic techniques, this approach offers reduced recovery times and minimized surgical risks compared to traditional hysterectomy methods, ensuring a smoother and more efficient recovery process.",
        points: null,
      },
      {
        header: "Who Benefits from Laparoscopic Hysterectomy?",
        content:
          "Laparoscopic Hysterectomy is suitable for individuals requiring a hysterectomy with a focus on reduced invasiveness and quicker recovery. It is particularly ideal if you:",
        points: [
          "Need Uterine Removal: Suitable for those needing to remove the uterus due to conditions such as fibroids, endometriosis, or cancer.",
          "Prefer Minimally Invasive Surgery: Ideal for those seeking a procedure with smaller incisions and less post-operative pain.",
          "Seek Faster Recovery: Great if you want to return to daily activities sooner, with typically less downtime compared to traditional methods.",
        ],
      },
      {
        header: "How is Laparoscopic Hysterectomy Done?",
        content:
          "Laparoscopic Hysterectomy is performed using small incisions and a laparoscope, a thin, lighted tube with a camera. The procedure involves:",
        points: [
          "Minimally Invasive: Small incisions, usually around 1 cm each, result in less pain and quicker healing.",
          "Advanced Techniques: Use of a laparoscope and specialized instruments to carefully remove the uterus while minimizing damage to surrounding tissues.",
          "Precision and Safety: High-definition imaging allows for precise surgical control, reducing complications and enhancing recovery.",
          "Efficient Recovery: Most patients experience a faster recovery, often resuming normal activities within a few weeks.",
        ],
      },
    ],
  },
  {
    id: "laparoscopicOvarianCystectomy",
    label: "Laparoscopic Ovarian Cystectomy",
    img: lapCy,

    data: [
      {
        header: "What is Laparoscopic Ovarian Cystectomy?",
        content:
          "Laparoscopic Ovarian Cystectomy is a minimally invasive surgical procedure for the removal of ovarian cysts. Utilizing advanced laparoscopic techniques, this procedure is designed to effectively eliminate cysts while minimizing impact on your body, promoting faster recovery and better outcomes.",
        points: null,
      },
      {
        header: "Who Benefits from Laparoscopic Ovarian Cystectomy?",
        content:
          "Laparoscopic Ovarian Cystectomy is ideal for individuals who need to address problematic ovarian cysts with a focus on reduced invasiveness and quicker recovery. It is especially suited if you:",
        points: [
          "Have Ovarian Cysts: Effective for those with cysts causing pain, discomfort, or other symptoms.",
          "Prefer Minimally Invasive Surgery: Ideal for those seeking a procedure with smaller incisions and less post-operative discomfort.",
          "Desire Faster Recovery: Great if you want to return to normal activities swiftly, with a typically faster recovery compared to open surgery.",
        ],
      },
      {
        header: "How is Laparoscopic Ovarian Cystectomy Done?",
        content:
          "Laparoscopic Ovarian Cystectomy is performed through small incisions using a laparoscope and specialized instruments. The process involves:",
        points: [
          "Minimally Invasive: Small incisions, usually around 1 cm each, result in less pain and quicker healing.",
          "Advanced Techniques: Use of a laparoscope with high-definition imaging allows precise removal of cysts with minimal disruption to surrounding tissues.",
          "Precision and Safety: Advanced tools and techniques ensure accurate removal of cysts while preserving ovarian function.",
          "Efficient Recovery: Most patients experience a quicker recovery, with a return to normal activities typically within a few weeks.",
        ],
      },
    ],
  },
  {
    id: "polypectomy",
    label: "Polypectomy and D&C",
    img: poly,

    data: [
      {
        header: "What is Polypectomy and D&C?",
        content:
          "Polypectomy and Dilation & Curettage (D&C) are specialized procedures used to treat uterine polyps and to perform thorough diagnostic care. Polypectomy involves the removal of polyps from the uterus, while D&C involves scraping the uterine lining to address abnormal bleeding or perform diagnostic evaluation.",
        points: null,
      },
      {
        header: "Who Benefits from Polypectomy and D&C?",
        content:
          "Polypectomy and D&C are suitable for individuals who need targeted treatment for uterine issues or require detailed diagnostic care. This approach is ideal if you:",
        points: [
          "Have Uterine Polyps: Effective for removing polyps causing irregular bleeding or discomfort.",
          "Experience Abnormal Bleeding: Ideal for those with unexplained bleeding or irregular menstrual cycles.",
          "Need Diagnostic Clarity: Suitable if you require a detailed evaluation of the uterine lining for further investigation.",
        ],
      },
      {
        header: "How is Polypectomy and D&C Done?",
        content:
          "Both procedures are performed using minimally invasive techniques to ensure optimal precision and care.",
        points: [
          "Minimally Invasive: Polypectomy is often performed using hysteroscopy, which involves a thin, flexible tube inserted through the vagina to remove polyps. D&C involves scraping the uterine lining with specialized instruments.",
          "High Precision: Advanced imaging and instrumentation ensure accurate removal of polyps and thorough examination of the uterine lining.",
          "Expert Care: Procedures are conducted by experienced professionals with a focus on safety and patient comfort.",
          "Efficient Recovery: Recovery time is generally short, with most patients resuming normal activities within a few days.",
        ],
      },
    ],
  },
  {
    id: "vaccinations",
    label: "Vaccinations",
    img: vacc,

    data: [
      {
        header: "What are Vaccinations?",
        content:
          "Vaccinations are medical procedures designed to protect individuals from infectious diseases by stimulating the immune system to recognize and fight specific pathogens.",
        points: null,
      },
      {
        header: "Who Benefits from Vaccinations?",
        content:
          "Vaccinations are recommended for individuals looking to protect themselves and their loved ones from preventable diseases. Our services are ideal if you:",
        points: [
          "Need Postpartum Protection: Essential for new mothers to receive vaccines like the HPV vaccine to prevent cervical cancer and other infections.",
          "Seek Preventive Health Measures: Ideal for anyone wanting to safeguard against common infectious diseases through timely vaccinations.",
          "Prioritize Family Health: Suitable for families aiming to ensure comprehensive protection for all members, including children and adults.",
        ],
      },
      {
        header: "How Are Vaccinations Administered?",
        content:
          "Vaccinations are administered through a straightforward and efficient process designed to ensure maximum effectiveness and comfort.",
        points: [
          "Efficient Administration: Vaccines are typically given as injections, though some may be available in oral forms.",
          "Expert Care: Administered by trained healthcare professionals who ensure proper technique and monitoring for any immediate reactions.",
          "Preventive Focus: Each vaccine is selected based on your health needs and risks, providing targeted protection against specific diseases.",
          "Rapid Results: Most vaccines require minimal time for administration with a quick return to daily activities.",
        ],
      },
    ],
  },
  {
    id: "papSmear",
    label: "Pap Smear",
    img: papSmear,

    data: [
      {
        header: "What is a Pap Smear Test?",
        content:
          "A Pap Smear is a crucial screening test used to detect abnormal cells in the cervix that could potentially develop into cervical cancer. Our advanced Pap Smear services utilize liquid-based cytology (LBC) to provide precise and reliable results.",
        points: null,
      },
      {
        header: "Who Benefits from a Pap Smear Test?",
        content:
          "A Pap Smear is recommended for individuals who want to ensure early detection of potential cervical issues. It is ideal for those who:",
        points: [
          "Seek Early Detection: Essential for those who wish to identify cervical abnormalities early and prevent potential progression to cancer.",
          "Are Due for Routine Screening: Recommended for individuals within the recommended age range for cervical cancer screening, typically starting at age 21.",
          "Prioritize Preventive Health: Suitable for those committed to maintaining their reproductive health and seeking regular check-ups.",
        ],
      },
      {
        header: "How is the Pap Smear Test Done?",
        content:
          "A Pap Smear involves a straightforward procedure designed to gather and analyze cells from the cervix for any abnormalities.",
        points: [
          "Procedure: The test is performed during a pelvic examination where a small brush or spatula is used to collect cervical cells.",
          "Liquid-Based Cytology (LBC): The collected cells are then placed in a liquid medium, which enhances the accuracy of the analysis and reduces the likelihood of inadequate samples.",
          "Quick and Comfortable: The procedure typically takes only a few minutes and may involve slight discomfort but is generally well-tolerated.",
          "Results: Results are usually available within a few weeks, and any abnormalities detected will be communicated for further evaluation if necessary.",
        ],
      },
    ],
  },
  {
    id: "labServicesAndUltrasound",
    label: "24/7 Lab Services and Ultrasound",
    img: labservice,

    data: [
      {
        header: "What are 24/7 Lab Services and Ultrasound?",
        content:
          "Our 24/7 Lab Services & Ultrasound offer continuous access to essential diagnostic testing and specialized imaging.",
        points: null,
      },
      {
        header: "Who Benefits from 24/7 Lab Services and Ultrasound?",
        content:
          "These services are ideal for individuals requiring frequent or urgent diagnostic tests and imaging, particularly those who need:",
        points: [
          "Continuous Monitoring: Essential for pregnant women needing regular check-ups.",
          "Immediate Access: Suitable for those who need timely lab results.",
          "Accurate Diagnostics: Great for individuals seeking precise and reliable testing.",
        ],
      },
      {
        header:
          "What Tests/Procedures Are Available in 24/7 Lab Services and Ultrasound?",
        content:
          "Our 24/7 Lab Services and Ultrasound involve streamlined procedures to ensure efficient and accurate diagnostics. Our USPs are mentioned below;",
        points: [
          "Lab Services: Quick, accurate tests with prompt results.",
          "Ultrasound Scans: Advanced imaging for detailed fetal insights.",
          "24/7 Availability: Access diagnostics anytime.",
          "Expert Care: Performed by skilled professionals for reliable results.",
        ],
      },
    ],
  },
  {
    id: "psychologicalCounselling",
    label: "Psychological Counselling",
    img: pc,

    data: [
      {
        header: "What is Psychological Counselling?",
        content:
          "Psychological Counselling provides expert support to address emotional and mental health challenges. Our service is designed to guide you through every stage of your journey, from pre-pregnancy through to postpartum.",
        points: null,
      },
      {
        header: "Who Benefits from Psychological Counselling?",
        content:
          "Our psychological counselling is ideal for those seeking emotional support and mental health management during various life stages. It is beneficial in the following cases:",
        points: [
          "Planning Pregnancy: Mental and emotional preparation.",
          "During Pregnancy: Handling emotional changes and stress.",
          "Postpartum: Managing new parenthood challenges, including depression and anxiety.",
          "Emotional Challenges: Support for ongoing mental health concerns.",
        ],
      },
      {
        header: "How is Psychological Counselling Done?",
        content:
          "Our psychological counselling services are delivered through a combination of individual and group sessions, utilizing a range of therapeutic techniques.",
        points: [
          "Personalized Sessions: One-on-one sessions to address your emotions.",
          "Evidence-Based Techniques: Therapeutic methods to help manage stress, anxiety, depression, etc.",
          "Continuous Support: Ongoing support through all stages of your journey.",
          "Compassionate Care: Delivered by experienced professionals.",
        ],
      },
    ],
  },
  {
    id: "colposcopyAndBiopsy",
    label: "Colposcopy and Biopsy",
    data: [
      {
        header: "What is Colposcopy and Biopsy?",
        content:
          "Colposcopy and biopsy are diagnostic procedures used to examine and sample the cervical tissue for abnormal cells. Colposcopy involves the use of a special microscope to closely examine the cervix, while a biopsy involves taking a small tissue sample for further analysis.",
        points: null,
      },
      {
        header: "Who Benefits from Colposcopy and Biopsy?",
        content:
          "Colposcopy and biopsy are suitable for individuals who require a detailed examination of cervical tissue. This approach is ideal if you:",
        points: [
          "Have Abnormal Pap Smear Results: Effective for investigating irregularities detected in a Pap smear.",
          "Show Symptoms: Ideal if you have symptoms such as abnormal bleeding or discharge that need further evaluation.",
          "Need Diagnostic Information: Suitable if you require a precise diagnosis to guide further treatment or management.",
        ],
      },
      {
        header: "How is Colposcopy and Biopsy Done?",
        content:
          "Colposcopy and biopsy are performed using specialized instruments and techniques to ensure accuracy and patient comfort.",
        points: [
          "Colposcopy: A colposcope, a specialized microscope, is used to magnify and illuminate the cervix for detailed examination.",
          "Biopsy: A small tissue sample is taken from the cervix for further analysis, typically done during the colposcopy procedure.",
          "Precision and Care: Procedures are conducted with precision to ensure accurate results and minimize discomfort.",
          "Recovery: Recovery is generally quick, with most patients resuming normal activities shortly after the procedure.",
        ],
      },
    ],
  },
  {
    id: "hysteroscopy",
    label: "Hysteroscopy",
    data: [
      {
        header: "What is Hysteroscopy?",
        content:
          "Hysteroscopy is a minimally invasive procedure used to examine the inside of the uterus. Utilizing a hysteroscope, a thin, lighted tube, this procedure allows for direct visualization and potential treatment of uterine abnormalities, such as polyps or fibroids.",
        points: null,
      },
      {
        header: "Who Benefits from Hysteroscopy?",
        content:
          "Hysteroscopy is suitable for individuals needing a detailed examination of the uterine cavity. It is particularly ideal if you:",
        points: [
          "Experience Abnormal Bleeding: Effective for investigating irregular or heavy bleeding.",
          "Have Uterine Abnormalities: Ideal for diagnosing or treating conditions such as polyps, fibroids, or abnormal growths.",
          "Require Diagnostic Insight: Suitable if you need a detailed assessment of the uterine lining to guide treatment or management.",
        ],
      },
      {
        header: "How is Hysteroscopy Done?",
        content:
          "Hysteroscopy is performed using a hysteroscope inserted through the vagina and cervix into the uterus. The procedure involves:",
        points: [
          "Minimally Invasive: The hysteroscope is inserted through the vaginal canal, requiring no external incisions.",
          "Detailed Examination: Provides a clear view of the uterine cavity, allowing for accurate diagnosis and potential treatment.",
          "Expert Care: Performed by experienced professionals with a focus on patient comfort and precision.",
          "Quick Recovery: Most patients recover swiftly and can return to normal activities within a few days.",
        ],
      },
    ],
  },
];

export const listheader = "Our  Gynae Care Services";

export const gynoInternal = { list, internalData, listheader };
