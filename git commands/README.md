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

# `git init`

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

# `git clone`

The `git clone` command is used to create a copy of an existing Git repository.

## Command Overview

| Aspect               | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| **Purpose**          | Creates a copy of a remote repository on your local machine              |
| **Usage**            | `git clone [options] <repository> [<directory>]`                         |
| **Default behavior** | Clones the repository into a directory named after the repository's name |

## Common Options

| Option                         | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| `--branch <name>`, `-b <name>` | Clones a specific branch instead of the remote's HEAD        |
| `--depth <depth>`              | Creates a shallow clone with a limited number of commits     |
| `--recursive`                  | Initializes and clones submodules recursively                |
| `--shallow-submodules`         | Clones submodules with a depth of 1                          |
| `--single-branch`              | Clones only a single branch                                  |
| `--no-tags`                    | Don't clone any tags, and set remote.origin.tagOpt=--no-tags |
| `--separate-git-dir=<git-dir>` | Sets the path to the repository's .git directory             |
| `--mirror`                     | Sets up a mirror of the source repository                    |

## Examples

| Command                                                  | Description                                         |
| -------------------------------------------------------- | --------------------------------------------------- |
| `git clone https://github.com/user/repo.git`             | Clones a repository into a new directory            |
| `git clone https://github.com/user/repo.git mydir`       | Clones a repository into the specified directory    |
| `git clone -b dev https://github.com/user/repo.git`      | Clones a specific branch of a repository            |
| `git clone --depth 1 https://github.com/user/repo.git`   | Creates a shallow clone with only the latest commit |
| `git clone --recursive https://github.com/user/repo.git` | Clones a repository and its submodules              |

## Resulting Structure

| Item                  | Description                                  |
| --------------------- | -------------------------------------------- |
| `<repo-name>/`        | Root directory of the cloned repository      |
| `<repo-name>/.git/`   | Git-specific files for the cloned repository |
| `<repo-name>/<files>` | Working tree of the cloned repository        |

## Notes

- `git clone` automatically creates a remote named "origin" for the cloned repository.
- Use `git clone --mirror` for creating a bare mirror of the repository.
- Shallow clones (`--depth`) can significantly reduce download time for large repositories.
- The `--recursive` option is useful when cloning repositories with submodules.
- HTTPS and SSH are common protocols used with `git clone`.

# `git config`

The `git config` command is used to get and set repository or global options.

## Command Overview

| Aspect               | Description                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**          | Sets configuration values for your Git installation                                                                         |
| **Usage**            | `git config [<file-option>] [--type=<type>] [--show-origin] [--show-scope] [-z\|--null] <name> [<value> [<value-pattern>]]` |
| **Default behavior** | Reads from and writes to the repository-specific configuration file                                                         |

## Common Options

| Option         | Description                                       |
| -------------- | ------------------------------------------------- |
| `--global`     | Use global config file (~/.gitconfig)             |
| `--system`     | Use system-wide config file (/etc/gitconfig)      |
| `--local`      | Use repository config file (.git/config, default) |
| `--list`, `-l` | List all variables set in config file             |
| `--get`        | Get the value for a given key                     |
| `--add`        | Add a new variable                                |
| `--unset`      | Remove a variable                                 |
| `--edit`       | Open the config file in an editor                 |

## Common Configurations

| Configuration       | Command                                           | Description                                          |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| User name           | `git config --global user.name "Your Name"`       | Sets the name attached to your commits               |
| User email          | `git config --global user.email "your@email.com"` | Sets the email attached to your commits              |
| Default editor      | `git config --global core.editor "vim"`           | Sets your default text editor                        |
| Default branch name | `git config --global init.defaultBranch main`     | Sets the default branch name for new repositories    |
| Credential helper   | `git config --global credential.helper cache`     | Caches your credentials for a certain amount of time |
| Color UI            | `git config --global color.ui auto`               | Enables helpful colorization of command line output  |

## Examples

| Command                                    | Description                                   |
| ------------------------------------------ | --------------------------------------------- |
| `git config --list`                        | Lists all configurations                      |
| `git config user.name`                     | Gets the user name for the current repository |
| `git config --global user.name "John Doe"` | Sets the global user name                     |
| `git config --global --unset user.name`    | Removes the global user name setting          |
| `git config --global alias.co checkout`    | Creates a global alias 'co' for 'checkout'    |

## Configuration Levels

| Level  | File Location                        | Applied To                                         |
| ------ | ------------------------------------ | -------------------------------------------------- |
| System | /etc/gitconfig                       | All users on the system and all their repositories |
| Global | ~/.gitconfig or ~/.config/git/config | All repositories for the current user              |
| Local  | .git/config (in current repo)        | The current repository only                        |

## Notes

- The `--global` flag writes to a global ~/.gitconfig file for the user.
- Local (repository) settings override global settings, which override system settings.
- Use `git config --edit --system/--global/--local` to directly edit the respective config file.
- The `--add` option will append the value to a possibly existing multi-valued variable.

# `git alias`

Git aliases are shortcuts for longer Git commands, allowing users to create custom commands to simplify their workflow.

## Command Overview

| Aspect               | Description                                              |
| -------------------- | -------------------------------------------------------- |
| **Purpose**          | Create shortcuts for Git commands to improve efficiency  |
| **Usage**            | `git config --global alias.<alias-name> '<git-command>'` |
| **Default behavior** | No default aliases; users must create their own          |

## Common Options

| Option     | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `--global` | Sets the alias for all repositories of the current user            |
| `--local`  | Sets the alias for the current repository only (default)           |
| `--system` | Sets the alias for all users on the system (requires admin rights) |

## Examples

| Command                                             | Description                                          |
| --------------------------------------------------- | ---------------------------------------------------- |
| `git config --global alias.co checkout`             | Creates an alias 'co' for 'checkout'                 |
| `git config --global alias.br branch`               | Creates an alias 'br' for 'branch'                   |
| `git config --global alias.ci commit`               | Creates an alias 'ci' for 'commit'                   |
| `git config --global alias.st status`               | Creates an alias 'st' for 'status'                   |
| `git config --global alias.unstage 'reset HEAD --'` | Creates an alias 'unstage' to unstage files          |
| `git config --global alias.last 'log -1 HEAD'`      | Creates an alias 'last' to show the last commit      |
| `git config --global alias.visual '!gitk'`          | Creates an alias to launch a GUI (gitk in this case) |

## Resulting Structure

| Item             | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `~/.gitconfig`   | File where global aliases are stored (for the current user) |
| `.git/config`    | File where local aliases are stored (in the repository)     |
| `/etc/gitconfig` | File where system-wide aliases are stored                   |

## Usage of Aliases

| Command                | Equivalent                   | Description                          |
| ---------------------- | ---------------------------- | ------------------------------------ |
| `git co main`          | `git checkout main`          | Switch to the main branch            |
| `git br -a`            | `git branch -a`              | List all branches                    |
| `git ci -m "Message"`  | `git commit -m "Message"`    | Commit with a message                |
| `git st`               | `git status`                 | Check the status of the working tree |
| `git unstage file.txt` | `git reset HEAD -- file.txt` | Unstage file.txt                     |
| `git last`             | `git log -1 HEAD`            | Show the last commit                 |

## Notes

- Aliases can significantly speed up your Git workflow by reducing typing.
- You can use aliases to create new Git commands or modify existing ones.
- Aliases starting with an exclamation mark (!) are treated as external commands.
- You can view your current aliases by running `git config --get-regexp alias`.
- To remove an alias, use `git config --global --unset alias.<alias-name>`.
- Aliases are stored in Git configuration files and can be version controlled.
- Be cautious when sharing aliases, as they may contain system-specific commands.

# `git commit`

The `git commit` command is used to save your changes to the local repository.

## Command Overview

| Aspect               | Description                                             |
| -------------------- | ------------------------------------------------------- |
| **Purpose**          | Records changes to the repository                       |
| **Usage**            | `git commit [<options>]`                                |
| **Default behavior** | Opens the default text editor to enter a commit message |

## Common Options

| Option            | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `-m <message>`    | Use the given message as the commit message                                   |
| `-a`, `--all`     | Automatically stage files that have been modified and deleted                 |
| `--amend`         | Amend the previous commit                                                     |
| `-s`, `--signoff` | Add a Signed-off-by trailer by the committer at the end of the commit message |
| `--no-verify`     | Bypass the pre-commit and commit-msg hooks                                    |
| `--dry-run`       | Show what would be committed without actually committing                      |
| `-v`, `--verbose` | Show unified diff between the HEAD commit and what would be committed         |

## Examples

| Command                                    | Description                                            |
| ------------------------------------------ | ------------------------------------------------------ |
| `git commit -m "Add new feature"`          | Commit with a short message                            |
| `git commit -am "Fix bug and update docs"` | Stage all tracked, modified files and commit           |
| `git commit --amend`                       | Amend the previous commit                              |
| `git commit --amend --no-edit`             | Amend the previous commit without changing the message |
| `git commit -s -m "Implement feature X"`   | Commit with a sign-off trailer                         |

## Resulting Actions

| Action                | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Create a new commit   | A new commit object is created in the Git repository |
| Update branch pointer | The current branch pointer moves to the new commit   |
| Record commit message | The provided message is stored with the commit       |
| Update commit history | The commit becomes part of the project's history     |

## Commit Structure

| Item             | Description                                            |
| ---------------- | ------------------------------------------------------ |
| Commit hash      | Unique identifier for the commit                       |
| Author           | Name and email of the person who created the changes   |
| Committer        | Name and email of the person who committed the changes |
| Date             | Timestamp of when the commit was created               |
| Commit message   | Description of the changes made in the commit          |
| Parent commit(s) | Hash of the previous commit(s) this commit is based on |

## Notes

- A good commit message should be concise yet descriptive of the changes made.
- The first line of the commit message is treated as the subject line.
- Use the body of the commit message to explain the what and why of the changes.
- Commits should ideally contain related changes and be atomic.
- Use `git add` to stage changes before committing.
- The `--amend` option is useful for modifying the most recent commit.
- Be cautious when amending commits that have already been pushed to a shared repository.
- Use `git commit --verbose` to see the changes you're committing in the commit message editor.
