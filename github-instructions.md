# GitHub Repository Creation Instructions

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the '+' icon in the top-right corner and select 'New repository'
3. Enter a repository name (e.g., 'e-commerce-app')
4. Add a description (optional): "A simple e-commerce application built with Express.js, HTML, CSS, and MSSQL"
5. Choose whether the repository should be public or private
6. Do NOT initialize the repository with a README, .gitignore, or license as we already have these files
7. Click 'Create repository'

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands to connect your existing repository. Run the following commands in your terminal:

```bash
# Add the remote origin (replace YOUR_USERNAME and REPO_NAME with your GitHub username and repository name)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Verify the remote was added
git remote -v
```

## Step 3: Add and Commit Your Files

```bash
# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial commit"
```

## Step 4: Push Your Code to GitHub

```bash
# Push the code to GitHub
git push -u origin main
```

## Step 5: Verify Your Repository

1. Go to your GitHub repository page (https://github.com/YOUR_USERNAME/REPO_NAME)
2. Confirm that all your files have been uploaded successfully

## Troubleshooting

### Authentication Issues

If you encounter authentication issues, GitHub now recommends using a personal access token instead of a password:

1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with appropriate permissions (repo)
3. Use this token as your password when prompted

### Branch Name Issues

If your local branch is named differently (e.g., 'master' instead of 'main'), use:

```bash
# Check your current branch name
git branch

# If needed, rename your branch to match GitHub's default
git branch -M main
```