import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
const Root = () => {
  return (
    <>
      <div>навбар + футер, {<div>Главная</div> || <Outlet/>}</div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>error</div>,
    caseSensitive: true,
  },
  {
    path: "/news",
    element: (
      <>
        <div>Новости</div>
      </>
    ),
  },
  {
    path: "/news/:id",
    element: (
      <>
        <div>Новость</div>
      </>
    ),
  },
  {
    path: "/newRecord",
    element: (
      <>
        <div>Записаться на обучение</div>
      </>
    ),
  },
  {
    path: "/learn",
    element: (
      <>
        <div>обучение</div>
      </>
    ),
  },
  {
    path: "/sign",
    element: <div>Страница входа</div>,
    errorElement: <div>Ошибка не удалось загрузить страницу авторизации</div>,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
