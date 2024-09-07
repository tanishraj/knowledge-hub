# Version Control and Git

## What is Version Control?

Version control is a system that helps track and manage changes to files over time. It's an essential tool in software development and can be useful for any project where you need to maintain a history of changes.

### Key Features of Version Control:

1. **Change Tracking**: Records who made changes, what changes were made, when, and why.
2. **Collaboration**: Allows multiple people to work on the same project simultaneously.
3. **Branching and Merging**: Supports creating separate lines of development and combining them later.
4. **Reverting**: Enables rolling back to previous versions if mistakes are made.
5. **Backup**: Often involves storing the project on a remote server for safekeeping.
6. **Documentation**: Provides a record of project evolution through commit messages.
7. **Release Management**: Helps manage different versions of software for release.

## What is Git?

Git is a distributed version control system created by Linus Torvalds in 2005. It's designed to handle everything from small to very large projects with speed and efficiency.

### Key Concepts in Git:

- **Repository**: A directory where Git has been initialized to start version controlling your files.
- **Commit**: A snapshot of your repository at a specific point in time.
- **Branch**: A parallel version of a repository that allows you to work freely without disrupting the main version.
- **Remote**: A common repository that all team members use to exchange their changes.
- **Clone**: A copy of a repository on your local machine.
- **Push**: Sending your committed changes to a remote repository.
- **Pull**: Fetching changes from a remote repository to your local machine.

## Basic Git Commands

Here are some fundamental Git commands to get started:

1. `git init`: Initialize a new Git repository
2. `git clone`: Create a local copy of a remote repository
3. `git add`: Add files to the staging area
4. `git commit`: Commit changes to the repository
5. `git status`: Check the status of your repository
6. `git push`: Upload local repository content to a remote repository
7. `git pull`: Fetch and download content from a remote repository

## Getting Started with Git

1. Install Git on your machine (if not already installed)
2. Configure your Git username and email
3. Create a new repository or clone an existing one
4. Make changes to your files
5. Stage and commit your changes
6. Push your changes to a remote repository (if working with one)

## Best Practices

- Commit often with clear, descriptive commit messages
- Use branches for new features or experiments
- Regularly pull changes from the remote repository to stay up-to-date
- Use a `.gitignore` file to exclude unnecessary files from version control

## Git vs GitHub

While Git and GitHub are related, they serve different purposes in the software development ecosystem. Understanding the distinction is crucial for developers.

### Git

- **What it is**: A distributed version control system
- **Purpose**: Tracks changes in source code during software development
- **Key features**:
  - Runs locally on your computer
  - Manages project history
  - Enables branching and merging
  - Works offline
- **Usage**: Command-line tool or through GUI clients

### GitHub

- **What it is**: A web-based hosting service for Git repositories
- **Purpose**: Provides a platform for storing, sharing, and collaborating on Git repositories
- **Key features**:
  - Hosts Git repositories in the cloud
  - Provides a web interface for Git
  - Offers additional collaboration features:
    - Pull requests
    - Issue tracking
    - Project management tools
    - Wikis
    - GitHub Actions (CI/CD)
  - Facilitates open-source project hosting
- **Usage**: Web interface or through GitHub CLI

### Key Differences

1. **Local vs Cloud**:

   - Git is a tool that runs locally on your machine
   - GitHub is a cloud-based hosting service for Git repositories

2. **Functionality**:

   - Git provides version control functionality
   - GitHub adds collaboration and project management features on top of Git

3. **Alternatives**:

   - Git is the version control system itself
   - GitHub has alternatives like GitLab, Bitbucket, which also host Git repositories

4. **Necessity**:
   - You can use Git without GitHub
   - You cannot use GitHub without Git

### How They Work Together

1. Developers use Git on their local machines to manage code changes
2. They can then push these changes to a repository hosted on GitHub
3. GitHub stores the repository and provides a platform for collaboration
4. Other developers can clone or pull from the GitHub repository to their local machines
5. The cycle continues with developers pushing and pulling changes between their local Git repositories and the GitHub-hosted repository

## How to Install Git

Installing Git on your system is the first step to start using version control. Here are instructions for Mac and Windows:

### Installing Git on Mac

There are several ways to install Git on a Mac:

1. **Using Homebrew (recommended)**:

   - Open Terminal.
   - Run: `brew install git`
   - Verify installation: `git --version`

2. **Using the Git installer**:

   - Download the latest <a href="https://sourceforge.net/projects/git-osx-installer/files/">Git for Mac installer</a>
   - Follow the prompts to install Git.
   - Verify installation: `git --version`

3. **Using Xcode Command Line Tools**:
   - Open Terminal
   - Run the following command:
     ```
     xcode-select --install
     ```
   - Follow the prompts to install Xcode Command Line Tools, which includes Git

After installation, verify Git is installed by opening Terminal and typing:

```
git --version
```

### Installing Git on Windows

1. **Using the Git installer**:

- Download the installer from [git-scm.com](https://git-scm.com/download/win).
  - Run the installer and follow the setup instructions.
  - Verify installation: Open Command Prompt and run `git --version`.

After installation, verify Git is installed by opening Command Prompt or Git Bash and typing:

```
git --version
```

## Configure Your Username and Email in Git

After installing Git, it's crucial to configure your username and email. This information is used by Git to associate your identity with every commit you make. Here's how to do it:

### Setting Your Username

To set your username:

```
git config --global user.name "Your Name"
```

Replace "Your Name" with your actual name. For example:

```
git config --global user.name "John Doe"
```

### Setting Your Email

To set your email:

```
git config --global user.email "youremail@example.com"
```

Replace "youremail@example.com" with your actual email. For example:

```
git config --global user.email "johndoe@example.com"
```

### Verifying Your Settings

To verify that you have set your username and email correctly:

```
git config --global user.name
git config --global user.email
```

These commands will display your currently set username and email respectively.

### Understanding the --global Flag

- The `--global` flag sets this configuration for all your Git projects on your computer.
- If you want to use different settings for a specific project, you can run the command without the `--global` flag when you're in that project directory.

### Changing Your Settings

If you need to change your settings later, you can simply run the same commands with the new information:

```
git config --global user.name "New Name"
git config --global user.email "newemail@example.com"
```

### Configuration File Location

- These settings are stored in a file at `~/.gitconfig` on Unix systems (including macOS) or `C:\Users\<YourUsername>\.gitconfig` on Windows.
- You can directly edit this file with a text editor if you prefer, but using the `git config` commands is generally safer and easier.

### Best Practices

1. Use your real name: This helps your teammates identify you easily.
2. Use your work email for work projects: If you're working on professional projects, use your work email address.
3. Be consistent: Try to use the same email across all your development tools (Git, GitHub, etc.) for consistency.

Remember, the email you use in your Git configuration should match the email you use for your remote Git services (like GitHub, GitLab, or Bitbucket) to ensure your commits are properly attributed to your account.

## What is Git SSH and What Does it Do?

Git SSH (Secure Shell) is a network protocol that provides a secure way to access and manage remote Git repositories. It allows you to connect and authenticate to remote servers and services without supplying your username and password each time.

### Key Concepts

1. **SSH Protocol**: A method for secure remote login from one computer to another.
2. **SSH Keys**: A pair of cryptographic keys used to authenticate your connection.
   - **Public Key**: Shared with the remote server (e.g., GitHub, GitLab).
   - **Private Key**: Kept secret on your local machine.

### What Git SSH Does

1. **Secure Authentication**: Provides a more secure alternative to password-based authentication.
2. **Encrypted Communication**: Ensures that all data transferred between your local machine and the remote repository is encrypted.
3. **Simplified Remote Operations**: Once set up, allows you to perform Git operations (push, pull, clone) without entering your username and password each time.

### How Git SSH Works

1. You generate an SSH key pair on your local machine.
2. You add the public key to your account on the remote Git service (e.g., GitHub).
3. When you perform a Git operation, your local Git client uses your private key to authenticate.
4. The remote server checks if your public key is authorized.
5. If authorized, the connection is established, and you can perform Git operations securely.

### Setting Up Git SSH

1. **Generate an SSH key pair**:

   ```
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   (Use `rsa` instead of `ed25519` for older systems)

2. **Add your SSH key to the ssh-agent**:

   ```
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

3. **Add the public key to your Git service account** (e.g., GitHub, GitLab).

4. **Test your connection**:
   ```
   ssh -T git@github.com
   ```
   (Replace `github.com` with your Git server if not using GitHub)

### Benefits of Using Git SSH

1. **Enhanced Security**: More secure than password authentication.
2. **Convenience**: No need to enter credentials for every operation.
3. **Better for Automation**: Useful for scripts and CI/CD pipelines.

### Best Practices

1. **Protect Your Private Key**: Never share your private key or store it in a public place.
2. **Use a Passphrase**: Add an extra layer of security to your SSH key.
3. **Use Different Keys**: Consider using different SSH keys for different services or purposes.

By using SSH with Git, you can interact with your remote repositories securely and efficiently, making your development workflow smoother and more secure.

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

# git init

## Description

The `git init` command is used to initialize a new Git repository. It creates a new `.git` subdirectory in your current working directory, which contains all of the necessary metadata for the new repository.

## Basic Syntax

```
git init [directory]
```

If `[directory]` is not specified, the command initializes the repository in the current directory.

## Options

### Common Options

- `--bare`: Create a bare repository (a repository without a working directory).
- `--shared[=<permissions>]`: Specify that the Git repository is to be shared amongst several users.

### Additional Options

- `--quiet`, `-q`: Only print error and warning messages; all other output will be suppressed.
- `--initial-branch=<branch-name>`, `-b <branch-name>`: Use the specified name for the initial branch in the newly created repository.
- `--separate-git-dir=<git-dir>`: Instead of initializing the repository in the `.git` directory, create a text file there containing the path to the actual repository.

## Examples

1. Initialize a new Git repository in the current directory:

   ```
   git init
   ```

2. Initialize a new Git repository in a specific directory:

   ```
   git init /path/to/your/new/repo
   ```

3. Create a bare repository:

   ```
   git init --bare /path/to/bare/repo.git
   ```

4. Initialize a repository with a specific initial branch name:
   ```
   git init --initial-branch=main
   ```

## Notes

- Running `git init` in an existing repository is safe. It will not overwrite things that are already there.
- The `--bare` option creates a repository that doesn't have a working directory, making it impossible to edit files and commit changes in that repository. Bare repositories are typically used as centralized repositories.
- After running `git init`, the repository is empty. You need to add files and commit them to start tracking changes.

##

# `git clone`

## Description

The `git clone` command is used to create a copy of a remote repository on your local machine. It downloads the entire repository, including all files, branches, and commit history.

## Basic Syntax

```
git clone <repository-url>
```

## Options

### Common Options

- `-b <branch>`, `--branch <branch>`: Clone a specific branch instead of the default branch.
- `--depth <depth>`: Create a shallow clone with a limited number of commits.
- `--recursive`: Initialize and clone submodules recursively.
- `-o <name>`, `--origin <name>`: Use a different name for the remote (default is "origin").

### Additional Options

- `--bare`: Create a bare repository (without a working directory).
- `--mirror`: Create a mirror repository (used for backups).
- `--single-branch`: Clone only a single branch.
- `--no-tags`: Don't clone any tags.
- `--shallow-submodules`: Clone submodules with a depth of 1.
- `--separate-git-dir=<dir>`: Store the Git repository in a separate directory.

## Examples

1. Clone a repository:

   ```
   git clone https://github.com/user/repo.git
   ```

2. Clone a specific branch:

   ```
   git clone -b develop https://github.com/user/repo.git
   ```

3. Create a shallow clone with only the latest commit:

   ```
   git clone --depth 1 https://github.com/user/repo.git
   ```

4. Clone a repository with a different name for the remote:
   ```
   git clone -o upstream https://github.com/user/repo.git
   ```

## Notes

- After cloning, your local repository will be set up with a remote named "origin" pointing to the original repository (unless changed with `-o` option).
- You can specify a different directory name for the cloned repository by adding it after the repository URL:

  ```
  git clone https://github.com/user/repo.git my-repo-clone
  ```
