const UserManagement = () => {
  const dumyUsers = [
    {
      name: "노기훈",
      states: "nomal",
      job: "maker",
      email: "563710@naver.com",
    },
    {
      name: "박주영",
      states: "nomal",
      job: "user",
      email: "qkrwndud@naver.com",
    },
    {
      name: "김우주",
      states: "nomal",
      job: "user",
      email: "rladnwn@naver.com",
    },
    {
      name: "이현종",
      states: "nomal",
      job: "maker",
      email: "dlguswhd@naver.com",
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 overflow-x-auto">
        <thead className="w-full bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              회원목록
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              상태
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>
          </tr>
        </thead>
        <tbody className="w-full divide-y divide-gray-100 border-t border-gray-100">
          {dumyUsers.map((item, index) => {
            return (
              <tr className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">{item.name}</div>
                    <div className="text-gray-400">{item.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    {item.states}
                  </span>
                </td>
                <td className="px-6 py-4">Product Designer</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      {item.job}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                      Develop
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4"></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
