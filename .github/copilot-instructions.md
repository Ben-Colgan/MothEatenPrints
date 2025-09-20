# MothEatenPrints
MothEatenPrints is currently a minimal repository containing only documentation. The project structure and technology stack are not yet established.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Current Repository State
- **CRITICAL**: This is a minimal repository with only a README.md file
- No build system, dependencies, or project structure exists yet
- Technology stack is undefined - could be web, desktop, CLI, or other application types
- All development workflows must be established as the project grows

## Working Effectively

### Initial Repository Validation
Before making any changes, validate the current repository state:
```bash
cd /home/runner/work/MothEatenPrints/MothEatenPrints
ls -la
# Should show: .git/ .github/ README.md
git status
# Should show clean working tree
```

### Available Development Tools
The following tools are confirmed available in the environment:
```bash
git --version        # git version 2.51.0
node --version       # v20.19.5  
npm --version        # 10.8.2
python3 --version    # Python 3.12.3
make --version       # GNU Make 4.3
gcc --version        # gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
```

### Basic Operations That Work
All basic file and git operations work correctly:
- File creation, reading, writing, deletion
- Git commands (status, add, commit, push, pull)
- Directory creation and navigation
- Standard Linux commands

## Project Development Guidelines

### When Adding New Technology Stack
If adding Node.js/npm project:
```bash
npm init -y                    # Initialize package.json
npm install                    # Install dependencies - timing varies
npm run build                  # Build if configured - NEVER CANCEL, allow 60+ minutes
npm test                       # Run tests - NEVER CANCEL, allow 30+ minutes
npm run lint                   # Lint code if configured
```

If adding Python project:
```bash
python3 -m venv venv           # Create virtual environment
source venv/bin/activate       # Activate environment
pip install -r requirements.txt # Install dependencies - timing varies
python -m pytest              # Run tests - NEVER CANCEL, allow 30+ minutes
python -m flake8 .             # Lint if configured
```

If adding Make-based project:
```bash
make                           # Build - NEVER CANCEL, allow 60+ minutes
make test                      # Test - NEVER CANCEL, allow 30+ minutes
make clean                     # Clean build artifacts
```

### Critical Timing and Timeout Guidelines
- **NEVER CANCEL** any build or test commands
- Set timeouts to **60+ minutes for builds**
- Set timeouts to **30+ minutes for tests**
- If a command appears to hang, wait at least 60 minutes before considering alternatives
- Document actual timing when commands are established

### Validation Requirements
- **ALWAYS** run complete build before making code changes
- **ALWAYS** run full test suite after making changes
- **ALWAYS** validate that changes work through manual testing
- **ALWAYS** check git status before and after changes
- Run linting tools if available before committing

## Repository Structure

### Current Structure
```
.
├── .git/              # Git repository data
├── .github/           # GitHub configuration
│   └── copilot-instructions.md
└── README.md          # Project documentation
```

### Expected Future Structure (adapt as project grows)
When the project develops, expect these common patterns:
```
# For Node.js projects:
├── package.json       # npm configuration
├── node_modules/      # Dependencies (excluded from git)
├── src/              # Source code
├── tests/            # Test files
├── dist/             # Build output (excluded from git)

# For Python projects:
├── requirements.txt   # Dependencies
├── setup.py          # Package configuration
├── src/              # Source code
├── tests/            # Test files
├── venv/             # Virtual environment (excluded from git)

# For web projects:
├── index.html        # Entry point
├── css/              # Stylesheets
├── js/               # JavaScript
├── assets/           # Static assets
```

## Validation Scenarios

### Basic Repository Health
Always validate repository integrity:
```bash
git status                     # Check for untracked/modified files
git log --oneline -5          # Verify recent commits
ls -la                        # Confirm expected files present
```

### Before Making Changes
1. Ensure clean working directory: `git status`
2. Pull latest changes: `git pull`
3. Validate current functionality (if any builds/tests exist)

### After Making Changes
1. Run full build process (when established)
2. Run complete test suite (when established)
3. Manual validation of functionality
4. Git status check: `git status`
5. Commit changes with descriptive message

### Manual Testing Scenarios (adapt to project type)
Since the project type is not yet established, establish these patterns when functionality is added:

**For CLI applications:**
- Test `--help` flag functionality
- Test with sample input files
- Verify output files are created correctly

**For web applications:**
- Test in browser with basic user flows
- Verify all pages load correctly
- Test form submissions and interactions

**For libraries:**
- Import/require the library successfully
- Test public API methods
- Verify documentation examples work

## Common Commands Reference

### Git Operations (confirmed working)
```bash
git status                     # Check repository status
git add .                     # Stage all changes
git commit -m "message"       # Commit with message
git push                      # Push to remote
git pull                      # Pull from remote
git log --oneline -10         # View recent commits
```

### File Operations (confirmed working)
```bash
ls -la                        # List files with details
cat filename                  # View file contents
mkdir dirname                 # Create directory
rm filename                   # Remove file
cp source dest                # Copy file
```

### Directory Navigation (confirmed working)
```bash
pwd                           # Show current directory
cd /path/to/directory         # Change directory
find . -name "pattern"        # Find files by pattern
```

## Important Notes

### Repository Maintenance
- Keep README.md updated as project develops
- Add .gitignore file when build artifacts are introduced
- Update these instructions when build/test processes are established
- Document any project-specific setup requirements

### Development Workflow
1. Always read these instructions before starting work
2. Validate repository state before making changes
3. Make minimal, focused changes
4. Test thoroughly before committing
5. Update documentation when adding new processes

### Future Considerations
As the project grows, update these instructions to include:
- Specific build timing measurements
- Technology-specific linting rules
- Deployment procedures
- Environment setup requirements
- Integration test procedures

## Troubleshooting

### If Build Fails
1. Check git status for uncommitted changes
2. Verify all dependencies are installed
3. Check for syntax errors in configuration files
4. Review error messages for specific issues

### If Tests Fail
1. Run individual test suites to isolate failures
2. Check for environment-specific issues
3. Verify test data and fixtures are correct
4. Review recent changes that might affect tests

### If Git Operations Fail
1. Check network connectivity
2. Verify repository permissions
3. Check for merge conflicts
4. Ensure remote repository is accessible

Remember: This repository is in early development. These instructions will evolve as the project structure and requirements become established.