import {
  GraduationCap,
  ClipboardList,
  FileText,
  CalendarDays,
  BadgeCheck,
  CircleHelp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

function Admissions() {
  const steps = [
    {
      title: "Choose a Programme",
      description:
        "Browse our faculties and programmes to find the course that matches your career goals.",
    },
    {
      title: "Create an Account",
      description:
        "Register as an applicant to access your personalized admissions dashboard.",
    },
    {
      title: "Complete Your Application",
      description:
        "Fill in your application details and upload the required documents.",
    },
    {
      title: "Track Your Application",
      description:
        "Receive updates and view your admission decision from your dashboard.",
    },
  ];

  const documents = [
    "Academic Certificates",
    "Academic Transcripts",
    "National ID / Passport",
    "Passport-size Photograph",
    "Birth Certificate (if required)",
    "Recommendation Letters (Postgraduate)",
  ];

  const faqs = [
    {
      question: "How do I apply?",
      answer:
        "Click the Apply Now button, create an applicant account, and complete the online application form.",
    },
    {
      question: "Can I edit my application?",
      answer:
        "Yes. You may edit your application until it has been submitted.",
    },
    {
      question: "How can I track my application?",
      answer:
        "Simply log into your applicant dashboard to view your application status.",
    },
  ];

  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-widest text-amber-400 font-semibold">
            Bridgeview University
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Admissions
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-200 leading-8">
            Take the first step toward achieving your academic and career goals.
            Learn about our admission requirements, application process, and
            begin your journey today.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">
            <Link
              to="/StudyLevel"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold transition" >
              Apply Now
            </Link>

            <Link
              to="/programmes"
              className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg transition"
            >
              Explore Programmes
            </Link>
          </div>

        </div>
      </section>

      {/* WHY APPLY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-slate-900 text-center">
            Why Choose Bridgeview?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-white rounded-xl shadow-lg p-8">
              <GraduationCap className="text-amber-400" size={40} />
              <h3 className="font-bold text-xl mt-5">
                Quality Education
              </h3>
              <p className="text-gray-600 mt-3">
                Industry-focused programmes delivered by experienced lecturers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <BadgeCheck className="text-amber-400" size={40} />
              <h3 className="font-bold text-xl mt-5">
                Career Ready
              </h3>
              <p className="text-gray-600 mt-3">
                Gain practical skills through internships and hands-on learning.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <ClipboardList className="text-amber-400" size={40} />
              <h3 className="font-bold text-xl mt-5">
                Modern Facilities
              </h3>
              <p className="text-gray-600 mt-3">
                Study in modern laboratories, libraries, and innovation spaces.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <CalendarDays className="text-amber-400" size={40} />
              <h3 className="font-bold text-xl mt-5">
                Flexible Intakes
              </h3>
              <p className="text-gray-600 mt-3">
                Multiple admission intakes throughout the year.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* APPLICATION STEPS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-slate-900">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-slate-200 p-8 hover:shadow-xl transition"
              >
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ENTRY REQUIREMENTS */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Entry Requirements
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            {["Undergraduate", "Postgraduate", "Doctoral"].map((level) => (
              <div
                key={level}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-slate-900 text-white p-5">
                  <h3 className="text-2xl font-bold">
                    {level}
                  </h3>
                </div>

                <ul className="p-6 space-y-3 text-gray-700">
                  <li>✔ Academic qualifications</li>
                  <li>✔ Official transcripts</li>
                  <li>✔ Valid identification</li>
                  <li>✔ Programme-specific requirements</li>
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-14">
            Required Documents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-4 bg-slate-50 rounded-lg p-5 shadow"
              >
                <FileText className="text-amber-400" />
                <span>{doc}</span>
              </div>
            ))}

          </div>

        </div>
    </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Begin Your Journey?
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Apply today and take the first step toward a rewarding future at
            Bridgeview University.
          </p>

          <Link
            to="/study-level"
            className="inline-flex items-center gap-3 mt-10 bg-amber-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition">
            Apply Now
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Admissions;