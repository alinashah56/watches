# Adding Remote Origin to Your Git Repository

To connect your local Git repository to your GitHub repository, you need to add a remote origin. Replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name.

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

For example, if your GitHub username is "johndoe" and your repository name is "e-commerce-app", the command would be:

```bash
git remote add origin https://github.com/johndoe/e-commerce-app.git
```

After adding the remote origin, you can verify it was added correctly with:

```bash
git remote -v
```

This should display something like:

```
origin  https://github.com/YOUR_USERNAME/REPO_NAME.git (fetch)
origin  https://github.com/YOUR_USERNAME/REPO_NAME.git (push)
```