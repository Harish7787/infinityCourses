import React from "react";
import BackButton from "./BackButton";

const RestoreUsers = () => {

  return (
    <div className="space-y-6">

      <BackButton />

      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 shadow">

        <h2 className="text-2xl font-bold mb-4">
          Restore Users
        </h2>

        <p className="text-slate-500 mb-6">
          View all deleted users and restore them.
        </p>

        <table className="w-full">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {/* deleted users */}

            <tr>

              <td>John Doe</td>

              <td>john@gmail.com</td>

              <td>

                <button
                  className="
                    bg-green-600
                    text-white
                    px-4 py-2
                    rounded-xl
                  "
                >
                  Restore
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RestoreUsers;