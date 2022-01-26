Реакт тестовое:

Реализовать двухстраничное spa приложение, с роутингом(React Router v6).

1.  Страница с табличным, и постраничным отображением списка марок пива.
    •  По выбору элемента таблицы осуществляется переход к детальному описанию пива - страница 2.
    •  Добавить возможность занести запись в избранное –
    Первый столбец с кастомизацией содержимого в виде рисунка со звездочкой c состоянием:
- в избранном; подсвечено/true
- нет в избранном; звездочка неактивна /false;
  В качестве хранилища «избранного» использовать localStorage;
  значально хранилище избранного не содержит записей

2.  Страница с детальным описанием пива:
    •  Детальное описание марки пива с изображением.
    •  Возможность добавить в избранное со страницы с детальным описанием пива.

Общие требования:
- при реализации, необходимо использовать ui-kit элементы (primereact);
- приложение должно содержать резиновую верстку приложения;
- расположение элементов на второй странице на свое усмотрение;

В качестве тестового api для реализации использовать - https://punkapi.com/documentation/v2

Будет плюсом:
1*) Выполнить сохранение "избранного" используя useContext
2*) Дополнить приложение строгой типизацией и ESLint(применив модуль, соответствующий стилю написания компонент функциональный/классовый)
3*) Сконфигурировать и применить в качестве хранилища "избранного" Redux.