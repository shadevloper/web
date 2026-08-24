import "./Process.css";

const steps = [
  {
    title: "Free Consultation",
    desc: "Initial assessment of your profile and eligibility",
    color: "blue",
    icon: "fa-regular fa-comment",
  },
  //   {
  //   title: "Free Consultation",
  //   desc: "Initial assessment of your profile and eligibility",
  //   color: "blue",
  //   icon: "fa-regular fa-comments",
  // },
  {
    title: "Documentation",
    desc: "Gather and prepare all required documents",
    color: "red",
    icon: "fa-regular fa-file",
  },
  {
    title: "Application",
    desc: "Submit applications to relevant authorities",
    color: "blue",
    // icon: "fa-solid fa-location-arrow",
    icon: "fa-brands fa-airbnb"
  },
  {
    title: "Visa Processing",
    desc: "Track and manage your visa application",
    color: "red",
    icon: "fa-regular fa-clock",
  },
  {
    title: "Post-Landing Support",
    desc: "Assistance with settlement and integration",
    color: "blue",
    icon: "fa-solid fa-house",
  },
];

export default function Process() {
  return (
    <div className="process-container">

      <p className="process-small">OUR PROCESS</p>
      <h1>Your Journey With Us</h1>

      <p className="process-desc">
        A simple, transparent, and efficient process to make your immigration journey smooth
      </p>

      <div className="timeline">

        {steps.map((step, i) => (
          <div className="step-box" key={i}>

            <div className={`circle ${step.color}`}>
              <i className={step.icon} aria-hidden="true"></i>
              <small>Step {i + 1}</small>
            </div>

            <h4>{step.title}</h4>
            <p>{step.desc}</p>

          </div>
        ))}

        <div className="line"></div>

      </div>

</div>
  );
}
