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

# `git diff`

The `git diff` command is used to show changes between commits, commit and working tree, etc.

## Command Overview

| Aspect               | Description                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| **Purpose**          | Shows changes between the working directory, the index, and commits                |
| **Usage**            | `git diff [<options>] [<commit>] [--] [<path>...]`                                 |
| **Default behavior** | Shows changes in the working directory that are not yet staged for the next commit |

## Common Options

| Option                        | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| `--staged`, `--cached`        | Show changes between the index and the last commit         |
| `--stat`                      | Generate a diffstat instead of a patch                     |
| `--numstat`                   | Show number of added and deleted lines in decimal notation |
| `--shortstat`                 | Output only the last line of the --stat format             |
| `--name-only`                 | Show only names of changed files                           |
| `--name-status`               | Show only names and status of changed files                |
| `--color`                     | Show colored diff                                          |
| `--word-diff`                 | Show a word diff                                           |
| `-b`, `--ignore-space-change` | Ignore changes in amount of whitespace                     |

## Examples

| Command                     | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| `git diff`                  | Show unstaged changes                                |
| `git diff --staged`         | Show staged changes                                  |
| `git diff HEAD`             | Show all staged and unstaged changes                 |
| `git diff commit1 commit2`  | Show changes between two commits                     |
| `git diff branch1..branch2` | Show changes between the tips of branch1 and branch2 |
| `git diff -- path/to/file`  | Show changes to a specific file                      |
| `git diff --stat`           | Show a summary of changes instead of a full diff     |

## Output Format

| Section         | Description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| Diff header     | Shows the compared versions and file modes                             |
| Extended header | Contains information about file renames and similarity index           |
| Chunk header    | Indicates the lines where changes occurred in both versions            |
| Chunk content   | Shows the actual changes, with `-` for removed and `+` for added lines |

## Common Symbols in Output

| Symbol                        | Meaning                                                 |
| ----------------------------- | ------------------------------------------------------- |
| `+`                           | Line added                                              |
| `-`                           | Line removed                                            |
| ` ` (space)                   | Line unchanged                                          |
| `@@`                          | Start of a chunk header                                 |
| `\ No newline at end of file` | Indicates the file doesn't end with a newline character |

## Notes

- `git diff` by itself shows only unstaged changes.
- Use `git diff --staged` to see what changes are about to be committed.
- `git diff HEAD` shows all changes in your working directory since your last commit.
- You can compare branches using `git diff branch1..branch2`.
- To see changes to a specific file, add the file path after the command.
- The `--color` option can make the output easier to read.
- `--word-diff` is useful for seeing changes within lines.
- You can use `git diff` with commit hashes to compare specific commits.
- `git diff` can be combined with other Git commands like `log` for more complex comparisons.
- Large diffs can be hard to read; consider using tools like `git difftool` for a graphical interface.

# `git stash`

The `git stash` command is used to temporarily store modified, tracked files in order to clean your working directory.

## Command Overview

| Aspect               | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| **Purpose**          | Saves modified and staged changes that you are not ready to commit |
| **Usage**            | `git stash <subcommand> [<options>]`                               |
| **Default behavior** | When used without options, pushes a new stash onto the stash stack |

## Common Subcommands

| Subcommand | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| `push`     | Save your local modifications to a new stash (default action)        |
| `pop`      | Remove and apply a single stashed state from the stash list          |
| `apply`    | Apply a single stashed state from the stash list without removing it |
| `list`     | List the stashes that you currently have                             |
| `show`     | Show the changes recorded in the stash as a diff                     |
| `drop`     | Remove a single stashed state from the stash list                    |
| `clear`    | Remove all the stashed states                                        |
| `branch`   | Create and check out a new branch with the changes from a stash      |

## Common Options

| Option                      | Description                                            |
| --------------------------- | ------------------------------------------------------ |
| `-u`, `--include-untracked` | Stash also untracked files                             |
| `-a`, `--all`               | Stash also ignored and untracked files                 |
| `-k`, `--keep-index`        | All changes already added to the index are left intact |
| `-p`, `--patch`             | Interactively select hunks from the diff to stash      |
| `--message <message>`       | Add a custom message to the stash                      |

## Examples

| Command                                 | Description                       |
| --------------------------------------- | --------------------------------- |
| `git stash`                             | Stash current changes             |
| `git stash push -m "my_stash"`          | Stash with a custom message       |
| `git stash --include-untracked`         | Stash including untracked files   |
| `git stash list`                        | List all stashes                  |
| `git stash pop`                         | Apply and remove the latest stash |
| `git stash apply stash@{2}`             | Apply a specific stash            |
| `git stash drop stash@{1}`              | Remove a specific stash           |
| `git stash clear`                       | Remove all stashes                |
| `git stash branch new-branch stash@{1}` | Create a new branch from a stash  |

## Stash Storage

| Item            | Description                                              |
| --------------- | -------------------------------------------------------- |
| Stash Stack     | LIFO (Last In, First Out) data structure storing stashes |
| Stash Reference | Unique identifier for each stash (e.g., stash@{0})       |
| Stash Message   | Description of the stash (auto-generated or custom)      |

## Notes

- Stashes are stored in a Last-In-First-Out (LIFO) stack.
- By default, `git stash` only stashes tracked files that are modified or staged.
- Use `--include-untracked` or `--all` to stash untracked or ignored files.
- Stashes can be moved between repositories using `git stash push` and `git stash pop`.
- The `git stash` command is particularly useful when you need to switch branches quickly but aren't ready to commit.
- Be cautious when applying stashes, especially if you've made changes since creating the stash. Conflicts may occur.
- Stashes are local to your repository and are not pushed to remote repositories.
- You can view the contents of a stash without applying it using `git stash show -p`.
- The `git stash branch` command is useful for testing stashed changes in isolation.
- Regularly clear old stashes to keep your repository clean and manageable.

# `.gitignore`

The `.gitignore` file specifies intentionally untracked files that Git should ignore.

## File Overview

| Aspect       | Description                                             |
| ------------ | ------------------------------------------------------- |
| **Purpose**  | Tells Git which files or folders to ignore in a project |
| **Location** | Usually in the root directory of the repository         |
| **Format**   | Plain text file with one pattern per line               |

## Common Patterns

| Pattern           | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `filename.ext`    | Ignores the specific file                                               |
| `*.ext`           | Ignores all files with the specified extension                          |
| `directory/`      | Ignores the entire directory and its contents                           |
| `directory/*.ext` | Ignores all files with the specified extension in the directory         |
| `/filename.ext`   | Ignores the file only in the repository root                            |
| `!filename.ext`   | Negates ignore, i.e., tracks the file even if it's ignored by a pattern |

## Special Characters

| Character | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| `#`       | Marks line as a comment                                                      |
| `*`       | Matches zero or more characters                                              |
| `?`       | Matches exactly one character                                                |
| `!`       | Negates a pattern                                                            |
| `/`       | Used at start of pattern to avoid recursivity, at end to specify a directory |
| `**`      | Matches nested directories, e.g., `**/logs`                                  |

## Examples

| Pattern            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `*.log`            | Ignores all files with .log extension                |
| `build/`           | Ignores the entire build directory                   |
| `/todo.txt`        | Ignores todo.txt in the repository root              |
| `doc/*.txt`        | Ignores .txt files in the doc directory              |
| `doc/**/*.pdf`     | Ignores .pdf files in doc and all its subdirectories |
| `!important.log`   | Tracks important.log even if .log files are ignored  |
| `**/node_modules/` | Ignores node_modules directories in any location     |

## Gitignore Precedence

| Level                    | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| Local .gitignore         | In your repository, affects all users (most common)       |
| Global .gitignore        | In your home directory, affects all your Git repositories |
| Per-directory .gitignore | More specific rules for subdirectories                    |

## Common Use Cases

| Use Case                 | Example Patterns             |
| ------------------------ | ---------------------------- |
| Compiled code            | `*.class`, `*.o`, `*.pyc`    |
| Package directories      | `node_modules/`, `vendor/`   |
| Logs and databases       | `*.log`, `*.sql`, `*.sqlite` |
| OS generated files       | `.DS_Store`, `Thumbs.db`     |
| Editor config files      | `.idea/`, `.vscode/`         |
| Build output directories | `build/`, `dist/`, `out/`    |

## Notes

- The `.gitignore` file itself is usually tracked by Git.
- Patterns are applied recursively to subdirectories unless a leading slash is used.
- You can have multiple .gitignore files in different directories of your repository.
- More specific .gitignore files in subdirectories override rules in higher-level .gitignore files.
- If you want to ignore a file that's already tracked, you need to untrack it first with `git rm --cached`.
- Use `git check-ignore -v filename` to debug which pattern is causing a file to be ignored.
- GitHub maintains a useful collection of .gitignore templates for various projects and languages.
- The global .gitignore file can be set using `git config --global core.excludesfile ~/.gitignore_global`.
- Empty directories are not tracked by Git, so they don't need to be explicitly ignored.
- Remember that .gitignore only affects untracked files. If a file was tracked before adding it to .gitignore, it will remain tracked.

# `git tag`

The `git tag` command is used to create, list, delete or verify a tag object signed with GPG.

## Command Overview

| Aspect               | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| **Purpose**          | Creates, lists, deletes or verifies tags in a Git repository |
| **Usage**            | `git tag [<options>] [<tagname>] [<commit>]`                 |
| **Default behavior** | When used without options, lists existing tags               |

## Common Options

| Option                        | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| `-a`, `--annotate`            | Create an annotated tag                         |
| `-m <msg>`, `--message=<msg>` | Use the given tag message                       |
| `-d`, `--delete`              | Delete existing tags with the given names       |
| `-l`, `--list`                | List tags (can be combined with wildcards)      |
| `-n[<num>]`                   | Print <num> lines of each tag message           |
| `-f`, `--force`               | Replace an existing tag with the given name     |
| `--contains [<commit>]`       | List tags that contain the specified commit     |
| `-s`, `--sign`                | Create a signed tag, using the default GPG key  |
| `-v`, `--verify`              | Verify the GPG signature of the given tag names |

## Types of Tags

| Type        | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| Lightweight | Just a name for a specific commit                                                           |
| Annotated   | Stored as full objects in the Git database, contain tagger name, email, date, and a message |

## Examples

| Command                               | Description                            |
| ------------------------------------- | -------------------------------------- |
| `git tag v1.0`                        | Create a lightweight tag               |
| `git tag -a v1.1 -m "Version 1.1"`    | Create an annotated tag with a message |
| `git tag`                             | List all tags                          |
| `git tag -l "v1.8.5*"`                | List tags matching a pattern           |
| `git tag -d v1.0`                     | Delete a tag                           |
| `git tag -a v1.2 9fceb02`             | Tag a specific commit                  |
| `git push origin v1.5`                | Push a single tag to remote            |
| `git push origin --tags`              | Push all tags to remote                |
| `git tag -s v1.5 -m "Signed 1.5 tag"` | Create a signed tag                    |

## Tag Information

| Item        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Tag name    | Identifier for the tag (e.g., v1.0, release-2.1)             |
| Tagger      | Name and email of the person who created the tag (annotated) |
| Date        | When the tag was created (annotated)                         |
| Message     | Description or release notes (annotated)                     |
| Commit hash | The commit that the tag points to                            |

## Notes

- Tags are ref's that point to specific points in Git history.
- Lightweight tags are just a name and a pointer to a commit.
- Annotated tags are stored as full objects in the Git database.
- Tags don't move when new commits are made. They always point to the same commit.
- By default, `git push` doesn't transfer tags to remote servers. You need to explicitly push tags.
- You can check out tags, but this puts your repository in a "detached HEAD" state.
- Use semantic versioning (e.g., v1.0.0) for release tags to maintain clarity.
- Tags can be used to mark release points, important merges, or other significant points in history.
- You can use `git describe` to get a description of the current commit based on the nearest tag.
- Annotated tags are recommended for releases, as they contain valuable metadata.
- Be cautious when deleting tags, especially if they've been pushed to a shared repository.
- You can use `git tag -n` to view tag messages along with the tag names when listing.
- Tags can be used with other Git commands, like `git show v1.0` to view the tagged commit.

# `git blame`

The `git blame` command shows what revision and author last modified each line of a file.

## Command Overview

| Aspect               | Description                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| **Purpose**          | Shows what revision and author last modified each line of a file                                      |
| **Usage**            | `git blame [<options>] [<rev-opts>] [<rev>] [--] <file>`                                              |
| **Default behavior** | Annotates each line in the given file with information from the revision which last modified the line |

## Common Options

| Option              | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| `-L <start>,<end>`  | Annotate only the given line range                               |
| `-l`                | Show long revision names                                         |
| `-t`                | Show raw timestamp                                               |
| `-b`                | Show blank SHA-1 for boundary commits                            |
| `-w`                | Ignore whitespace changes                                        |
| `--color-lines`     | Color redundant metadata from previous lines differently         |
| `--color-by-age`    | Color lines by age                                               |
| `-C`                | Detect lines moved or copied from other files                    |
| `-M`                | Detect lines moved or copied from other files in the same commit |
| `--since=<date>`    | Show only lines changed since the given date                     |
| `--author=<author>` | Show only lines changed by author                                |

## Output Format

| Column       | Description                                        |
| ------------ | -------------------------------------------------- |
| Commit hash  | The hash of the commit that last modified the line |
| Author       | The author who last modified the line              |
| Date         | The date when the line was last modified           |
| Line number  | The line number in the file                        |
| Line content | The content of the line                            |

## Examples

| Command                                        | Description                                           |
| ---------------------------------------------- | ----------------------------------------------------- |
| `git blame filename.txt`                       | Show what revision and author last modified each line |
| `git blame -L 10,20 filename.txt`              | Restrict the output to lines 10-20                    |
| `git blame -w filename.txt`                    | Ignore whitespace changes                             |
| `git blame --since="3 weeks ago" filename.txt` | Show only changes made in the last 3 weeks            |
| `git blame -C filename.txt`                    | Show line moves within and across files               |
| `git blame -M filename.txt`                    | Show line moves within the same file                  |
| `git blame --color-by-age filename.txt`        | Color lines by age                                    |
| `git blame -b filename.txt`                    | Show boundary commits                                 |

## Use Cases

| Use Case             | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| Identifying changes  | Determine who last modified a specific line or section of code |
| Tracking bug origins | Find out when a bug was introduced and by whom                 |
| Code review          | Understand the history and context of changes in a file        |
| Attribution          | Determine the original author of a piece of code               |

## Notes

- `git blame` is often used to find the origin of problematic code.
- It's not meant to assign blame, but to understand the history of the code.
- Use `-w` to ignore whitespace changes, which can be helpful for meaningful blame.
- The `-C` and `-M` options can help track the origin of copied or moved lines.
- `git blame` can be combined with other Git commands for more complex investigations.
- Most IDEs and Git GUI tools have built-in blame functionality with enhanced visuals.
- For a more detailed history of a file, consider using `git log -p <filename>`.
- `git blame` works on a per-line basis, so it may not capture all relevant context.
- The output can be overwhelming for large files; consider using line range options.
- Remember that the last person to modify a line isn't necessarily the original author.
- `git blame` can be used with specific commits or branches, not just the current state.
- The `--since` option is useful for focusing on recent changes.
- Use `git gui blame` for a graphical interface to blame information.
- `git blame` doesn't show lines that have been deleted, only the current state of the file.

# `git clean`

The `git clean` command removes untracked files from the working directory.

## Command Overview

| Aspect               | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| **Purpose**          | Removes untracked files from the working tree                         |
| **Usage**            | `git clean [<options>]`                                               |
| **Default behavior** | Does nothing; requires at least `-f` or `-i` to actually remove files |

## Common Options

| Option                                | Description                                                         |
| ------------------------------------- | ------------------------------------------------------------------- |
| `-n`, `--dry-run`                     | Don't actually remove anything, just show what would be done        |
| `-f`, `--force`                       | Force git clean to delete the files                                 |
| `-i`, `--interactive`                 | Show what would be deleted and give a chance to interactively clean |
| `-d`                                  | Remove untracked directories in addition to untracked files         |
| `-x`                                  | Remove ignored files as well as untracked files                     |
| `-X`                                  | Remove only ignored files                                           |
| `-e <pattern>`, `--exclude=<pattern>` | Use the given pattern to exclude files from being removed           |
| `-q`, `--quiet`                       | Be quiet, only report errors                                        |

## Interactive Mode Options

| Option                   | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| `1`, `clean`             | Delete all files and directories                        |
| `2`, `filter by pattern` | Delete files and directories based on a pattern         |
| `3`, `select by numbers` | Delete files and directories by selecting their numbers |
| `4`, `ask each`          | Ask about each file or directory individually           |
| `5`, `quit`              | Exit without cleaning                                   |
| `6`, `help`              | Print help information                                  |

## Examples

| Command                 | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `git clean -n`          | Show what would be deleted                        |
| `git clean -f`          | Force deletion of untracked files                 |
| `git clean -fd`         | Force deletion of untracked files and directories |
| `git clean -fX`         | Remove only ignored files                         |
| `git clean -fx`         | Remove ignored and non-ignored untracked files    |
| `git clean -i`          | Interactively clean untracked files               |
| `git clean -e *.log -f` | Force clean but exclude .log files                |

## Affected Files

| File Type             | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| Untracked files       | Files in the working directory that are not in the staging area |
| Ignored files         | Files specified in .gitignore (only with -x option)             |
| Untracked directories | Directories not tracked by Git (only with -d option)            |

## Notes

- `git clean` is a dangerous command as it permanently deletes files.
- Always use `git clean -n` first to see what would be deleted.
- The `-f` (force) option is required unless the `clean.requireForce` configuration is set to false.
- `git clean` does not remove files specified in .gitignore by default.
- Use `-x` to remove ignored files as well, or `-X` to remove only ignored files.
- The `-i` option provides a safer, interactive way to clean files.
- `git clean` only operates on untracked files, it won't touch files that have been staged or committed.
- Be cautious when using `git clean -fd` as it will remove entire directories.
- `git clean` can be used with `git reset --hard` to completely undo all uncommitted changes.
- The command respects the `core.excludesFile` configuration option.
- Files specified by `clean.ignore` configuration are always excluded.
- Use `.gitignore` to prevent certain files from being accidentally removed.
- `git clean` can be restricted to specific paths by providing them after the options.
- The `-e` option can be used multiple times to exclude multiple patterns.
- `git clean` is often used to clean up build artifacts or generated files.

# `git revert`

The `git revert` command creates new commits that undo the changes made by previous commits.

## Command Overview

| Aspect               | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| **Purpose**          | Creates a new commit that undoes the changes made in a previous commit    |
| **Usage**            | `git revert [<options>] <commit>...`                                      |
| **Default behavior** | Creates a new commit that undoes the changes made by the specified commit |

## Common Options

| Option                                         | Description                                                |
| ---------------------------------------------- | ---------------------------------------------------------- |
| `-e`, `--edit`                                 | Edit the commit message prior to committing                |
| `-n`, `--no-commit`                            | Revert but do not create a new commit                      |
| `--no-edit`                                    | Do not edit the commit message                             |
| `-m parent-number`, `--mainline parent-number` | Specify the parent number for reverting a merge commit     |
| `--strategy=<strategy>`                        | Use the given merge strategy                               |
| `--no-recurse-submodules`                      | Do not revert submodules                                   |
| `--continue`                                   | Continue the revert operation after resolving conflicts    |
| `--abort`                                      | Cancel the revert operation and return to pre-revert state |
| `--quit`                                       | Forget about the current revert operation                  |

## Examples

| Command                   | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `git revert HEAD`         | Revert the most recent commit                                |
| `git revert abc123`       | Revert the commit with hash abc123                           |
| `git revert HEAD~3..HEAD` | Revert the last three commits                                |
| `git revert -n HEAD`      | Revert the last commit without creating a new commit         |
| `git revert -m 1 HEAD`    | Revert a merge commit, keeping changes from the first parent |
| `git revert --continue`   | Continue a revert operation after resolving conflicts        |
| `git revert --abort`      | Abort a revert operation and return to pre-revert state      |

## Revert Process

| Step                 | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| 1. Identify commit   | Specify the commit(s) to be reverted                                   |
| 2. Create patch      | Git creates a patch that undoes the changes in the specified commit(s) |
| 3. Apply patch       | The patch is applied to the working directory and staged               |
| 4. Create new commit | A new commit is created with the reverted changes                      |

## Commit Message Structure

| Part       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| First line | "Revert" followed by the subject line of the reverted commit       |
| Body       | "This reverts commit <hash>." followed by the reason for reverting |

## Notes

- `git revert` is a safe way to undo changes as it doesn't alter existing history.
- It creates a new commit that undoes the changes, rather than modifying existing commits.
- Reverting a merge commit requires specifying which parent to follow with `-m`.
- You can revert multiple commits in one command.
- If there are conflicts during revert, you need to resolve them manually.
- After resolving conflicts, use `git revert --continue` to complete the revert.
- Use `git revert --abort` to cancel a revert operation and return to the pre-revert state.
- `git revert` is different from `git reset` in that it doesn't remove commits from history.
- It's safe to use `git revert` on commits that have been pushed to a shared repository.
- The `--no-commit` option is useful if you want to revert multiple commits as a single new commit.
- Reverting a commit that added a file will delete that file.
- Reverting a commit that deleted a file will recreate that file.
- You can edit the revert commit message using the `-e` or `--edit` option.
- `git revert` can be used to undo a previous revert.
- It's a good practice to include the reason for reverting in the commit message.

# `git reset`

The `git reset` command is used to undo changes by moving the HEAD and current branch pointer to a specified commit.

## Command Overview

| Aspect               | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| **Purpose**          | Resets the current HEAD to a specified state                                  |
| **Usage**            | `git reset [<mode>] [<commit>]`                                               |
| **Default behavior** | Resets HEAD to the specified commit, keeping changes in the working directory |

## Reset Modes

| Mode                | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `--soft`            | Does not touch the index file or the working tree            |
| `--mixed` (default) | Resets the index but not the working tree                    |
| `--hard`            | Resets the index and working tree. Any changes are discarded |

## Common Options

| Option          | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `--soft`        | Does not touch the index file or the working tree                        |
| `--mixed`       | Reset the index but not the working tree (default)                       |
| `--hard`        | Reset the index and working tree                                         |
| `--merge`       | Reset the index and update the files in the working tree                 |
| `--keep`        | Reset index entries and update files in the working tree                 |
| `--patch`, `-p` | Interactively select hunks in the difference between HEAD and `<commit>` |

## Examples

| Command                        | Description                                                    |
| ------------------------------ | -------------------------------------------------------------- |
| `git reset HEAD~1`             | Undo the last commit, keeping changes in the working directory |
| `git reset --hard HEAD~1`      | Undo the last commit and discard all changes                   |
| `git reset --soft HEAD~1`      | Undo the last commit, keeping changes staged                   |
| `git reset <file>`             | Unstage a file while keeping its modifications                 |
| `git reset --hard origin/main` | Reset local branch to match the remote branch                  |
| `git reset --merge ORIG_HEAD`  | Undo a merge preserving local modifications                    |
| `git reset --keep HEAD~1`      | Undo last commit while keeping modified tracked files          |

## Reset Process

| Step                  | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| 1. Move HEAD          | Points HEAD and the current branch to the specified commit                       |
| 2. Update Index       | Updates the staged snapshot to match the specified commit (if --mixed or --hard) |
| 3. Update Working Dir | Updates the working directory to match the specified commit (if --hard)          |

## Affected Areas

| Area                 | Soft Reset | Mixed Reset | Hard Reset |
| -------------------- | ---------- | ----------- | ---------- |
| Commit History       | Modified   | Modified    | Modified   |
| Staging Area (Index) | Unchanged  | Modified    | Modified   |
| Working Directory    | Unchanged  | Unchanged   | Modified   |

## Notes

- `git reset` can be dangerous, especially with `--hard`, as it can lead to loss of work.
- Always create a backup or use `git reflog` to recover if needed.
- `git reset` is often used to "undo" a `git add` before committing.
- It's generally safe to use `git reset` on commits that haven't been pushed to a shared repository.
- For commits that have been pushed, consider using `git revert` instead.
- `git reset --hard` can be used to completely discard all uncommitted changes.
- The `--patch` option allows for more granular control over which changes to reset.
- `git reset` moves the branch pointer, while `git checkout` moves the HEAD pointer.
- When used without a commit specified, `git reset` will unstage all changes.
- `git reset --hard` can be useful for cleaning up feature branches before merging.
- Be cautious when using `git reset` with merge commits, as it can lead to unexpected results.
- `git reset` can be used to squash commits by resetting and then creating a new commit.
- The `--keep` option is useful when you want to reset to a previous state but keep local modifications.
- After a `git reset`, you may need to force push (`git push --force`) if the branch was already pushed.
- Always communicate with your team before force pushing after a reset on shared branches.

# `git rm`

The `git rm` command is used to remove files from both the Git repository and the working directory.

## Command Overview

| Aspect               | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| **Purpose**          | Removes files from the Git repository and the working directory           |
| **Usage**            | `git rm [options] <file>...`                                              |
| **Default behavior** | Removes specified files from both the working directory and the Git index |

## Common Options

| Option             | Description                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| `--cached`         | Removes files only from the Git index, keeping them in the working directory |
| `-r`               | Allows recursive removal when a leading directory name is given              |
| `-f`, `--force`    | Override the up-to-date check and remove the files anyway                    |
| `--ignore-unmatch` | Exit with a zero status even if no files match                               |
| `-n`, `--dry-run`  | Don't actually remove any file(s). Instead, just show what would happen      |

## Examples

| Command                              | Description                                                             |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `git rm file.txt`                    | Removes file.txt from both the working directory and Git index          |
| `git rm --cached sensitive_file.txt` | Stops tracking sensitive_file.txt but keeps it in the working directory |
| `git rm -r old_directory`            | Recursively removes old_directory and its contents                      |
| `git rm \*.log`                      | Removes all .log files in the current directory                         |
| `git rm -n *.tmp`                    | Shows which .tmp files would be removed without actually removing them  |

## Resulting Structure

| Item              | Description                                        |
| ----------------- | -------------------------------------------------- |
| Working Directory | File is removed (unless --cached is used)          |
| Git Index         | File removal is staged for the next commit         |
| Git History       | File remains in history until a new commit is made |

## Notes

- `git rm` stages the file removal for the next commit. You need to commit the change to complete the removal from the repository history.
- Use `--cached` to untrack a file without deleting it from your local filesystem.
- If you accidentally remove a file, you can restore it using `git checkout -- <file>` if the removal hasn't been committed yet.
- `git rm` will fail if there are uncommitted changes to the file, unless you use the `-f` (force) option.
- The command removes files from the current branch. Other branches may still contain the file.
- Always be cautious when using `git rm`, especially with wildcards, to avoid unintended data loss.
- After using `git rm`, you typically want to commit the changes to finalize the removal in your repository.

# `git rebase`

The `git rebase` command is used to change the base of a branch, effectively rewriting the commit history.

## Command Overview

| Aspect               | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| **Purpose**          | Moves or combines a sequence of commits to a new base commit                   |
| **Usage**            | `git rebase [options] [<upstream> [<branch>]]`                                 |
| **Default behavior** | Moves the entire current branch to begin on the tip of the `<upstream>` branch |

## Common Options

| Option                | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `-i`, `--interactive` | Enters interactive mode for modifying commits during rebase    |
| `--onto <newbase>`    | Specifies the new base commit for the branch                   |
| `--continue`          | Resumes the rebase operation after resolving conflicts         |
| `--abort`             | Cancels the rebase operation and returns to the original state |
| `--skip`              | Skips the current commit and continues with the next one       |
| `-m`, `--merge`       | Uses merging strategies to rebase                              |
| `-s <strategy>`       | Specifies the merge strategy to use                            |
| `-X <option>`         | Passes an option to the merge strategy                         |
| `--stat`              | Displays a diffstat of changes since the last rebase           |

## Examples

| Command                                   | Description                                                             |
| ----------------------------------------- | ----------------------------------------------------------------------- |
| `git rebase master`                       | Rebases the current branch onto the master branch                       |
| `git rebase -i HEAD~3`                    | Starts an interactive rebase for the last 3 commits                     |
| `git rebase --onto master feature bugfix` | Rebases the bugfix branch onto master, starting from the feature branch |
| `git rebase --continue`                   | Continues a rebase after resolving conflicts                            |
| `git rebase --abort`                      | Aborts the current rebase operation                                     |

## Resulting Structure

| Item              | Description                                     |
| ----------------- | ----------------------------------------------- |
| Commit History    | New commits are created to replace the old ones |
| Branch Pointer    | Moved to the tip of the newly created commits   |
| Working Directory | Updated to reflect the state after rebasing     |

## Notes

- Rebasing rewrites commit history, which can cause issues if commits have been pushed to a shared repository.
- Avoid rebasing commits that have been pushed to public repositories unless you're certain no one has based work on them.
- Interactive rebasing (`-i`) is useful for cleaning up commit history before merging.
- Conflicts may occur during rebasing and need to be resolved manually.
- The `--onto` option is powerful for complex rebasing scenarios, like moving a specific range of commits.
- Rebasing can create a more linear and cleaner history compared to merging.
- Always ensure you have a clean working directory before starting a rebase.
- Consider creating a backup branch before complex rebases: `git branch backup-branch`.
- Use `git reflog` to recover from mistakes during rebasing.
- Large rebases can be time-consuming and complex, so plan accordingly.
- During rebasing, Git applies each commit in order. You may need to resolve the same conflict multiple times if later commits modify the same part of a file.

# `git reflog`

The `git reflog` command is used to manage and display the reference logs, which record when the tips of branches and other references were updated in the local repository.

## Command Overview

| Aspect               | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| **Purpose**          | Shows a log of changes to the HEAD and other references in the local repository |
| **Usage**            | `git reflog [<options>] [<ref>]`                                                |
| **Default behavior** | Displays the reflog for the HEAD reference                                      |

## Common Options

| Option                                | Description                                             |
| ------------------------------------- | ------------------------------------------------------- |
| `--all`                               | Shows all reflogs, not just HEAD                        |
| `--expire=<time>`                     | Prune entries older than the specified time             |
| `--expire-unreachable=<time>`         | Prune unreachable entries older than the specified time |
| `--rewrite`                           | Rewrite the reflog to remove old entries                |
| `--update-ref`                        | Updates the ref with the new value                      |
| `-n <number>`, `--max-count=<number>` | Limits the number of entries to show                    |
| `--pretty=<format>`                   | Specifies the format of the output                      |
| `--date=<format>`                     | Specifies the date format                               |

## Examples

| Command                                    | Description                                         |
| ------------------------------------------ | --------------------------------------------------- |
| `git reflog`                               | Shows the reflog for HEAD                           |
| `git reflog show master`                   | Shows the reflog for the master branch              |
| `git reflog --all`                         | Shows reflogs for all references                    |
| `git reflog --date=iso`                    | Shows the reflog with ISO date format               |
| `git reflog expire --expire=30.days --all` | Removes entries older than 30 days from all reflogs |

## Resulting Structure

| Item          | Description                                            |
| ------------- | ------------------------------------------------------ |
| Reflog Output | List of reference log entries showing past HEAD states |
| Entry Format  | `<short_hash> <ref>@{<index>}: <command>: <message>`   |
| Reflog Files  | Updated in `.git/logs/` directory                      |

## Notes

- The reflog is local to your repository and not shared with remotes.
- It's a safety net for recovering lost commits or undoing mistakes.
- Each entry in the reflog includes a timestamp, allowing you to reference specific points in time.
- The reflog is automatically updated when you make changes in your repository.
- By default, reflog entries expire after 90 days for reachable entries and 30 days for unreachable entries.
- You can use reflog entries to checkout specific states, e.g., `git checkout HEAD@{2}`.
- The reflog can help recover from hard resets, rebases gone wrong, or accidental branch deletions.
- It's not a replacement for regular backups, as it's stored within the `.git` directory.
- You can create multiple reflogs for different references (branches, remotes).
- The `git gc` command may remove unreachable objects that are no longer in the reflog.
- Understanding the reflog can greatly enhance your ability to manage and recover your Git history.

# `git fetch`

The `git fetch` command downloads objects and refs from another repository, updating the local repository's remote-tracking branches without merging the changes into your current branch.

## Command Overview

| Aspect               | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| **Purpose**          | Retrieves latest changes from remote repository without modifying local branches |
| **Usage**            | `git fetch [<options>] [<repository> [<refspec>...]]`                            |
| **Default behavior** | Fetches all branches from the default remote (usually 'origin')                  |

## Common Options

| Option                   | Description                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `--all`                  | Fetches from all remotes                                                              |
| `-p`, `--prune`          | Removes any remote-tracking references that no longer exist on the remote             |
| `-t`, `--tags`           | Fetches all tags and associated objects                                               |
| `--depth=<depth>`        | Limits fetching to the specified number of commits from the tip of each remote branch |
| `--shallow-since=<date>` | Fetches only commits newer than the specified date                                    |
| `--dry-run`              | Shows what would be done, without making any changes                                  |
| `-f`, `--force`          | Forces fetching even when it would not normally be considered up-to-date              |
| `-v`, `--verbose`        | Provides more detailed output                                                         |

## Examples

| Command                   | Description                                  |
| ------------------------- | -------------------------------------------- |
| `git fetch origin`        | Fetches changes from the 'origin' remote     |
| `git fetch --all`         | Fetches changes from all configured remotes  |
| `git fetch origin master` | Fetches only the master branch from 'origin' |
| `git fetch -p`            | Fetches and prunes deleted remote branches   |
| `git fetch --tags`        | Fetches all tags from the remote             |

## Resulting Structure

| Item                     | Description                                     |
| ------------------------ | ----------------------------------------------- |
| Local Repository         | Updated with new objects from the remote        |
| Remote-Tracking Branches | Updated to reflect the state of remote branches |
| Working Directory        | Remains unchanged                               |
| Local Branches           | Not automatically updated or merged             |

## Notes

- `git fetch` only downloads new data from a remote repository - it doesn't integrate any of this new data into your working files.
- It's safe to do anytime as it doesn't modify your local branches.
- After fetching, use `git merge` or `git rebase` to integrate the changes into your local branch.
- Use `git pull` instead of `git fetch` if you want to fetch and merge in one step.
- Fetching updates your remote-tracking branches (e.g., `origin/master`).
- It's a good practice to fetch before pushing to ensure you have the latest changes.
- The `--prune` option is useful for cleaning up deleted remote branches.
- For large repositories, you can use `--depth` to limit the amount of history fetched.
- `git fetch` can be used with specific branches, tags, or even commit SHAs.
- It's part of keeping your repository up-to-date and is often used in automated scripts and CI/CD pipelines.
- Fetching is what you do when you want to see what everybody else has been working on without integrating it into your work.
- The command is particularly useful in team environments where you want to check remote changes before integrating them.

# `git push`

The `git push` command is used to upload local repository content to a remote repository. It transfers commits from your local repository to a remote repo.

## Command Overview

| Aspect               | Description                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| **Purpose**          | Updates remote refs using local refs, while sending objects necessary to complete the given refs |
| **Usage**            | `git push [<options>] [<repository> [<refspec>...]]`                                             |
| **Default behavior** | Pushes the current branch to the configured upstream branch                                      |

## Common Options

| Option                 | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `-u`, `--set-upstream` | Sets the upstream for the current branch                       |
| `--all`                | Pushes all branches                                            |
| `--tags`               | Pushes all tags                                                |
| `--force`, `-f`        | Forces the push even if it results in a non-fast-forward merge |
| `--delete`             | Deletes the specified remote branch                            |
| `--dry-run`            | Does everything except actually send the updates               |
| `-v`, `--verbose`      | Run verbosely                                                  |
| `--prune`              | Remove remote branches that don't have a local counterpart     |

## Examples

| Command                               | Description                                            |
| ------------------------------------- | ------------------------------------------------------ |
| `git push origin master`              | Pushes the master branch to the origin remote          |
| `git push -u origin feature-branch`   | Pushes feature-branch and sets it as upstream          |
| `git push --all`                      | Pushes all local branches to their remote counterparts |
| `git push --tags`                     | Pushes all local tags to the remote                    |
| `git push origin --delete old-branch` | Deletes the old-branch from the origin remote          |

## Resulting Structure

| Item              | Description                                    |
| ----------------- | ---------------------------------------------- |
| Remote Repository | Updated with new commits from local repository |
| Remote Branches   | Updated to match pushed local branches         |
| Local Repository  | Remains unchanged                              |
| Upstream Tracking | May be set if -u option is used                |

## Notes

- `git push` only uploads changes that have been committed locally.
- It's a good practice to fetch and merge (or pull) before pushing to avoid conflicts.
- The `--force` option should be used with caution as it can overwrite remote changes.
- If you've created a new local branch, you need to specify both the remote and branch name the first time you push it.
- Use `git push --tags` to share tags with the remote repository.
- The `-u` option is useful for setting up tracking, which simplifies future push/pull operations.
- If your push is rejected, it usually means the remote has changes you don't have locally.
- `git push` can trigger hooks on the remote repository, like CI/CD pipelines.
- You can push to multiple remotes, but you need to do so explicitly.
- Be cautious when pushing to shared branches on public repositories, as it can affect other collaborators.
- The `--prune` option can help keep your remote branches tidy by removing obsolete ones.
- If you're working on a fork, you might need to specify both the remote and the branch, e.g., `git push origin feature-branch:feature-branch`.
- Always ensure you have the necessary permissions before pushing to a repository.
