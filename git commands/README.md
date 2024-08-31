# What is version control?

Version control is a system that helps track changes to files over time. It allows multiple people to collaborate on a project by keeping a history of changes, so you can:

1. **Revert to Previous Versions:** If something goes wrong, you can go back to a previous state.
2. **Track Changes:** You can see who made what changes, when, and why.
3. **Collaborate Efficiently:** Multiple people can work on the same project simultaneously without overwriting each other's work.

Git is one of the most popular version control systems. It helps manage the codebase of a project, especially when multiple developers are involved. GitHub, on the other hand, is a platform that hosts Git repositories online, enabling easier collaboration and sharing.

## Benefits of version control systems

Version control systems (VCS) offer numerous advantages, especially in collaborative environments. Below are some key benefits:

#### 1. History Tracking

- **Detailed Change Logs**: Every change made to a file is recorded with details like the author, timestamp, and description of the change.
- **Project Evolution**: Understand how and why the project has evolved over time.

#### 2. Collaboration

- **Simultaneous Work**: Multiple team members can work on the same project at the same time without overwriting each other’s changes.
- **Conflict Resolution**: A VCS manages and merges different versions of files, ensuring smooth collaboration.

#### 3. Backup and Recovery

- **Reliable Backups**: The entire history of the project is stored, allowing easy recovery of files or the entire project in case of an issue.
- **Undo Mistakes**: Revert to previous versions if something goes wrong.

#### 4. Branching and Merging

- **Isolated Development**: Create branches for new features or experiments without affecting the main project.
- **Safe Merging**: Once a feature is stable, it can be merged back into the main branch with ease.

#### 5. Traceability

- **Lineage of Code**: Trace the origin of each line of code and understand the context of changes.
- **Purposeful Changes**: Identify the reason behind each modification.

#### 6. Automation and Continuous Integration

- **Integration with Tools**: VCS can be integrated with testing, deployment, and code quality tools for automation.
- **Continuous Development**: Support for continuous integration and deployment workflows.

These benefits make version control systems an essential tool for managing and collaborating on any project, whether it's software development or document editing.

## Git vs Github?

- **Git** is a version control system that you use locally on your computer to manage the history of your project.
- **GitHub** is a platform that hosts Git repositories online, providing additional features for collaboration, project management, and community engagement.

### **Git**

- **Type**: Version Control System (VCS)
- **Purpose**:
  - Git is a tool used to track changes in files and coordinate work among multiple developers.
  - It allows you to manage the history of your project, branch off for new features, merge changes, and revert to earlier versions.
- **Installation**:
  - Git is installed locally on your computer, and you use it via the command line or GUI tools.
- **Functionality**:
  - **Local Repositories**: You work with local copies of your project, and changes are made on your machine.
  - **Distributed**: Every developer has a full copy of the project’s history.
  - **Branching and Merging**: Git provides powerful tools to create branches for feature development and merge them back into the main project.
  - **Staging Area**: Git allows you to stage changes before committing, giving you control over what goes into your project history.
- **Use Case**:
  - Primarily for managing version control in software development, but can be used for any project requiring version tracking.

### **GitHub**

- **Type**: Web-Based Hosting Service for Git Repositories
- **Purpose**:
  - GitHub hosts Git repositories online, enabling easier collaboration, sharing, and integration with other tools.
  - It provides a user-friendly interface for managing repositories, reviewing code, and collaborating with other developers.
- **Access**:
  - GitHub is accessed via a web browser, and you can interact with it using Git commands or through the GitHub website.
- **Functionality**:
  - **Remote Repositories**: You push and pull changes between your local Git repository and a remote repository hosted on GitHub.
  - **Collaboration Tools**: GitHub offers features like pull requests, issues, discussions, and project boards to help teams collaborate and manage projects.
  - **Community and Sharing**: You can share your projects publicly, contribute to open-source projects, and build a portfolio of work.
  - **CI/CD Integration**: GitHub integrates with Continuous Integration/Continuous Deployment (CI/CD) tools, allowing automated testing and deployment of your code.
- **Use Case**:
  - Hosting Git repositories, collaborating on projects, managing open-source projects, and leveraging community contributions.

## How Git Helps Developers and Organizations

### For Developers:

- **Collaboration**: Multiple developers can work on the same project simultaneously without conflicts.
- **Version History**: Access to a complete history of changes allows for easy rollback and understanding of the project’s evolution.
- **Experimentation**: Developers can safely experiment with new features in isolated branches.

### For Organizations:

- **Project Management**: Git enables structured workflows with clear version control, making it easier to manage large teams and projects.
- **Code Quality**: Branching and pull requests allow for code reviews and testing before merging, improving code quality.
- **Efficiency**: Git’s distributed nature and speed increase overall productivity and reduce bottlenecks in development processes.

## How to Install Git on Mac and Windows

### On Mac:

1. **Using Homebrew**:

   - Open Terminal.
   - Run: `brew install git`
   - Verify installation: `git --version`

2. **Using Mac installer**:
   - Download the latest <a href="https://sourceforge.net/projects/git-osx-installer/files/">Git for Mac installer</a>
   - Follow the prompts to install Git.
   - Verify installation: `git --version`

### On Windows:

1. **Using Git for Windows**:
   - Download the installer from [git-scm.com](https://git-scm.com/download/win).
   - Run the installer and follow the setup instructions.
   - Verify installation: Open Command Prompt and run `git --version`.

## Configure Your Username and Email in Git

### Set Username:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Verify Configuration:

```bash
git config --global --list
```

## What is Git SSH and What Does it Do?

### Git SSH:

- **SSH (Secure Shell)**: A protocol used to securely connect to remote servers.
- **Git SSH**: Enables secure communication between your local machine and remote Git repositories (e.g., on GitHub, GitLab).

### What It Does:

- **Authentication**: SSH keys replace the need for username/password authentication, enhancing security.
- **Secure Transfers**: SSH ensures that all data transferred between your local machine and the remote repository is encrypted.
- **Convenience**: Once configured, SSH allows seamless pushing and pulling of code without repeatedly entering credentials.

### How it works?

SSH uses a pair of keys to initiate a secure handshake between remote parties. The key pair contains a public and private key. The private vs public nomenclature can be confusing as they are both called keys. It is more helpful to think of the public key as a "lock" and the private key as the "key". You give the public 'lock' to remote parties to encrypt or 'lock' data. This data is then opened with the 'private' key which you hold in a secure place.

### Use Case:

- Commonly used when working with private repositories or when enhanced security is needed for remote operations.

## How to Create an SSH Key

### Steps to Create an SSH Key:

1. **Open Terminal or Command Prompt**:

   - On Mac/Linux: Use Terminal.
   - On Windows: Use Git Bash or Command Prompt.

2. **Generate the SSH Key**:

   - Run the following command:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
   ```

   - Press Enter to accept the default file location.
   - Optionally, enter a passphrase for added security.

3. **Add SSH Key to SSH Agent**:

   - Start the SSH agent:

   ```bash
   eval "$(ssh-agent -s)"
   ```

   - Add the SSH key to the agent:

   ```bash
   ssh-add -K ~/.ssh/id_rsa
   ```

4. **Copy the SSH Key to Your Clipboard**:

- On Mac/Linux

```bash
pbcopy < ~/.ssh/id_rsa.pub
```

- On Windows

```bash
clip < ~/.ssh/id_rsa.pub
```

5. **Add SSH Key to GitHub/GitLab**:

   - Go to your account settings on GitHub/GitLab.
   - Click **SSH and GPG keys**.
   - Click **Add SSH key**.
   - Paste in the key and click **Add key**.

## Git Archive

### What is Git Archive?

- **Git Archive**: A command used to create an archive (e.g., `.zip` or `.tar`) of files from a specific Git repository or a particular branch/commit.

### Common Use Cases:

- **Distribution**: Package your code for distribution without including the entire Git history.
- **Backup**: Create a snapshot of your repository at a specific point in time.

### How to Use:

1. **Create a `.zip` Archive of the Latest Commit**:

   ```bash
   git archive --format=zip -o archive.zip HEAD
   ```

2. **Create a .tar.gz Archive of a Specific Branch**:

   ```bash
   git archive --format=tar.gz -o archive.tar.gz branch-name
   ```

3. **Create an Archive of a Specific Folder**:

   ```bash
   git archive --format=zip -o folder.zip HEAD:folder-name
   ```

   **Note**:

- The archive contains only the tracked files, excluding the .git directory and untracked files.
- `HEAD` refers to the current branch.
- `HEAD:folder-name` refers to the folder in the current branch.

## GitOps

### What is GitOps?

- **GitOps**: A set of practices that uses Git as the single source of truth for managing infrastructure and application deployments.
- **Automation**: Automates the deployment, monitoring, and management of infrastructure using Git and continuous integration/continuous deployment (CI/CD) pipelines.

### Key Concepts:

- **Declarative Configuration**: Infrastructure is described in code, stored in Git repositories.
- **Version Control**: All changes to infrastructure are tracked in Git, enabling easy rollback and auditability.
- **Continuous Deployment**: Automated pipelines deploy changes directly from the Git repository to the production environment.

### Benefits:

- **Consistency**: Ensures that the deployed environment matches the configuration in Git.
- **Auditability**: Every change is tracked and can be reviewed, providing a clear history of changes.
- **Collaboration**: Teams can collaborate on infrastructure changes using familiar Git workflows (e.g., pull requests).

### Use Cases:

- **Kubernetes Management**: Commonly used in Kubernetes environments to manage cluster configurations.
- **Infrastructure as Code (IaC)**: Works with tools like Terraform, Ansible, and Helm to manage infrastructure.

### Tools:

- **FluxCD**, **ArgoCD**: Popular tools that implement GitOps workflows.

## Git Cheatsheet

<a href="./SWTM-2088_Atlassian-Git-Cheatsheet.pdf" target="_blank">Download the PDF file</a>

## Git Commands

| Command    | What It Does?                                              | Options                                                                                                                                                                                                                 | Options Details                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git init` | Initializes a new Git repository in the current directory. | <table><tr><td>`--bare`</td></tr><tr><td>`--template=<template_directory>`</td></tr><tr><td>`--separate-git-dir=<git_dir>`</td></tr><tr><td>`--shared[=permissions]`</td></tr><tr><td>`-q`, `--quiet`</td></tr></table> | <table><tr><td>Creates a repository without a working directory.</td></tr><tr><td>Copies templates from the specified directory.</td></tr><tr><td>Stores the `.git` directory in the specified path.</td></tr><tr><td>Sets sharing permissions like `group` or `all`.</td></tr><tr><td>Suppresses output for a quieter operation.</td></tr></table> |
