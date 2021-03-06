# Вячеслав Чичимов
- [Резюме](https://yadi.sk/d/t2mTZXAU3TMWKG)
- [Страница hh.ru](https://hh.ru/resume/0b763190ff0528e2370039ed1f68706a4e5251#key-skills)
- [Сайт-портфолио](https://webkitten.github.io/)

---

## Что не так с приведенным ниже листингом кода
- из синтаксических ошибок только лишняя фигурная скобка в конце
- отсутствие некоторых точек с запятой (jshint)
- повтор кода, первые 2 обработчика onclick можно вывести в отдельную функцию
- метод replace может привести к ошибке: TextVacancies и TextResume может быть не строкой

---

## Завершили работу над задачей, сделали все коммиты и выполнили пуш в общий тестовый репозиторий. Действие при обнаружении ошибки
- Правка последнего коммита с помощью ***git commit --amend***
- Правка остальных с помощью ***git push --force***

---

## Около часа ищите решение какой-либо проблемы или пытаетесь определить лучшее решение из возможных и точного ответа пока нет.
- Доработаю готовое решение
- Cоберу подобный функционал из готовых модулей

---

## Каково поведение Vue.js ? относительно дочерних элементов при перерисовке родительского?
Родитель передаёт данные потомку через входные параметры (props), а потомок посылает сообщения родителю посредством событий

![sad](https://ru.vuejs.org/images/props-events.png)

Входные параметры обеспечивают однонаправленный поток данных от родительского компонента к потомкам. Если свойство компонента-родителя изменилось, это изменение передаётся потомку, но не наоборот.

---

## Какой тип рекомендован для использования в свойстве data для компонентов Vue.js ?
- Data компонента должно быть функцией, за исключением new Vue

---

## Как рекомендовано именовать приватные свойства Vue.js ?
- с префиксом ***$_***

```
var myMixin = {
  methods: {
    $_myMixin_update: function () {
      // ..
    }
  }
}
```

