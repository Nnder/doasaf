import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../shared/firebase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import {
  Controller,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { CarouselWidget, carouselImageITem } from "../components/Carousel/Carousel";

const defaultValues = {
  createdAt: new Date(), 
  status: "новый",
  email: "",
  phone: "",
  message: "",
};

export const createUser = async (params: any) => {
  await addDoc(collection(db, "users"), {createdAt: new Date(), status: "новый",...params});
  return {createdAt: new Date(), status: "новый",...params}
};

export const fetchUser = async (user: any) => {
  const queryChats = await query(
    collection(db, "users"),
    where("email", "==", user.email),
  );

  let userData = {};

  const querySnapshot = await getDocs(queryChats);
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    if(data.email == user.email)
      userData = { ...doc.data(), uid: doc.id };
  });
  return userData;
};

export const NewLearn = () => {
  const [user, loading] = useAuthState(auth);
  const [open, setOpen] = useState(false)
  // @ts-ignore
  const [userData, setUserData] = useState({email: ""})

  const methods = useForm({ defaultValues: defaultValues });
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = methods;


  useEffect(()=>{
    if(!loading){
      console.log(user?.email)
      fetchUser(user).then((data) => {
        // @ts-ignore
        setUserData(data)
      })
      // @ts-ignore
      reset({ "email": user?.email})
    }
      
  }, [user])

  useEffect(()=>{
    console.log("qw",userData)
  }, [userData])
  

  const handle = async (data: FieldValues) => {
    // @ts-ignore
    createUser(data).then((u)=> setUserData(u))
    toast("Запрос отправлен")
    setOpen(false)
  };


  const createRecord = ()=>{
    if(!user)
      return toast("Пользователь не авторизован")
    
    setOpen(true)
  }
  return (
    <Box sx={{
      p:1
    }}>

      <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100vw',
        height: '100vh'
      }}
    >
      <Box sx={{
        backgroundColor: 'primary.main',
        p: 2,
        maxWidth: 560,
        maxHeight: 560,
      }}>
        <FormProvider {...methods}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  disabled
                  variant="filled"
                  color={errors.email ? "error" : "secondary"}
                  sx={{ width: 1, m: 1 }}
                  label="Почта"
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  variant="filled"
                  color={errors.phone ? "error" : "secondary"}
                  sx={{ width: 1, m: 1 }}
                  label="Телефон"
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              rules={{ required: false }}
              render={({ field: { value, onChange } }) => (
                <TextField 
                  multiline
                  variant="filled"
                  color={errors.message ? "error" : "secondary"}
                  sx={{ width: 1, m: 1 }}
                  label="Дополнительная информация"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Button
              sx={{ width: 1 }}
              variant="contained"
              onClick={handleSubmit((data) => handle(data))}
            >
              Отправить
            </Button>
          </div>
        </FormProvider>
      </Box>
    </Modal>




      <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
      }}>
        <Typography textAlign='center' sx={{
          p:1
        }}>
          <br/>
          Для записи на обучение заполните форму
        </Typography>

        <Button onClick={createRecord} variant="contained" disabled={loading || !!userData.email } sx={{
          width: 150,
          mb:1
        }}>
          {!!userData.email ? "Вы уже записаны" : "Записаться"}
        </Button>
       
      </Box>

        <Box>
          <CarouselWidget Component={carouselImageITem} news={[{src: '64-4abhuE7U.jpg'},{src: 'CgAOw33e4mY.jpg'},{src: '_u3iVB1dXq8.jpg'}]}/>
        </Box>
      
        <Typography sx={{
          p:1
        }}>
          Екатеринбургский авиационно-спортивный клуб ДОСААФ имени Героя Советского Союза А.К. Серова предлагает:
          <br/><br/>
          — Работа с молодёжью по линии десантных военно-патриотических клубов, парашютной, самолётной, планерной секций, авиамодельных кружков;<br/>
          — Военно-спортивные лагеря с профильной авиационной подготовкой;<br/>
          — Парашютные прыжки;<br/>
          — Ознакомительные полёты на высший пилотаж на самолёте Як-52;<br/>
          — Ознакомительные полёты на самолётах Як-18Т, Вильга-35А;<br/>
          — Полёты на планерах Бланик Л-13;<br/>
          — Лётное обучение по программам «Пилот – любитель», «Лётчик-спортсмен»;<br/>
          — Показательные выступления спортсменов-лётчиков, парашютистов и авиамоделистов.<br/>
          — Учебные центры<br/>
        </Typography>
      </Box>
      
    </Box>
  )
}

