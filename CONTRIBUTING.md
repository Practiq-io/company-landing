# Contributing guidelines

This document is created to help developers to start contributing. Considering developers can be of a different levels, we will try to be as thorough as possible.

## What should you know before you can get started

You only need to understand Git and Javascript together with React. If you don't feel comfortable with git, I would suggest going through the following:

- [Git from Atlassian](https://www.atlassian.com/git/tutorials)

## No commits to master

This repo is public, however you can not just push your code into the master branch. Most likely you won't have a direct access unless granted by admins.

## How to contribute

### Your code in master branch

In order to push your code into the master branch you would have to create a [Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request) which will have to be approved by owners of the repo.
But first things first. Let's first develop a new feature.

#### 1. Create a feature branch

```shell
cd /your_project_root
git checkout master # make sure you are on master before creating a feature branch
git checkout -b your_username/feature_name # create feature branch under your username
```

#### 2. Make some code changes to the project

After making changes in the editor of your choice, you are ready to commit them:


```shell
cd /your_project_root
git commit -a -m "Please, I'm begging you, make an understandable commit message."
git push
```

No your changes are on the origin/your_branch.

#### 3. Create a pull request

Go to [this page](https://github.com/Practiq-io/company-landing/compare) and create a pull request for you branch to be merged into the master.
This is required so we maintain quality of the code, share experience and get to know each other better.

#### 4. Iterate

Most likely your code is not ideal and there are areas of improvement. So other people will point out how improvements can be done.
After some iterations you code will be production-ready and will be approved.

#### 5. Continue contributing

### Common problems and solutions

Hopefully everything goes smooth in the previous steps and your code got into the master. If not let's figure out what is the issue:

#### Resolving merge conflicts

First of all please make sure that you understand why it happened. Read [this article](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) to get closer to the reasons.
Secondly just please do resolve it. Most likely this way will solve it:

```shell
cd /your_project_root # you should be on the branch that has conflicts listed in Pull Request
git checkout master
git pull --rebase # it's better to rebase to keep the history and avoid ambiguous merge commits if your branch is not consistent in a way
# Now you are on the up to date master
git checkout your_username/your_branchname
git merge master # now git will try to gracefully merge master into you branch and will say if there is a merge conflict

# Now you are in the merge phase. Use your favorite editor to resolve conflicts.
# It's very important that you first chat with the author of conflicting changes
# When you have resolved the conflicts, push the merge

git merge --continue # shell will ask you to create a commit message with a default one

# if there are changes left unstaged after merge, feel free to just create a new commit for that
# you can do something like git commit -a -m "Finishing merge with specific changes."

git push
# Congrats, your pull request should be ready to go now!
```

### Suggestions to the project or any discussions

To address an issue or to make a suggestion, please [raise an issue](https://github.com/Practiq-io/company-landing/issues/new) and get respondes from community.

