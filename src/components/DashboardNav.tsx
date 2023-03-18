import DashboardNavMenu from "./DashboardNavMenu";

export default function DashboardNav() {
  return (
    <div className="w-full flex justify-between px-4 items-center  h-24 bg-sky-300 text-gray-900">
      <h2 className="font-bold text-5xl">Panel</h2>
      <DashboardNavMenu />
    </div>
  );
}
