import React from "react";
import AdminLayout from "../../Component/layouts/AdminLayout";
import AnalyticsCards from "../../Component/admin/AnalyticsCards";
import CoursesTable from "../../Component/admin/CoursesTable";
import UsersData from "../../Component/admin/UsersData";


const Dashboard = () => {

  return (
    <  >

      <div className="mt-7 mb-25">
        <AnalyticsCards />
      </div>
      <div className="mt-7 mb-25">
        <CoursesTable />
      </div>

      <UsersData />

    </>
  );
};

export default Dashboard;