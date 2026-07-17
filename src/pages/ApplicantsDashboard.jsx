import { Link } from "react-router";
import { User, GraduationCap, FileText, Clock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useApplications } from "@/context/ApplicationContext";

const ApplicantDashboard = () => {
  const { currentUser } = useAuth();
  const { application } = useApplications();
  return(

  );
};