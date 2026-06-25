import React from "react";
import AdminLayout from "../../Component/layouts/AdminLayout";
import AnalyticsCards from "../../Component/admin/AnalyticsCards";
import CoursesTable from "../../Component/admin/CoursesTable";
import UsersData from "../../Component/admin/UsersData";
import Analytics from "./Analytics";


const Dashboard = () => {

  return (
    <  >

      <div className=" mb-25">
        <Analytics />
      </div>
      <div className="mt-7 mb-20">
        <CoursesTable />
      </div>

      <UsersData />

    </>
  );
};

export default Dashboard;