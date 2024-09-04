
# Git Command

## Basics 

[Comment fonctionne GitHub ?](https://guides.github.com/introduction/git-handbook)  
[Lien Mozzilla](https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/GitHub)  


    
`git init`  initialise repo
    
`git clone`  create a copy of a remote repo
    
`git add filename`  add file to staging area ( si tout les fichiers =>  `git add .`)
    
`git commit -m 'commit message'`  commit (local) 
    
`git status` see status of repo

`git branch` see current branch or create a new if name provided

`git merge`  merge the specified branch’s history into the current one
    
`git pull`  update localy any commits from the tracking remote branch
    
`git push` upload local branch to remote
    


[Git Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)  
[Infos et exemples](https://docs.github.com/en/get-started/using-git/about-git)  


## Branching 

Branchin allows to work on features without touching the working code.

`git checkout` switch to another branch and check it out into your working directory

`git reset` cancel change by moving HEAD and thus, deleting the commits ( only works on local )

`git revert` will come back to another version. Remote commits will not be deleted. Locals will be. 


## Cherry pick 

`git cherry-pick <Commit1> <Commit2> <...>` copy a series of commits to your branch

`git rebase -i` will copy and change the order of the commits

## Tags 

`git tag tagname commit` will tag the commit.










