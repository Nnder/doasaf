import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { fetchUser } from "./NewLearn";
import { auth, db } from "../shared/firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { Box } from "@mui/material";
import BasicTable from "../components/Table/Table";

export const fetchLearn = async (user: any) => {
  const queryChats = await query(
    collection(db, "learn"),
    where("email", "==", user.email),
  );

  const querySnapshot = await getDocs(queryChats);

  const promises = querySnapshot.docs.map(async (document) => {
    const d = await document.data();
    const [userData, teacherData, planeData] = await Promise.all([
      getDoc(doc(db, "users", d.user.id)).then(userDoc => userDoc.data()),
      getDoc(doc(db, "teachers", d.teacher.id)).then(teacherDoc => teacherDoc.data()),
      getDoc(doc(db, "planes", d.plane.id)).then(planeDoc => planeDoc.data())
    ]);

    return { date: d.date, email: d.email, user: userData, teacher: teacherData, plane: planeData, uid: document.id, status: d.status };
  });

  // Ожидание завершения всех промисов
  const results = await Promise.all(promises);

  return results;
};


export const Learn = () => {
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState({email: ""})
  const [learn, setLearn] = useState<any[]>([])


  useEffect(()=>{
    if(!loading){
      console.log(user?.email)
      fetchUser(user).then((data) => {
        // @ts-ignore
        setUserData(data)
      })
      
      fetchLearn(user).then((d)=>setLearn(d))
    }
    if(!user)
      setLearn([])

    console.log(userData)
  }, [user])

  console.log(learn)

  if(!learn.length)
    return (
      <Box>
        У вас нет никаких записей уроков
      </Box>
    )

  return (
    <Box sx={{
      p:1
    }}>
      <Box>
        <BasicTable rows={learn}/>
      </Box>

    </Box>
  )
}
