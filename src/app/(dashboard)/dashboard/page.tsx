import { getUserSession } from "@/helpers/getUserSession";



const  DashboardHomePage  = async () => {

  const session= await getUserSession()

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
    </div>
  );
};

export default DashboardHomePage;