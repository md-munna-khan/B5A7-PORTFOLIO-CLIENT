import { getUserSession } from "@/helpers/getUserSession";
import Image from "next/image";

const DashboardHomePage = async () => {
  const session = await getUserSession();
  console.log(session)

  return (
    <div className="w-full border-2 min-h-screen flex flex-col justify-center items-center">
      <Image
        src={session?.user?.picture || "/my img.jpg"} 
        alt={session?.user?.name || "User Image"}
        width={300}
        height={300}
        className="rounded-full"
      />
      <h1 className="text-4xl">{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>

      {/* <h1>Welcome To My Dashboard!</h1> */}
    </div>
  );
};

export default DashboardHomePage;
