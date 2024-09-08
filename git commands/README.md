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

## What is Git SSH?

Git SSH (Secure Shell) is a secure network protocol used for remote communication and operations with Git repositories. It provides a way to access, manage, and transfer data to and from remote Git servers securely. SSH uses encryption to ensure that all data transmitted between the client and the server is protected from eavesdropping, tampering, and other security threats.

In the context of Git, SSH is primarily used for authentication and secure data transfer when interacting with remote repositories. It allows developers to perform operations like cloning, pushing, and pulling without having to enter their username and password each time.

## How Git SSH Works

Git SSH operates on a key-based authentication system. Here's a detailed breakdown of how it works:

1. **Key Generation**:

   - You start by generating an SSH key pair on your local machine.
   - This pair consists of a public key and a private key.
   - The public key is meant to be shared with remote servers, while the private key must be kept secret on your local machine.

2. **Key Distribution**:

   - You add your public key to your account on the Git hosting service (like GitHub, GitLab, or Bitbucket).
   - The service stores this public key and associates it with your account.

3. **Authentication Process**:

   - When you attempt to connect to the remote Git server, your Git client initiates an SSH connection.
   - The server sends a challenge encrypted with your public key.
   - Your SSH client uses your private key to decrypt this challenge and sends a response.
   - If the response is correct, the server knows you possess the corresponding private key and grants access.

4. **Secure Communication**:
   - Once authenticated, SSH establishes an encrypted channel between your local machine and the remote server.
   - All Git commands and data transfers occur through this secure channel.

## Benefits of Using Git SSH

1. **Enhanced Security**:

   - SSH keys are significantly more secure than passwords.
   - Even if an attacker intercepts the communication, they can't derive your private key from it.

2. **Convenience**:

   - Once set up, you don't need to enter your username and password for every Git operation.
   - This saves time and reduces the risk of typing errors.

3. **Automation-Friendly**:

   - SSH keys are essential for automated processes, like continuous integration and deployment pipelines.
   - Scripts can use SSH keys without requiring manual input of credentials.

4. **Granular Access Control**:

   - You can use different SSH keys for different services or repositories.
   - This allows for more fine-grained control over access rights.

5. **No Password Storage**:
   - Since authentication is based on keys, there's no need for the Git server to store passwords.
   - This reduces the risk associated with password database breaches.

## Setting Up Git SSH

Setting up Git SSH involves several steps:

1. **Generate an SSH Key Pair**:

   - Open a terminal or command prompt.
   - Run the command: `ssh-keygen -t ed25519 -C "your_email@example.com"`
   - Choose a location to save the key (default is usually fine).
   - Optionally, set a passphrase for added security.

2. **Add Your SSH Key to the SSH Agent**:

   - Start the SSH agent: `eval "$(ssh-agent -s)"`
   - Add your key: `ssh-add ~/.ssh/id_ed25519`

3. **Add Your Public Key to Your Git Service Account**:

   - Copy the contents of your public key file (e.g., `~/.ssh/id_ed25519.pub`).
   - Go to your account settings on your Git service (GitHub, GitLab, etc.).
   - Find the SSH keys section and add your public key.

4. **Configure Git to Use SSH**:

   - When cloning new repositories, use the SSH URL instead of HTTPS.
   - For existing repositories, update the remote URL:
     `git remote set-url origin git@github.com:username/repository.git`

5. **Test Your Connection**:
   - Run: `ssh -T git@github.com` (replace github.com with your Git server if different)
   - You should see a success message if everything is set up correctly.

## Best Practices for Git SSH

1. **Use Strong Keys**:

   - Prefer Ed25519 keys over RSA when possible.
   - If using RSA, ensure a key length of at least 4096 bits.

2. **Protect Your Private Key**:

   - Never share your private key or store it in unsecured locations.
   - Consider using a passphrase for your key for added security.

3. **Use Different Keys for Different Services**:

   - This limits the impact if one key is compromised.

4. **Regularly Rotate Your Keys**:

   - Periodically generate new SSH keys and update them on your services.

5. **Use SSH Config Files**:

   - For advanced users, SSH config files can simplify managing multiple keys and connections.

6. **Keep Your System and Git Client Updated**:

   - Ensure you're using the latest versions to benefit from security updates.

7. **Monitor Your SSH Keys**:
   - Regularly review the SSH keys associated with your accounts.
   - Remove any keys that are no longer needed or may be compromised.

By understanding and implementing Git SSH, you significantly enhance the security and efficiency of your Git workflows. It's an essential tool for any developer working with remote Git repositories, providing a robust foundation for secure and convenient source code management.

## What is Git Archive?

Git Archive is a command that creates a compressed archive file of a specified Git tree (usually a commit or a tag). It's used to export a snapshot of your project without including the Git repository itself.

Key points:

- Creates a snapshot of your project at a specific point
- Excludes the .git directory and other Git-related files
- Useful for creating release distributions or backups

## Basic Usage

The general syntax is:

```
git archive [options] <tree-ish> [<path>...]
```

Where `<tree-ish>` can be a branch name, tag, or commit hash.

## Common Examples

1. Create a ZIP archive of the current HEAD:

   ```
   git archive --format=zip --output=project.zip HEAD
   ```

2. Create a tarball of a specific tag:

   ```
   git archive --format=tar.gz --output=v1.0.tar.gz v1.0
   ```

3. Archive a specific directory from the current HEAD:

   ```
   git archive --format=zip --output=docs.zip HEAD:docs
   ```

4. Create an archive with a prefix directory:
   ```
   git archive --prefix=project-root/ --format=zip --output=project-with-prefix.zip HEAD
   ```

## Using with .gitattributes

You can use .gitattributes to control which files are included in the archive:

1. Create a .gitattributes file in your project root:

   ```
   tests/ export-ignore
   .gitignore export-ignore
   ```

2. Now, when you run git archive, the 'tests' directory and .gitignore file will be excluded:
   ```
   git archive --format=zip --output=project-clean.zip HEAD
   ```

## Practical Use Case

Scenario: You want to create a clean distribution of your project's v2.0 release.

1. Tag your release:

   ```
   git tag -a v2.0 -m "Version 2.0"
   ```

2. Create the archive:
   ```
   git archive --format=zip --output=my-project-v2.0.zip --prefix=my-project-v2.0/ v2.0
   ```

This command creates a ZIP file named 'my-project-v2.0.zip' containing all files from the v2.0 tag, with all files placed inside a 'my-project-v2.0' directory in the ZIP.

Git Archive provides a straightforward way to create clean exports of your project, which is particularly useful for distribution or deployment scenarios where you don't want to include the entire Git history.

## What is GitOps?

GitOps is an operational framework that takes DevOps best practices used for application development such as version control, collaboration, compliance, and CI/CD, and applies them to infrastructure automation.

Key points:

- Uses Git as the single source of truth for declarative infrastructure and applications
- Ensures the entire system is described declaratively
- Automates updates when approved changes are made to the repository

## Core Principles of GitOps

1. **Declarative Configuration**: The entire system is described declaratively.
2. **Version Controlled**: All changes are stored in Git.
3. **Automated Deployment**: Approved changes to the repository are automatically applied to the system.
4. **Continuous Reconciliation**: Software agents continuously monitor the actual system state against the desired state in Git.

## How GitOps Works

1. Developers push code to a Git repository.
2. The CI pipeline runs tests and builds containers.
3. New container images are pushed to a registry.
4. The CD pipeline updates the manifest in the config repository.
5. A GitOps operator (e.g., Flux, ArgoCD) detects the change.
6. The operator pulls the new image and updates the cluster.

## Examples of GitOps in Action

### Example 1: Updating a Kubernetes Deployment

1. Update the deployment YAML in your Git repository:

   ```yaml
   # deployment.yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: myapp
   spec:
     replicas: 3
     template:
       spec:
         containers:
           - name: myapp
             image: myapp:v2.0 # Updated from v1.0 to v2.0
   ```

2. Commit and push the change:

   ```
   git add deployment.yaml
   git commit -m "Update myapp to v2.0"
   git push
   ```

3. The GitOps operator detects the change and automatically updates the cluster.

### Example 2: Using Flux for GitOps

1. Install Flux in your Kubernetes cluster:

   ```
   flux bootstrap github \
     --owner=<YOUR-GITHUB-USERNAME> \
     --repository=<YOUR-REPOSITORY-NAME> \
     --path=clusters/my-cluster
   ```

2. Define your application in the Git repository:

   ```yaml
   # myapp.yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: myapp
   spec:
     replicas: 2
     selector:
       matchLabels:
         app: myapp
     template:
       metadata:
         labels:
           app: myapp
       spec:
         containers:
           - name: myapp
             image: myapp:v1.0
   ```

3. Flux will automatically deploy this to your cluster. To update, just change the YAML in Git and push.

## Benefits of GitOps

1. **Increased Productivity**: Developers use familiar tools and processes for managing infrastructure.
2. **Enhanced Security**: Git's strong cryptography ensures the integrity of your infrastructure.
3. **Improved Reliability**: The entire system state is version controlled and can be easily rolled back.
4. **Consistency**: The declared state in Git always matches the state in production.

## Challenges and Considerations

1. **Learning Curve**: Teams need to adapt to the GitOps workflow.
2. **Tool Selection**: Choose the right GitOps tools for your specific needs.
3. **Secret Management**: Careful handling of sensitive information in Git repos is crucial.

GitOps provides a powerful framework for managing infrastructure and applications, leveraging Git's strengths to improve productivity, security, and reliability in operations.

## Git Cheatsheet

<a href="./SWTM-2088_Atlassian-Git-Cheatsheet.pdf" target="_blank">Download the PDF file</a>

# Git Init Command

The `git init` command is used to initialize a new Git repository.

## Command Overview

| Aspect               | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| **Purpose**          | Creates a new Git repository or reinitializes an existing one |
| **Usage**            | `git init [options] [directory]`                              |
| **Default behavior** | Initializes a repository in the current directory             |

## Common Options

| Option                                 | Description                                                             |
| -------------------------------------- | ----------------------------------------------------------------------- |
| `--bare`                               | Creates a bare repository (no working directory)                        |
| `--quiet`, `-q`                        | Only prints error and warning messages                                  |
| `--initial-branch=<name>`, `-b <name>` | Uses the specified name for the initial branch                          |
| `--separate-git-dir=<git-dir>`         | Creates the repository in the specified directory instead of .git/      |
| `--shared[=<permissions>]`             | Specifies that the Git repository is to be shared amongst several users |

## Examples

| Command                       | Description                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------- |
| `git init`                    | Initializes a new Git repository in the current directory                     |
| `git init my_project`         | Creates a new directory named 'my_project' with an initialized Git repository |
| `git init --bare my_repo.git` | Creates a new bare repository named 'my_repo.git'                             |
| `git init -b main`            | Initializes a new repository with the initial branch named 'main'             |

## Output Files

| File/Directory  | Purpose                                                                  |
| --------------- | ------------------------------------------------------------------------ |
| `.git/`         | Directory containing all the Git-related files                           |
| `.git/config`   | Repository-specific configuration file                                   |
| `.git/HEAD`     | Reference to the current branch                                          |
| `.git/objects/` | Directory storing all the content for your database                      |
| `.git/refs/`    | Directory storing pointers into commit objects (branches, tags, remotes) |

## Notes

- Running `git init` in an existing repository is safe. It will not overwrite things that are already there.
- The `--bare` option is used when creating a central repository that developers will clone from.
- Use `git init -b main` to start with a 'main' branch instead of the default 'master'.

## `git clone`

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
