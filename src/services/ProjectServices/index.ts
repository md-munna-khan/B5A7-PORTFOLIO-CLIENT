export const getProjectById = async (projectId:string)=>{
      const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`);
return  await result.json();
}
