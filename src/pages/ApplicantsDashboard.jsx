import { Link } from "react-router";
import { User, GraduationCap, FileText, Clock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useApplications } from "@/context/ApplicationContext";

const ApplicantDashboard = () => {
  const { currentUser } = useAuth();
  const { application } = useApplications();
  return(
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Welcome */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">

          <h1 className="text-3xl font-bold text-[#0A2342]">
            Welcome,
          </h1>

          <p className="text-lg text-gray-600 mt-2">
            {currentUser?.displayName ||
              currentUser?.email}
          </p>

        </div>

        {/* Status Card */}

        <div className="bg-white rounded-2xl shadow p-8">

          {!application ? (

            <>
              <div className="flex items-center gap-4">

                <div className="bg-yellow-100 p-4 rounded-full">

                  <GraduationCap
                    className="text-yellow-600"
                    size={32}
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-[#0A2342]">

                    No Application Yet

                  </h2>

                  <p className="text-gray-600 mt-2">

                    Start your university application by
                    choosing a programme.

                  </p>

                </div>

              </div>

              <Link
                to="/faculties"
                className="inline-block mt-8 bg-[#0A2342] hover:bg-[#12355B] text-white px-6 py-3 rounded-xl"
              >
                Browse Faculties
              </Link>

            </>

          ) : (

            <>

              <div className="flex items-center gap-4">

                <div className="bg-green-100 p-4 rounded-full">

                  <Clock
                    className="text-green-600"
                    size={30}
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-[#0A2342]">

                    Application Submitted

                  </h2>

                  <p className="text-gray-600">

                    Status:
                    <span className="font-semibold text-yellow-600 ml-2">

                      {application.status}

                    </span>

                  </p>

                </div>

              </div>

              <div className="mt-8 bg-slate-100 rounded-xl p-5">

                <h3 className="font-bold text-lg">

                  Programme

                </h3>

                <p>{application.programme}</p>

                <p className="text-sm text-gray-600">

                  {application.faculty}

                </p>

              </div>

            </>

          )}

        </div>

      </div>

    </div>
  );
};

export default ApplicantDashboard;