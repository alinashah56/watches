# Committing and Pushing Your Code to GitHub

After you've created your GitHub repository and added the remote origin, follow these steps to commit and push your code:

## Step 1: Add All Files to Staging

```bash
git add .
```

This command adds all files in your project directory to the staging area.

## Step 2: Commit Your Changes

```bash
git commit -m "Initial commit"
```

This creates a commit with the message "Initial commit". You can replace this with any descriptive message you prefer.

## Step 3: Push Your Code to GitHub

```bash
git push -u origin main
```

This pushes your code to the 'main' branch of your GitHub repository. The `-u` flag sets up tracking, so in the future you can simply use `git push` without specifying the remote and branch.

## Troubleshooting

### If Your Local Branch is Named Differently

If your local branch is named differently (e.g., 'master' instead of 'main'), you can either:

1. Push to that branch name:

```bash
git push -u origin master
```

2. Or rename your branch to match GitHub's default:

```bash
git branch -M main
git push -u origin main
```

### Authentication Issues

If you're prompted for credentials and your password doesn't work, GitHub now requires a personal access token instead of a password for command-line operations:

1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with 'repo' permissions
3. Use this token as your password when prompted

### Large Files

If you have large files that exceed GitHub's file size limit (100 MB), you might need to use Git LFS or remove those files from your repository.