import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material"
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

const defaultValues = {
  createdAt: new Date(), 
  status: "новый",
  email: "",
  phone: "",
  message: "",
  type: "",
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
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Обучение</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Обучение"
                    onChange={onChange}
                    color={errors.type ? "error" : "secondary"}
                  >
                    <MenuItem value={"Автошкола"}>Автошкола</MenuItem>
                    <MenuItem value={"Спортивная организация"}>Спортивная организация</MenuItem>
                    <MenuItem value={"Авиационно-спортивный клуб"}></MenuItem>
                    <MenuItem value={"Удаленные классы автошкол"}>Удаленные классы автошкол</MenuItem>
                    <MenuItem value={"Спортивно-техническая школа"}>Спортивно-техническая школа</MenuItem>
                    <MenuItem value={"Учебныый центр"}>Учебныый центр</MenuItem>
                    
                  </Select>
                </FormControl>
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
        <Box>
          <img src="DSC_7929.jpg" width='100%' height='100%'/>
        </Box>
      
        <Typography sx={{
          p:1
        }}>
          Образование:<br/>
          — Авиационно-спортивные клубы<br/>
          — Автошколы<br/>
          — Удаленные классы автошкол<br/>
          — Спортивно-технические школы<br/>
          — Спортивные организации<br/>
          — Учебные центры<br/>


        </Typography>
        <Typography textAlign='center' sx={{
          p:1
        }}>
          <br/>
          Для записи на обучение заполните форму
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Button onClick={createRecord} variant="contained" disabled={loading || !!userData.email }>
          {!!userData.email ? "Вы уже записаны" : "Записаться"}
        </Button>
      </Box>
    </Box>
  )
}
