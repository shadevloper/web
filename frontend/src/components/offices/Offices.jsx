import "./Offices.css";

const offices = [
  {
    title: "Kochi Office",
    text: `2nd Floor SKV Arcade, Metro Pillar 477
Near Changampuzha Park Metro Station
Edappally Rd, Ernakulam, Kerala 682025
📞 +91 9072722532
✉ contact@amsteroverseas.in`
  },
  {
    title: "Main Office (Kottayam)",
    text: `3rd Floor Carakkattu Manipuzha Plaza
Manipuzha Junction, Kottayam
Kerala 686013
📞 +91 8590623456
✉ contact@amsteroverseas.in`
  },
  {
    title: "IELTS Training (DL School)",
    text: `Dallas Language School
2nd Floor SKV Arcade, Kochi
📞 9072624912 , 9072178888
✉ contact@amsteroverseas.in`
  },
  {
    title: "Kollam Office",
    text: `Basheer Building Opp Style Union,
Polayathodu, Kollam 691021
📞 8086019456`
  },
  {
    title: "Thrissur Office",
    text: `3rd Floor Grand Mall MG Road
Poothole, Thrissur 680004
📞 8086560099`
  },
  {
    title: "Trivandrum Office",
    text: `Dhakshina Tower, Nalanchira
Trivandrum 695044
📞 9288008755`
  },
   {
    title: "Abu Dhabi",
    text: `Amster Group Room No-B 801 lulu center building
Opp.Sheraton Hotel, Abu Dhabi, United Arab Emirates
📞 +971 509049345
📞 +971 509049345`
  },
   {
    title: "Dubai",
    text: `Office No. 0216,2nd Floor, Hamsah A Building,
Near Burjman Metro Station,Al Karama, Dubai
📞 +971 509049345`
  },
   {
    title: "Associate Office Australia",
    text: `Evox Migration and Education Services association Amster immigration
94/10 Sleeper Lane Cockburn Central WA 6164 Australia
✉ contact@amsteroverseas.in `
  }, {
    title: "Legal office Canada",
    text: `P&R Immigration 2985 Drew Rd, Suite 216, Unit 8,9, Mississauga, ON, L4T0A4,Canada
✉ contact@amsteroverseas.in `
  },
   {
    title: "Kozhikkode Office",
    text: ` First Floor, RF Property building, 
Mini Bypass Road, Near Mankavu Junction, 
Kozhikode, Kerala 673007
📞 8590423456
✉ contact@amsteroverseas.in `
  },
   {
    title: "Oman Office",
    text: `Pc 118, Way no 255
Building no 1//101
Bowshar, Sultanate of Oman 695044
✉ contact@amsteroverseas.in`
  },
   {
    title: "Bengaluru Office",
    text: `K R Garden, Amster Immigration Overseas, 
    1, 80 Feet Rd, Nanjappa Reddy Layout, 
    Koramangala 8th Block, Koramangala, Bengaluru, Karnataka 560095
   📞 8590423456 
✉ contact@amsteroverseas.in`
  }
];

export default function Offices() {
  return (
    <section className="networks">

      <h2>Our Worldwide Networks</h2>

      <div className="network-grid">

        {offices.map((office, i) => (
          <div className="network-card" key={i}>
            <span className="ribbon">{office.title}</span>
            <pre>{office.text}</pre>
          </div>
        ))}

      </div>

    </section>
  );
}
