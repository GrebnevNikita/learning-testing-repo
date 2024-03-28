# git learning data
https://training.github.com/downloads/ru/github-git-cheat-sheet/  
  

https://selectel.ru/blog/tutorials/how-to-rebase-commits-and-branches/


Rebase (перебазирование) — один из способов в git,
позволяющий объединить изменения двух веток. У этого способа есть преимущество 
перед merge (слияние) — он позволяет переписать историю ветки, придав  
истории тот вид, который нам нужен.

После этого git удалит и последовательно переместит коммиты C, D, F 
из ветки my_branch в ветку master — сначала C, затем D и F. 
Новые коммиты C’, D’, F’ полностью идентичны удаленным, меняется только хеш.

Сначала для ветки my_branch базовым коммитом был B, 
но после стал коммит E. Это и есть процесс под названием перебазирование.  

https://selectel.ru/blog/tutorials/how-to-rebase-commits-and-branches/  
Нам нужно интегрировать изменения из ветки develop в master. Воспользуемся обычным rebase:  
git checkout develop  
git rebase master


https://habr.com/ru/articles/161009/

- A pull request is a comparison of two branches  
- rebase нет разницы откуда куда и все ровно надо мерджить конфликты  

rebase current onto selected
надо встать на главную и нажать это на той что надо добавить



