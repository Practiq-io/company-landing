# Рекомендации по созданию проекта

Этот документ создан, чтобы помочь разработчикам начать свой вклад в проекте. Учитывая, что разработчики могут быть разных уровней, 
мы постараемся предоставить максимально развернутую информацию по проекту.

## Что необходимо знать для того что бы приступить к работе

Для начала желательно знать такие технологии как Git, Javascript и React. Если вы не чувствуете себя комфортно с git, предлогаю 
к прочтению:

- [Git from Atlassian](https://www.atlassian.com/git/tutorials)

## Никаких коммитов в ветку мастера

![alt text](https://memegenerator.net/img/instances/55464448/one-does-not-simply-push-code-into-the-master-branch.jpg "Logo Title Text 1")

У нас публичный репозиторий, однако в реалях компании у вас скорее всего не будет доступа заливать свой код в ветку мастера
без разрешения админов. 

## пошаговый процесс работы с git

### Как ваш код попадает в ветку мастер

<details>
<summary>Где находится вкладк Pull Request?</summary>

![](https://lh3.googleusercontent.com/bLAED8yEcWixftjL2ZkRgjdgdIymZD8ZRyQokiONPLW6OPz76EH4iIYnJRJQhRr2GE_MYz7kzFV6oaEb3wKEtexkxHxQ4hjqN-5oMBV6QlNVVHMwy7Gp1BQUltzzXnnT4NnV2MSpQDGE25dcIL8ObJZcWB940-xd88Hd2iA5gFxxKRmIqrJoGBHGYfhMo_EBftkyAZwhc_HNODxMdqmp2CWuQJhRg_9gebV3vBlRqqZ0v4sUlb-GnL8Vqxz4yJf-2RB0Km5thji10WTGL7pUafF8ts_XClSLXV5S29vjeB4Wv92v8_cnwudhu-awJY3iAgZGGru7k6N0nRF4VAEkxUX_t9iODOK3QOBDL4BJrH93F7GoVUab5VVMvOBi-UO20uj-CQt5nRorvEstQQnkn9CtVV2XzVhLJ2egxCFAdcY8r1c4cv-4OoqWlpGT-CBr_AsUZfwxaVYe7q8CMtr80DZdABxmVDtA-6agzfIxKcA325oGxZ5s8y6aJREcwyfgrex3WmjHlt_CC-cc6i1wcbTuY4ydS14gmW2xaEYH-Lb-1wZMOrSunyYF6lVVWaWqg14F_MKNrjXo4tzVJe2uW8Oc5ghgCIgU4b0zcQgboqX0DFqwGOU1VR-R9Fs66fD44GczDElNcq0CMnGjZ2DWqhr9RO9k7kx9pgYDFJqC-vGmkgt0P9Gu2Wfj2XxDSA=w1000-h405-no?authuser=0)
 
</details>

Чтобы запушить свой код в ветку мастера, необходимо сделать [Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request)
который должен быть одобрен админами репозитория.
Но обо всем по порядку. Давайте сначала напишим код для расширения функционала.


#### 1. Создаем новую ветку под свои изменения

```shell
cd /your_project_root  
git checkout master # Убедитесь в том что вы находитесь на ветке мастера прежде чем создавать новую ветку
git checkout -b your_username/your_branchname # Создаете новую ветку под своим именем и названием того над чем вы работаете
```

#### 2. Делаете изменения в коде своего проекта

После всех желаемых изменений, можно приступать к коммитам вашего кода:

```shell
cd /your_project_root
git commit -a -m "БОЛЬШАЯ просьба писать емкие и понятные коммиты" # Флаг -a заменяет команду "git add ."
git push
```

Теперь ваши изменения находятся на ветке origin/Ваша_ветка.

#### 3. Создаем Pull Request

Заходим [на эту страницу](https://github.com/Practiq-io/company-landing/compare) и подаем запрос Pull Request на объединение 
вашей ветки с мастером. Этот процесс позволяет поддерживать качество кодда, делиться опытом и узнать больше о разработчиках.

#### 4. Цикл проверки кода

Скорее всего у вас не получится написать чистый код с первого раза. Другие разработчики укажут на ваши ошибки и варианты по улучшению вашего кода.
После нескольких циклов таких проверок, ваш код будет одобрен и готов к эксполоатации.

#### 5. Продолжаем работать над проектом

### Частые проблемы и их решение

Надеюь все предыдщие шаги прошли без проблем и ваш код оказался в ветке мастера. Если нет, то давайте разберемся в чем может быть проблема:

#### Разрешаем конфликт при слиянии веток (Merge Conflict)

Во первых, вы должны понимать почему это произошло. Прочитайте [эту статью](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) для лучшего понимания этой проблемы.
Во вторых, необходимо разрешить конфликт объединения веток. Скорее всего следующие шаги помогут решить такую проблему:

```shell
cd /your_project_root # Вы должны находится на ветке где произошел конфликт описанный в Pull Request
git checkout master
git pull --rebase # rebase считается хорошей практикой для сохранения истории коммитов, также если ваша ветка 
не структурирована это позволит избежать нежеланных объединений  
# Теперь вы находитесь на самой последней версии мастер ветки
git checkout your_username/your_branchname
git merge master # Далее git попробует объединить мастер и вашу ветку. git сообщит если возник конфлик 
объединения (Merge Conflict)

# Вы дошли до фазы объединения. Для разрешения конфликта объединения используйте свою любимую среду разработки.
# В первую очередь вы должны обговорить проблему с автором чей код вызвал конфликт.
# Когда конфликт будет разрешен, можно объединять ветки.

git merge --continue # Терминал попросит создать коммит с стандартным сообщением/////////// need to fix this

# Если после объединения останутся изменения не взятые под версионный контроль(git add), можно просто создать
еще один коммит.
# Вы можете сделать что-то в вроде этого git commit -a -m "Завершение объединения, комментарии с деталями коммита"

git push # Отлично, теперь можно отправлять Pull Request!
```
