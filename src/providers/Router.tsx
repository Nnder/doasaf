import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../components/MainWrapper/Root";
import { News } from "../pages/News";
import { CurrentNews } from "../pages/CurrentNews";
import { NewLearn } from "../pages/NewLearn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>error</div>,
    caseSensitive: true,
    children: [
      {
        path: "/news",
        element: <News/>,
      },
      {
        path: "/news/:id",
        element: (<CurrentNews/>),
      },
      {
        path: "/newRecord",
        element: <NewLearn/>,
      },
      {
        path: "/learn",
        element: (
          <>
            <div>обучение</div>
          </>
        ),
      },
    ]
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
